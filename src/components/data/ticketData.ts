import type { Job, CompletedJob} from "../types/job";

export const initialJobs: Job[] = [
     {
    ticketID: "TK - 231231",
    subscriber: "Vanna Hernandez",
    address: "Blk 0 Lot 00 St, Brngy, Rizal",
    phone: "+63 912 345 6789",
    priority: "High",
    status: "Assigned",
    timeLeft: "4h remaining",
    issue: "No internet connection - modem not syncing",
    accessNote: "Access via subdivision gate, call customer upon arrival",
  },
  {
    ticketID: "TK - 231232",
    subscriber: "Jojo Landoy",
    address: "Blk 0 Lot 00 St, Brngy, Rizal",
    phone: "+63 912 345 6789",
    priority: "High",
    status: "En Route",
    timeLeft: "7h remaining",
    issue: "New installation - no signal",
    accessNote: "New subscriber. Bring full install kit.",
  },
  {
    ticketID: "TK - 231233",
    subscriber: "Jojo Corp.",
    address: "Blk 0 Lot 00 St, Brngy, Rizal",
    phone: "+63 912 345 6789",
    priority: "Critical",
    status: "On-Site",
    timeLeft: "BREACHED",
    issue: "Static IP not resolving after firmware update",
    accessNote: "Corporate client. Ask for IT admin at reception.",
  },
]

export const initialCompleted: CompletedJob[] = [
     { ticketID: "TK - 231228", subscriber: "Jojo Corp.", issue: "Static IP not resolving after firmware update", outcome: "Cannot Complete" },
     { ticketID: "TK - 231227", subscriber: "Jojo Corp.", issue: "Static IP not resolving after firmware update", outcome: "Completed" },
]

