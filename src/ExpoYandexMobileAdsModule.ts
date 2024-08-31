import { requireNativeModule } from 'expo-modules-core';

// import {
//   ExpoYandexMobileAdsConfig,
//   ImpressionData,
// } from './ExpoYandexMobileAds.types';

export interface ModuleDefinition {
  SDKVersion: string;
  // showInterstitial: (adUnitId: string) => Promise<ImpressionData>;
  // setLocationTrackingEnabled: (state: boolean) => void;
  // setUserConsent: (state: boolean) => void;
  // initialize(options: ExpoYandexMobileAdsConfig): Promise<string>;
}

// It loads the native module object from the JSI or falls back to
// the bridge module (from NativeModulesProxy) if the remote debugger is on.
export default requireNativeModule<ModuleDefinition>('ExpoYandexMobileAds');
