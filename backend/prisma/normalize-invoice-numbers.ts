import { PrismaClient } from '@prisma/client';

import { formatInvoiceNumber, invoicePeriod } from '../src/utils/invoice-number.js';

const prisma = new PrismaClient();

async function main() {
  const invoices = await prisma.invoice.findMany({
    select: { id: true, invoiceNumber: true, dueDate: true, createdAt: true },
    orderBy: [{ dueDate: 'asc' }, { createdAt: 'asc' }, { id: 'asc' }],
  });
  const assignedNumbers = new Map<string, string>();
  const sequenceByPeriod = new Map<string, number>();

  for (const invoice of invoices) {
    const period = invoicePeriod(invoice.dueDate);
    const sequence = (sequenceByPeriod.get(period) ?? 0) + 1;
    sequenceByPeriod.set(period, sequence);
    assignedNumbers.set(invoice.id, formatInvoiceNumber(period, sequence));
  }

  await prisma.$transaction(async (transaction) => {
    for (const invoice of invoices) {
      await transaction.invoice.update({
        where: { id: invoice.id },
        data: { invoiceNumber: `TMP-${invoice.id}` },
      });
    }

    for (const invoice of invoices) {
      await transaction.invoice.update({
        where: { id: invoice.id },
        data: { invoiceNumber: assignedNumbers.get(invoice.id)! },
      });
    }
  });

  console.log(`Normalized ${invoices.length} invoice number${invoices.length === 1 ? '' : 's'}.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
