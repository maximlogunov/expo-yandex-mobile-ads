import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoYandexMobileAdsViewProps } from './ExpoYandexMobileAds.types';

const NativeView: React.ComponentType<ExpoYandexMobileAdsViewProps> =
  requireNativeViewManager('ExpoYandexMobileAds');

export default function ExpoYandexMobileAdsView(props: ExpoYandexMobileAdsViewProps) {
  return <NativeView {...props} />;
}
