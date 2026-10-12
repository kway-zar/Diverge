import type { CustomerPayment } from "../types/payment"

export const paymentHistory: CustomerPayment[] = [
  {
    invoice: "INV-2026-09-001",
    period: "September 2026",
    amount: "₱1,499",
    due: "October 1, 2026",
    method: "Gcash",
    status: "Pending",
  },
  {
    invoice: "INV-2026-08-001",
    period: "August 2026",
    amount: "₱1,499",
    due: "September 1, 2026",
    method: "Bank Transfer",
    status: "Paid",
  },
  {
    invoice: "INV-2026-07-001",
    period: "July 2026",
    amount: "₱1,499",
    due: "August 1, 2026",
    method: "Maya",
    status: "Paid",
  },
  {
    invoice: "INV-2026-06-001",
    period: "June 2026",
    amount: "₱1,499",
    due: "July 1, 2026",
    method: "Bank Transfer",
    status: "Paid",
  },
  {
    invoice: "INV-2026-05-001",
    period: "May 2026",
    amount: "₱1,499",
    due: "June 1, 2026",
    method: "GCash",
    status: "Paid",
  },
  {
    invoice: "INV-2026-04-001",
    period: "April 2026",
    amount: "₱1,499",
    due: "May 1, 2026",
    method: "GCash",
    status: "Paid",
  },
]