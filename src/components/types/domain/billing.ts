import type {
  InvoiceStatus,
  PaymentMethod,
  PaymentStatus,
  TimestampedEntity,
  UpgradeRequestStatus,
} from "./shared";

export interface Invoice extends TimestampedEntity {
  invoiceID: string;
  id?: string;
  customerId?: string;
  account: string;
  email: string;
  contact: string;
  plan: string;
  planId?: string;
  amount: string;
  dueDate: string;
  paymentMethod: PaymentMethod;
  status: InvoiceStatus;
}

export interface CustomerPayment extends TimestampedEntity {
  id?: string;
  invoice: string;
  invoiceId?: string;
  period: string;
  amount: string;
  due: string;
  method: PaymentMethod;
  status: PaymentStatus;
}

export interface UpgradeReq extends TimestampedEntity {
  reqID: string;
  id?: string;
  customerId?: string;
  name: string;
  initialPlan: string;
  finalPlan: string;
  dateReq: string;
  status: UpgradeRequestStatus;
}

export interface Upgrade extends TimestampedEntity {
  targetUID: string;
  name: string;
  initialPlan: string;
  suggestedPlan: string;
  comment: string;
  confidenceScore: number;
}
