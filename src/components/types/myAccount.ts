
import type { CustomerType, PlanStatus } from "./common";


export interface MyAccount {
  accountID: string,
  name: string,
  location: string,
  balance: number,
  currentPlan: string,
  downloadSpeed:number,
  uploadSpeed:number,
  nextBilling: string,
  planType: CustomerType,
  planCost: number,
  planStatus: PlanStatus
}
