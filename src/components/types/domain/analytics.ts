import type {
  AnomalyStatus,
  CustomerType,
  TimestampedEntity,
} from "./shared";

export interface Anomaly extends TimestampedEntity {
  locationCode: string;
  status: AnomalyStatus;
  problem: string;
  totalAffected: number;
  recommendation: string;
  percentage: number;
}

export interface ChurnInfo extends TimestampedEntity {
  accountName: string;
  accountID: string;
  email: string;
  type: CustomerType;
  plan: string;
  reports: string[];
  recommendation: string;
  churnPercentage: number;
}

export interface MLAnalytics extends TimestampedEntity {
  churnRiskFlags: number;
  networkAnomalies: number;
  upgradeOpportunities: number;
  forecast: number;
}

export interface RatingBreakdown {
  stars: number;
  count: number;
}

export interface Metric {
  label: string;
  value: string;
  benchmark: string;
  percent: number;
}

export interface Feedback {
  name: string;
  date: string;
  stars: number;
  quote: string;
}
