export interface Upgrade {
    targetUID:string,
    name: string,
    initialPlan: string,
    suggestedPlan: string,
    comment: string,
    confidenceScore: number,
}


