export type Payment = {
  invoice: string
  period: string
  amount: string
  due: string
  method: string
  status: "Paid" | "Pending"
}