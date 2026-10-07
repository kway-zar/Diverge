export type UserRole = "customer" | "technician" | "admin";
export type CustomerType = "Residential" | "Business" | "Government" | "Commercial";
export type PlanStatus = "Active" | "Inactive" | "Pending" | "Suspended";
export type CustomerStatus = PlanStatus;

export type EngineerStatus =
  | "On-Site"
  | "Traveling"
  | "Available"
  | "Off-Duty"
  | "Unavailable";

export type TicketPriority = "High" | "Medium" | "Low";
export type TicketStatus = "In Progress" | "Open" | "Pending" | "Resolved";

export type JobPriority = "High" | "Critical";
export type JobStatus = "Assigned" | "En Route" | "On-Site";

export type PaymentMethod = "Gcash" | "GCash" | "Bank Transfer" | "Maya" | "Visa / Mastercard" | "-";
export type InvoiceStatus = "Paid" | "Pending" | "Overdue";
export type PaymentStatus = "Paid" | "Pending" | "Overdue";

export type UpgradeRequestStatus = "Approved" | "Pending" | "On Hold";
export type AnomalyStatus = "CRITICAL" | "MODERATE" | "LOW";

export interface TimestampedEntity {
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}
