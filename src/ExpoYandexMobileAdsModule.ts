import { requireNativeModule } from 'expo-modules-core';

import {
  ExpoYandexMobileAdsConfig,
  // ImpressionData,
} from './ExpoYandexMobileAds.types';

export interface ModuleDefinition {
  SDKVersion: string;
  initialize(config: ExpoYandexMobileAdsConfig): Promise<string>;
  showInterstitialAd(adUnitID: string): Promise<string>;
}

// It loads the native module object from the JSI or falls back to
// the bridge module (from NativeModulesProxy) if the remote debugger is on.
export default requireNativeModule<ModuleDefinition>('ExpoYandexMobileAds');
