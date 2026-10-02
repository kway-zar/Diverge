export type OfferType = "Residential" | "Business" | "Enterprise" |  "Government";
export type OfferStatus = "Active" | "Inactive";

export interface OfferTabProps {
  planName: string;
  planType: OfferType;
  status: OfferStatus;
  planDescription: string;
  planSpeed: string;
  planPrice: number;
  planSubscribers: number;
  planSLA: string;
  planContract: string;
  planFeatures: string[];
};

