package expo.modules.yandexmobileads

import android.content.Context
import expo.modules.kotlin.exception.Exceptions
import expo.modules.kotlin.Promise
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import com.yandex.mobile.ads.common.MobileAds

class ExpoYandexMobileAdsModule : Module() {
  private var isInitialized = false

  private val context: Context
    get() = appContext.reactContext ?: throw Exceptions.ReactContextLost()

  private val activity
    get() = appContext.currentActivity ?: throw Exceptions.MissingActivity()

  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoYandexMobileAds')` in JavaScript.
    Name("ExpoYandexMobileAds")

    Property("SDKVersion") {
      return@Property MobileAds.libraryVersion
    }

    AsyncFunction("initialize") { config: ExpoYandexMobileAdsConfig, promise: Promise ->
      MobileAds.setUserConsent(config.userConsent)
      MobileAds.setLocationConsent(config.locationConsent)
      MobileAds.enableLogging(config.enableLogging)
      MobileAds.enableDebugErrorIndicator(config.enableDebugErrorIndicator)

      MobileAds.initialize(context) {
        isInitialized = true

        promise.resolve()
      }
    }

    AsyncFunction("showInterstitialAd") { adUnitId: String, promise: Promise ->
      if (isInitialized) {
        InterstitialAdManager(activity, context, promise).loadAd(adUnitId)
      } else {
        promise.reject(InitializationRequiredException())
      }
    }
  }
}
