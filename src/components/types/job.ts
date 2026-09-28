export type JobPriority = "High" | "Critical"
export type JobStatus = "Assigned" | "En Route" | "On-Site"
 
export interface Job {
  ticketID: string
  customer: string
  address: string
  phone: string
  priority: JobPriority
  status: JobStatus
  timeLeft: string
  issue: string
  accessNote: string
}
 
export interface CompletedJob {
  ticketID: string
  customer: string
  issue: string
  outcome: "Completed" | "Cannot Complete"
}