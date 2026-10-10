import { Prisma } from '@prisma/client';

import { prisma } from '../db/prisma.js';

const OVERDUE_GRACE_DAYS = 31;
const WORKER_INTERVAL_MS = 60 * 60 * 1000;

export async function enqueuePastDueSuspensions(now = new Date()) {
  const overdueBefore = new Date(now.getTime() - OVERDUE_GRACE_DAYS * 24 * 60 * 60 * 1000);
  const overdueInvoices = await prisma.invoice.findMany({
    where: { status: { not: 'PAID' }, dueDate: { lt: overdueBefore } },
    select: {
      id: true,
      customerId: true,
      invoiceNumber: true,
      amount: true,
      creditAmount: true,
      customer: { select: { id: true, status: true } },
    },
  });

  let queuedCount = 0;
  for (const invoice of overdueInvoices) {
    if (invoice.customer.status !== 'ACTIVE' || invoice.amount - invoice.creditAmount <= 0) continue;

    try {
      await prisma.provisioningAction.create({
        data: {
          actionKey: `${invoice.customerId}:SUSPEND:${invoice.id}`,
          customerId: invoice.customerId,
          invoiceId: invoice.id,
          action: 'SUSPEND',
          reason: `Invoice ${invoice.invoiceNumber} is more than ${OVERDUE_GRACE_DAYS} days overdue`,
        },
      });
      queuedCount += 1;
    } catch (error) {
      if (!(error instanceof Prisma.PrismaClientKnownRequestError) || error.code !== 'P2002') {
        throw error;
      }
    }
  }

  return queuedCount;
}

export function startBillingWorkers() {
  const enqueue = () => {
    void enqueuePastDueSuspensions().catch((error: unknown) => {
      console.error('BR-01 suspension scan failed', error);
    });
  };

  enqueue();
  const timer = setInterval(enqueue, WORKER_INTERVAL_MS);
  timer.unref();
}
