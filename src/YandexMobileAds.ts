import { ExpoYandexMobileAdsConfig } from './ExpoYandexMobileAds.types';
import ExpoYandexMobileAdsModule from './ExpoYandexMobileAdsModule';

const SDKVersion = ExpoYandexMobileAdsModule.SDKVersion;

async function initialize(config: ExpoYandexMobileAdsConfig): Promise<void> {
  return await ExpoYandexMobileAdsModule.initialize(config);
}

async function showInterstitialAd(adUnitID: string): Promise<void> {
  return await ExpoYandexMobileAdsModule.showInterstitialAd(adUnitID);
}

export { SDKVersion, initialize, showInterstitialAd };
