export type CustomerType = "Residential" | "Business" | "Government";
export type CustomerStatus = "Active" | "Inactive" | "Pending" | "Suspended";

export interface Customer {
    accountID: string;
    name: string;
    email: string;
    type: CustomerType;
    plan: string;
    balance: string;
    status: CustomerStatus;
    area: string;
    since: string;
}