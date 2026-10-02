export type PaymentMethod = "Gcash" | "GCash" | "Bank Transfer" | "Maya" | "-";
export type InvoiceStatus = "Paid" | "Pending" | "Overdue";

export interface Invoice {
    invoiceID: string;
    account: string;
    email: string;
    contact: string;
    plan: string;
    amount: string;
    dueDate: string;
    paymentMethod: PaymentMethod;
    status: InvoiceStatus;
}