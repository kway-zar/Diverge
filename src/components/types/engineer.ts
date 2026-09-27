export type EngineerStatus =
    | "On-Site"
    | "Traveling"
    | "Available"
    | "Off-Duty"
    | "Unavailable";

export interface FieldReport {
    ticketId: string;
    date: string;
    status: "Fully Resolved" | "In Progress";
    description: string;
    timeOnSite: string;
    parts: string;
}

export interface EngineerReview {
    reviewer: string;
    rating: number;
    date: string;
    comment: string;
}

export interface EngineerMetric {
    id: string;
    label: string;
    benchmark: number;
    score: number;
}

export interface EngineerOverview {
    jobsCompleted: number;
    thisMonth: number;
    avgResolution: number;
}

export interface Engineer {
    id: string;
    name: string;
    location: string;
    rating: number;
    status: EngineerStatus;


    currentJob: string;
    completed: number;
    queue: number;


    overview: EngineerOverview;
    metrics: EngineerMetric[];

    fieldReports: FieldReport[];
    reviews: EngineerReview[];
}