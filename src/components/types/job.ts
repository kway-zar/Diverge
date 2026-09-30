export type JobPriority = "High" | "Critical"
export type JobStatus = "Assigned" | "En Route" | "On-Site"
 
export interface Job {
  ticketID: string
  subscriber: string
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
  subscriber: string
  issue: string
  outcome: "Completed" | "Cannot Complete"
}