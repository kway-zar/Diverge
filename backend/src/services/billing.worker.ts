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

    const suspended = await prisma.$transaction(async (transaction) => {
      const [currentInvoice, customer] = await Promise.all([
        transaction.invoice.findUnique({ where: { id: invoice.id } }),
        transaction.customer.findUnique({ where: { id: invoice.customerId } }),
      ]);
      if (!currentInvoice || !customer || customer.status !== 'ACTIVE') return false;
      if (currentInvoice.status === 'PAID' || currentInvoice.dueDate >= overdueBefore || currentInvoice.amount <= currentInvoice.creditAmount) return false;

      const actionKey = `${invoice.customerId}:SUSPEND:${invoice.id}`;
      const action = await transaction.provisioningAction.upsert({
        where: { actionKey },
        create: {
          actionKey,
          customerId: invoice.customerId,
          invoiceId: invoice.id,
          action: 'SUSPEND',
          status: 'PROCESSING',
          reason: `BR-01: invoice ${invoice.invoiceNumber} is more than ${OVERDUE_GRACE_DAYS} days overdue`,
        },
        update: { status: 'PROCESSING' },
      });
      await transaction.customer.update({ where: { id: customer.id }, data: { status: 'SUSPENDED' } });
      await transaction.subscription.updateMany({
        where: { customerId: customer.id, status: 'ACTIVE' },
        data: { status: 'PAUSED' },
      });
      await transaction.provisioningAction.update({
        where: { id: action.id },
        data: {
          status: 'COMPLETED',
          processedAt: new Date(),
          result: 'Internal account suspended under BR-01. External network provisioning is not configured.',
        },
      });
      return true;
    });
    if (suspended) queuedCount += 1;
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
