export type CustomerType = "Residential" | "Business" | "Government" | "Commercial";
export type accountReports = string;
export interface ChurnInfo {
  accountName: string,
  accountID: string,
  email:string,
  type: CustomerType,
  plan: string,
  reports: accountReports[],
  recommendation: string,
  churnPercentage: number,
  
}

