import type {
  EngineerStatus,
  TimestampedEntity,
} from "./shared";

export interface FieldReport extends TimestampedEntity {
  id?: string;
  ticketId: string;
  engineerId: string;
  date: string;
  status: "Fully Resolved" | "In Progress";
  description: string;
  timeOnSite: string;
  parts: string;
}

export interface EngineerReview extends TimestampedEntity {
  id?: string;
  reviewer: string;
  rating: number;
  date: string;
  comment: string;
}

export interface EngineerMetric extends TimestampedEntity {
  id: string;
  label: string;
  benchmark: number;
  score: number;
}

export interface EngineerOverview {
  jobsCompleted: number;
  thisMonth: number;
  avgResolution: number;
  joined: string;
}

export interface Engineer extends TimestampedEntity {
  id: string;
  userId?: string;
  name: string;
  location: string;
  rating: number;
  phoneNo: string;
  status: EngineerStatus;
  currentJob: string;
  completed: number;
  queue: number;
  overview: EngineerOverview;
  metrics: EngineerMetric[];
  fieldReports: FieldReport[];
  reviews: EngineerReview[];
}
