export type EngineerStatus = "On-Site" | "Traveling" | "Available";

export interface Engineer {
    id: string;
    name: string;
    location: string;
    rating: string;
    status: EngineerStatus;
}