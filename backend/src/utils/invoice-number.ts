const INVOICE_NUMBER_PATTERN = /^INV-(\d{4})-(\d{2})-(\d{3})$/;

type InvoiceNumberStore = {
  invoice: {
    findMany(args: {
      where: { invoiceNumber: { startsWith: string } };
      select: { invoiceNumber: true };
    }): Promise<Array<{ invoiceNumber: string }>>;
  };
};

export function invoicePeriod(date: Date): string {
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}`;
}

export function formatInvoiceNumber(period: string, sequence: number): string {
  return `INV-${period}-${String(sequence).padStart(3, '0')}`;
}

export async function getNextInvoiceNumber(store: InvoiceNumberStore, period: string): Promise<string> {
  const prefix = `INV-${period}-`;
  const existingInvoices = await store.invoice.findMany({
    where: { invoiceNumber: { startsWith: prefix } },
    select: { invoiceNumber: true },
  });
  const highestSequence = existingInvoices.reduce((highest, invoice) => {
    const match = invoice.invoiceNumber.match(INVOICE_NUMBER_PATTERN);
    const sequence = match?.[1] === period.slice(0, 4) && match[2] === period.slice(5) ? Number(match[3]) : 0;
    return Math.max(highest, sequence);
  }, 0);

  return formatInvoiceNumber(period, highestSequence + 1);
}

export function isStandardInvoiceNumber(invoiceNumber: string): boolean {
  return INVOICE_NUMBER_PATTERN.test(invoiceNumber);
}
