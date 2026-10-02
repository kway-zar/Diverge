import type { PaymentMethod } from "./invoice";
export type PaymentStatus = "Paid" | "Pending";

export interface CustomerPayment {
  invoice: string;
  period: string;
  amount: string;
  due: string;
  method: PaymentMethod;
  status: PaymentStatus;
}