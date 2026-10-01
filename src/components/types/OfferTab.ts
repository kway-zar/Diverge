export type OfferType = "Residential" | "Business" | "Enterprise" |  "Government";
export interface OfferTabProps {
  planName: string;
  planType: OfferType;
  planDescription: string;
  planSpeed: string;
  planPrice: number;
  planSubscribers: number;
  planSLA: string;
  planContract: string;
  planFeatures: string[];
};

