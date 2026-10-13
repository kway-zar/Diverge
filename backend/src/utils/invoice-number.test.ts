import { describe, expect, it } from 'vitest';

import {
  formatInvoiceNumber,
  getNextInvoiceNumber,
  invoicePeriod,
  isStandardInvoiceNumber,
} from './invoice-number.js';

describe('invoice number utilities', () => {
  it('creates the correct invoice period string from a date', () => {
    expect(invoicePeriod(new Date('2025-05-20T00:00:00Z'))).toBe('2025-05');
  });

  it('formats invoice numbers with zero padding', () => {
    expect(formatInvoiceNumber('2025-05', 7)).toBe('INV-2025-05-007');
  });

  it('accepts valid invoice numbers and rejects malformed values', () => {
    expect(isStandardInvoiceNumber('INV-2025-05-007')).toBe(true);
    expect(isStandardInvoiceNumber('INV-2025-5-7')).toBe(false);
    expect(isStandardInvoiceNumber('ABC-123')).toBe(false);
  });

  it('finds the next unique invoice number in a period', async () => {
    const store = {
      invoice: {
        findMany: async () => [
          { invoiceNumber: 'INV-2025-05-001' },
          { invoiceNumber: 'INV-2025-05-003' },
          { invoiceNumber: 'INV-2025-06-001' },
        ],
      },
    };

    await expect(getNextInvoiceNumber(store, '2025-05')).resolves.toBe('INV-2025-05-004');
  });
});
