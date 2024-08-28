import * as React from 'react';

import { ExpoYandexMobileAdsViewProps } from './ExpoYandexMobileAds.types';

export default function ExpoYandexMobileAdsView(props: ExpoYandexMobileAdsViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
