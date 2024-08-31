export interface ExpoYandexMobileAdsConfig {
  userConsent?: boolean;
  locationConsent?: boolean;
  enableLogging?: boolean;
  enableDebugErrorIndicator?: boolean;
}

export interface ImpressionData {
  currency: string;
  revenueUSD: string;
  precision: string;
  revenue: string;
  requestId: string;
  blockId: string;
  adType: string;
  ad_unit_id: string;
  network: {
    name: string;
    adapter: string;
    ad_unit_id: string;
  };
}
