import type {
  JobPriority,
  JobStatus,
  TicketPriority,
  TicketStatus,
  TimestampedEntity,
} from "./shared";

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
  hasEvaluation?: boolean;
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
