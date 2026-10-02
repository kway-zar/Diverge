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

export type PaymentMethod = "Gcash" | "GCash" | "Bank Transfer" | "Maya" | "-";
export type InvoiceStatus = "Paid" | "Pending" | "Overdue";
export type PaymentStatus = "Paid" | "Pending";

export type UpgradeRequestStatus = "Approved" | "Pending" | "On Hold";
export type AnomalyStatus = "CRITICAL" | "MODERATE" | "LOW";

export interface TimestampedEntity {
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}

export interface User extends TimestampedEntity {
  id: string;
  email: string;
  role: UserRole;
  name: string;
  phone?: string;
}

export interface Customer extends TimestampedEntity {
  accountID: string;
  id?: string;
  userId?: string;
  name: string;
  email: string;
  type: CustomerType;
  plan: string;
  planId?: string;
  usage: string;
  balance: string;
  status: CustomerStatus;
  area: string;
  since: string;
}

export interface Plan extends TimestampedEntity {
  id: string;
  name: string;
  type: CustomerType;
  speed: string;
  cost: number;
  status: PlanStatus;
}

export interface FieldReport extends TimestampedEntity {
  id?: string;
  ticketId: string;
  engineerId: string;
  date: string;
  status: "Fully Resolved" | "In Progress";
  description: string;
  timeOnSite: string;
  parts: string;
}

export interface EngineerReview extends TimestampedEntity {
  id?: string;
  reviewer: string;
  rating: number;
  date: string;
  comment: string;
}

export interface EngineerMetric extends TimestampedEntity {
  id: string;
  label: string;
  benchmark: number;
  score: number;
}

export interface EngineerOverview {
  jobsCompleted: number;
  thisMonth: number;
  avgResolution: number;
  joined: string;
}

export interface Engineer extends TimestampedEntity {
  id: string;
  userId?: string;
  name: string;
  location: string;
  rating: number;
  phoneNo: string;
  status: EngineerStatus;
  currentJob: string;
  completed: number;
  queue: number;
  overview: EngineerOverview;
  metrics: EngineerMetric[];
  fieldReports: FieldReport[];
  reviews: EngineerReview[];
}

export interface MyAccount extends TimestampedEntity {
  accountID: string;
  name: string;
  location: string;
  balance: number;
  currentPlan: string;
  downloadSpeed: number;
  uploadSpeed: number;
  nextBilling: string;
  planType: CustomerType;
  planCost: number;
  planStatus: PlanStatus;
}

export interface Ticket extends TimestampedEntity {
  ticketID: string;
  id?: string;
  customerId?: string;
  subscriber: string;
  issue: string;
  category: string;
  priority: TicketPriority;
  assignedTo: string;
  assignedTechnicianId?: string;
  status: TicketStatus;
  SLA: string;
  created: string;
  updated: string;
}

export interface Job extends TimestampedEntity {
  ticketID: string;
  id?: string;
  customerId?: string;
  technicianId?: string;
  subscriber: string;
  address: string;
  phone: string;
  priority: JobPriority;
  status: JobStatus;
  timeLeft: string;
  issue: string;
  accessNote: string;
}

export interface CompletedJob extends TimestampedEntity {
  ticketID: string;
  subscriber: string;
  issue: string;
  outcome: "Completed" | "Cannot Complete";
}

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

export interface Anomaly extends TimestampedEntity {
  locationCode: string;
  status: AnomalyStatus;
  problem: string;
  totalAffected: number;
  recommendation: string;
  percentage: number;
}

export interface ChurnInfo extends TimestampedEntity {
  accountName: string;
  accountID: string;
  email: string;
  type: CustomerType;
  plan: string;
  reports: string[];
  recommendation: string;
  churnPercentage: number;
}

export interface MLAnalytics extends TimestampedEntity {
  churnRiskFlags: number;
  networkAnomalies: number;
  upgradeOpportunities: number;
  forecast: number;
}

export interface RatingBreakdown {
  stars: number;
  count: number;
}

export interface Metric {
  label: string;
  value: string;
  benchmark: string;
  percent: number;
}

export interface Feedback {
  name: string;
  date: string;
  stars: number;
  quote: string;
}
