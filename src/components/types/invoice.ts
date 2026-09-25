export type PaymentMethod = "Gcash" | "Bank Transfer" | "Maya";
export type InvoiceStatus = "Paid" | "Pending" | "Overdue";

export interface Invoice {
    invoiceID: string;
    account: string;
    plan: string;
    amount: string;
    dueDate: string;
    paymentMethod: PaymentMethod;
    status: InvoiceStatus;
}