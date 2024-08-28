import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoYandexMobileAds.web.ts
// and on native platforms to ExpoYandexMobileAds.ts
import ExpoYandexMobileAdsModule from './ExpoYandexMobileAdsModule';
import ExpoYandexMobileAdsView from './ExpoYandexMobileAdsView';
import { ChangeEventPayload, ExpoYandexMobileAdsViewProps } from './ExpoYandexMobileAds.types';

// Get the native constant value.
export const PI = ExpoYandexMobileAdsModule.PI;

export function hello(): string {
  return ExpoYandexMobileAdsModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoYandexMobileAdsModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoYandexMobileAdsModule ?? NativeModulesProxy.ExpoYandexMobileAds);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoYandexMobileAdsView, ExpoYandexMobileAdsViewProps, ChangeEventPayload };
