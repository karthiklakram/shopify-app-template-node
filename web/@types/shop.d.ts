export * from "../backend/prisma/types";

export interface ShopData {
  id: string;
  name: string;
  ianaTimezone: string;
  email: string;
  url: string;
  currencyCode: string;
  primaryDomain: {
    url: string;
    sslEnabled: boolean;
  };
  plan: {
    displayName: string;
    partnerDevelopment: boolean;
    shopifyPlus: boolean;
  };
  billingAddress: {
    name: string;
    company: string;
    city: string;
    country: string;
    phone: string;
  };
}

export interface ShopDataResponse {
  data: {
    shop: ShopData;
  };
  extensions: {
    cost: {
      requestedQueryCost: number;
      actualQueryCost: number;
      throttleStatus: {
        maximumAvailable: number;
        currentlyAvailable: number;
        restoreRate: number;
      };
    };
  };
}
