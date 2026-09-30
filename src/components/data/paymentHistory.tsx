import type { CustomerPayment } from "../types/payment"

export const paymentHistory: CustomerPayment[] = [
  {
    invoice: "INV-231231-01",
    period: "September 2026",
    amount: "₱1,499",
    due: "October 1, 2026",
    method: "Gcash",
    status: "Pending",
  },
  {
    invoice: "INV-231230-01",
    period: "August 2026",
    amount: "₱1,499",
    due: "September 1, 2026",
    method: "Bank Transfer",
    status: "Paid",
  },
  {
    invoice: "INV-231229-01",
    period: "July 2026",
    amount: "₱1,499",
    due: "August 1, 2026",
    method: "Maya",
    status: "Paid",
  },
  {
    invoice: "INV-231228-01",
    period: "June 2026",
    amount: "₱1,499",
    due: "July 1, 2026",
    method: "Bank Transfer",
    status: "Paid",
  },
  {
    invoice: "INV-231227-01",
    period: "May 2026",
    amount: "₱1,499",
    due: "June 1, 2026",
    method: "GCash",
    status: "Paid",
  },
  {
    invoice: "INV-231226-01",
    period: "April 2026",
    amount: "₱1,499",
    due: "May 1, 2026",
    method: "GCash",
    status: "Paid",
  },
]