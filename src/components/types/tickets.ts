export type TicketPriority = "High" | "Medium" | "Low";
export type TicketStatus = "In Progress" | "Open" | "Pending" | "Resolved";

export interface Ticket {
    ticketID: string;
    subscriber: string;
    issue: string;
    category: string;
    priority: TicketPriority;
    assignedTo: string;
    status: TicketStatus;
    SLA: string;
    created: string;
    updated: string;
}

export type Tickets = Ticket;

