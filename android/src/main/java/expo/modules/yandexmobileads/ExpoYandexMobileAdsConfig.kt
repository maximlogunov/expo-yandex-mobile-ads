package expo.modules.yandexmobileads

import expo.modules.kotlin.records.Record

class ExpoYandexMobileAdsConfig: Record {
  val userConsent: Boolean = false
  val locationConsent: Boolean = false
  val enableLogging: Boolean = false
  val enableDebugErrorIndicator: Boolean = false
}