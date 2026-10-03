import type {
  CustomerStatus,
  CustomerType,
  PlanStatus,
  TimestampedEntity,
  UserRole,
} from "./shared";

export interface User extends TimestampedEntity {
  id: string;
  email: string;
  role: UserRole;
  name: string;
  phone?: string;
}

export interface Customer extends TimestampedEntity {
  accountID: string;
  id?: string;
  userId?: string;
  name: string;
  email: string;
  type: CustomerType;
  plan: string;
  planId?: string;
  usage: string;
  balance: string;
  status: CustomerStatus;
  area: string;
  since: string;
}

export interface Plan extends TimestampedEntity {
  id: string;
  name: string;
  type: CustomerType;
  speed: string;
  cost: number;
  status: PlanStatus;
}

export interface MyAccount extends TimestampedEntity {
  accountID: string;
  name: string;
  location: string;
  balance: number;
  currentPlan: string;
  downloadSpeed: number;
  uploadSpeed: number;
  nextBilling: string;
  planType: CustomerType;
  planCost: number;
  planStatus: PlanStatus;
}
