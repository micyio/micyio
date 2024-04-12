export type TPricingData = {
  id: number;
  name: string;
  priceSymbol: string;
  price: number;
  pricePrefix?: string;
  pricePostfix?: string;
  priceDescription: string;
  featureTitle: string;
  features: string[];
  buttonTitle: string;
  buttonUrl: string;
  isPopular: boolean;
  popularText?: string;
};
