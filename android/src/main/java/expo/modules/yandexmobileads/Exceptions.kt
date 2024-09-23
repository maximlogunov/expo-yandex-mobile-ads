package expo.modules.yandexmobileads

import expo.modules.kotlin.exception.CodedException

class InitializationRequiredException() :
  CodedException("Initialization required")

class AdFailedToLoadException(cause: String?) :
  CodedException("InterstitialAd failed to load: $cause")

class AdFailedToShowException(cause: String?) :
  CodedException("InterstitialAd failed to show: $cause")
