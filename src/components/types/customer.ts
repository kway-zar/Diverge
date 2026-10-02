import type { CustomerType, PlanStatus } from "./common";

export type { CustomerType } from "./common";
export type CustomerStatus = PlanStatus;

export interface Customer {
    accountID: string;
    name: string;
    email: string;
    type: CustomerType;
    plan: string;
    usage: string;
    balance: string;
    status: CustomerStatus;
    area: string;
    since: string;
}