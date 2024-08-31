import { ExpoYandexMobileAdsConfig } from './ExpoYandexMobileAds.types';
import ExpoYandexMobileAdsModule from './ExpoYandexMobileAdsModule';

const SDKVersion = ExpoYandexMobileAdsModule.SDKVersion;

async function initialize(config: ExpoYandexMobileAdsConfig): Promise<string> {
  return await ExpoYandexMobileAdsModule.initialize(config);
}

export { SDKVersion, initialize };
