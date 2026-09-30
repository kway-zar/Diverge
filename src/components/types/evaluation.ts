export interface RatingBreakdown {
    stars: number,
    count: number,
}

export interface Metric {
    label: string,
    value: string,
    benchmark: string,
    percent: number,
}

export interface Feedback {
    name: string,
    date: string,
    stars: number,
    quote: string
}