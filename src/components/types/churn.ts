import type { CustomerType } from "./common";

export type { CustomerType } from "./common";
export type AccountReport = string;
export type accountReports = AccountReport;
export interface ChurnInfo {
  accountName: string,
  accountID: string,
  email:string,
  type: CustomerType,
  plan: string,
  reports: AccountReport[],
  recommendation: string,
  churnPercentage: number,
  
}

