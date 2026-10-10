import type { Invoice } from "../types/invoice";
import type { CustomerPayment } from "../types/payment";

export const BILLING_STORAGE_KEY = "diverge-billing-invoices";
export const CUSTOMER_BILLING_STORAGE_KEY = "diverge-customer-billing-invoices";

export function formatCurrencyAmount(value: number): string {
  return `₱${value.toLocaleString("en-PH")}`;
}

export function buildInvoiceEntry({
  invoiceID,
  account,
  email,
  contact,
  plan,
  amount,
  dueDate,
  paymentMethod = "-",
  status = "Pending",
}: {
  invoiceID: string;
  account: string;
  email: string;
  contact: string;
  plan: string;
  amount: number | string;
  dueDate: string | Date;
  paymentMethod?: Invoice["paymentMethod"];
  status?: Invoice["status"];
}): Invoice {
  return {
    invoiceID,
    account,
    email,
    contact,
    plan,
    amount: typeof amount === "number" ? formatCurrencyAmount(amount) : amount,
    dueDate: new Date(dueDate).toISOString().slice(0, 10),
    paymentMethod,
    status,
  };
}

export const initialBillingInvoices: Invoice[] = [
  buildInvoiceEntry({
    invoiceID: "INV-2026-09-001",
    account: "Jonathan Landoy",
    email: "jonathan@example.com",
    contact: "+63 912 345 6789",
    plan: "Fiber 200",
    amount: 999,
    dueDate: "2026-09-24",
    paymentMethod: "-",
    status: "Pending",
  }),
  buildInvoiceEntry({
    invoiceID: "INV-2026-08-001",
    account: "Jonathan Landoy",
    email: "jonathan@example.com",
    contact: "+63 912 345 6789",
    plan: "Fiber 200",
    amount: 999,
    dueDate: "2026-08-24",
    paymentMethod: "Maya",
    status: "Paid",
  }),
  buildInvoiceEntry({
    invoiceID: "INV-2026-07-001",
    account: "Jonathan Landoy",
    email: "jonathan@example.com",
    contact: "+63 912 345 6789",
    plan: "Fiber 200",
    amount: 999,
    dueDate: "2026-07-24",
    paymentMethod: "GCash",
    status: "Paid",
  }),
  buildInvoiceEntry({
    invoiceID: "INV-2026-09-002",
    account: "Guiller Dela Cruz",
    email: "guiller@example.com",
    contact: "+63 923 456 7891",
    plan: "Business Pro",
    amount: 2499,
    dueDate: "2026-09-30",
    paymentMethod: "GCash",
    status: "Paid",
  }),
  buildInvoiceEntry({
    invoiceID: "INV-2026-08-002",
    account: "Guiller Dela Cruz",
    email: "guiller@example.com",
    contact: "+63 923 456 7891",
    plan: "Business Pro",
    amount: 2499,
    dueDate: "2026-08-30",
    paymentMethod: "Bank Transfer",
    status: "Paid",
  }),
  buildInvoiceEntry({
    invoiceID: "INV-2026-07-002",
    account: "Guiller Dela Cruz",
    email: "guiller@example.com",
    contact: "+63 923 456 7891",
    plan: "Business Pro",
    amount: 2499,
    dueDate: "2026-07-30",
    paymentMethod: "Maya",
    status: "Overdue",
  }),
  buildInvoiceEntry({
    invoiceID: "INV-2026-08-003",
    account: "Vanna Banana",
    email: "vanna.banana@example.com",
    contact: "+63 934 567 8902",
    plan: "Government Plus",
    amount: 4999,
    dueDate: "2026-08-30",
    paymentMethod: "Bank Transfer",
    status: "Paid",
  }),
  buildInvoiceEntry({
    invoiceID: "INV-2026-07-003",
    account: "Vanna Banana",
    email: "vanna.banana@example.com",
    contact: "+63 934 567 8902",
    plan: "Government Plus",
    amount: 4999,
    dueDate: "2026-07-30",
    paymentMethod: "GCash",
    status: "Paid",
  }),
  buildInvoiceEntry({
    invoiceID: "INV-2026-06-003",
    account: "Vanna Banana",
    email: "vanna.banana@example.com",
    contact: "+63 934 567 8902",
    plan: "Government Plus",
    amount: 4999,
    dueDate: "2026-06-30",
    paymentMethod: "Bank Transfer",
    status: "Overdue",
  }),
];

function isPastDueDate(dueDate: string | Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const due = new Date(dueDate);
  due.setHours(0, 0, 0, 0);

  return Number.isFinite(due.getTime()) && due < today;
}

export function resolveInvoiceStatus(status: Invoice["status"], dueDate: string | Date): Invoice["status"] {
  if (status === "Paid") {
    return "Paid";
  }

  return isPastDueDate(dueDate) ? "Overdue" : "Pending";
}

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
      plan: invoice.plan,
      amount: invoice.amount,
      due: invoice.dueDate,
      method: invoice.paymentMethod,
      status: invoice.status === "Paid" ? "Paid" : invoice.status === "Overdue" ? "Overdue" : "Pending",
    };
  });
}
