export type AnomalyStatus = "CRITICAL" | "MODERATE" | "LOW";

export interface Anomaly {
  locationCode: string;
  status: AnomalyStatus;
  problem: string;
  totalAffected: number;
  recommendation: string;
  percentage: number;
}

export type Anomalies = Anomaly;
