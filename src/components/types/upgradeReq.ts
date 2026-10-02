export type UpgradeRequestStatus = "Approved" | "Pending" | "On Hold";

export interface UpgradeReq {
    reqID: string;
    name: string;
    initialPlan: string;
    finalPlan: string;
    dateReq: string;
    status: UpgradeRequestStatus;
}

