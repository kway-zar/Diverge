import type { Invoice } from "../types/invoice";
import type { CustomerPayment } from "../types/payment";

export const BILLING_STORAGE_KEY = "diverge-billing-invoices";
export const CUSTOMER_BILLING_STORAGE_KEY = "diverge-customer-billing-invoices";

export const initialBillingInvoices: Invoice[] = [
  {
    invoiceID: "INV-2026-09-001",
    account: "Jonathan Landoy",
    email: "jonathan@example.com",
    contact: "+63 912 345 6789",
    plan: "Fiber 200",
    amount: "₱999",
    dueDate: "Sep 24, 2026",
    paymentMethod: "-",
    status: "Pending",
  },
  {
    invoiceID: "INV-2026-09-002",
    account: "Guiller Dela Cruz",
    email: "guiller@example.com",
    contact: "+63 923 456 7891",
    plan: "Business Pro",
    amount: "₱2,499",
    dueDate: "Sep 30, 2026",
    paymentMethod: "Gcash",
    status: "Paid",
  },
  {
    invoiceID: "INV-2026-08-001",
    account: "Vanna Banana",
    email: "vanna.banana@example.com",
    contact: "+63 934 567 8902",
    plan: "Government Plus",
    amount: "₱4,999",
    dueDate: "Aug 30, 2026",
    paymentMethod: "Bank Transfer",
    status: "Paid",
  },
  {
    invoiceID: "INV-2026-07-001",
    account: "Diverge Admin",
    email: "admin@diverge.com",
    contact: "+63 945 678 9013",
    plan: "Fiber 200",
    amount: "₱999",
    dueDate: "Jul 29, 2026",
    paymentMethod: "Maya",
    status: "Overdue",
  },
];

export function getStoredBillingInvoices(): Invoice[] {
  if (typeof window === "undefined") {
    return initialBillingInvoices;
  }

  const stored = window.localStorage.getItem(BILLING_STORAGE_KEY);

  if (!stored) {
    window.localStorage.setItem(BILLING_STORAGE_KEY, JSON.stringify(initialBillingInvoices));
    return initialBillingInvoices;
  }

  try {
    const parsed = JSON.parse(stored) as Invoice[];

    if (!Array.isArray(parsed) || parsed.length === 0) {
      window.localStorage.setItem(BILLING_STORAGE_KEY, JSON.stringify(initialBillingInvoices));
      return initialBillingInvoices;
    }

    return parsed;
  } catch {
    window.localStorage.setItem(BILLING_STORAGE_KEY, JSON.stringify(initialBillingInvoices));
    return initialBillingInvoices;
  }
}

export function persistBillingInvoices(invoices: Invoice[]) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(BILLING_STORAGE_KEY, JSON.stringify(invoices));
  }
}

export function getStoredCustomerBillingInvoices(customerEmail?: string): Invoice[] {
  if (typeof window === "undefined") {
    return [];
  }

  const normalizedEmail = customerEmail?.trim().toLowerCase();
  const stored = window.localStorage.getItem(CUSTOMER_BILLING_STORAGE_KEY);

  if (!stored) {
    const fallback = getStoredBillingInvoices();
    const filtered = normalizedEmail
      ? fallback.filter((invoice) => invoice.email.toLowerCase() === normalizedEmail)
      : fallback;

    window.localStorage.setItem(CUSTOMER_BILLING_STORAGE_KEY, JSON.stringify(filtered));
    return filtered;
  }

  try {
    const parsed = JSON.parse(stored) as Invoice[];

    if (!Array.isArray(parsed) || parsed.length === 0) {
      const fallback = getStoredBillingInvoices();
      const filtered = normalizedEmail
        ? fallback.filter((invoice) => invoice.email.toLowerCase() === normalizedEmail)
        : fallback;

      window.localStorage.setItem(CUSTOMER_BILLING_STORAGE_KEY, JSON.stringify(filtered));
      return filtered;
    }

    if (!normalizedEmail) {
      return parsed;
    }

    return parsed.filter((invoice) => invoice.email.toLowerCase() === normalizedEmail);
  } catch {
    const fallback = getStoredBillingInvoices();
    const filtered = normalizedEmail
      ? fallback.filter((invoice) => invoice.email.toLowerCase() === normalizedEmail)
      : fallback;

    window.localStorage.setItem(CUSTOMER_BILLING_STORAGE_KEY, JSON.stringify(filtered));
    return filtered;
  }
}

export function persistCustomerBillingInvoices(invoices: Invoice[]) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(CUSTOMER_BILLING_STORAGE_KEY, JSON.stringify(invoices));
  }
}

export function parseCurrencyAmount(value: string) {
  return Number(value.replace(/[^\d]/g, ""));
}

export function buildPaymentHistory(invoices: Invoice[]): CustomerPayment[] {
  return invoices.map((invoice) => {
    const period = new Date(invoice.dueDate).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });

    return {
      invoice: invoice.invoiceID,
      period,
      amount: invoice.amount,
      due: invoice.dueDate,
      method: invoice.paymentMethod,
      status: invoice.status === "Paid" ? "Paid" : "Pending",
    };
  });
}
