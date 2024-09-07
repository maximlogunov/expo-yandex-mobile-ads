import ExpoModulesCore
import YandexMobileAds

public class ExpoYandexMobileAdsModule: Module {
  internal var isInitialized = false
  internal lazy var interstitialManager = InterstitialManager()
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('ExpoYandexMobileAds')` in JavaScript.
    Name("ExpoYandexMobileAds")

    Property("SDKVersion") {
      return MobileAds.sdkVersion() 
    }

    AsyncFunction("initialize") { (config: ExpoYandexMobileAdsConfig, promise: Promise) in
      if (config.enableLogging) {
        MobileAds.enableLogging();
      }
      
      if (config.enableDebugErrorIndicator) {
        MobileAds.enableVisibilityErrorIndicator(for: .simulator)
      }
      
      MobileAds.setUserConsent(config.userConsent)
      MobileAds.setLocationTrackingEnabled(config.locationConsent)

      if (isInitialized) {
        promise.resolve()
      } else {
        MobileAds.initializeSDK(completionHandler: { [weak self] in
          self?.isInitialized = true

          promise.resolve()
        })
      }
    }

    AsyncFunction("showInterstitialAd") { (adUnitId: String, promise: Promise) in
      if (isInitialized) {
        interstitialManager.loadAd(adUnitId, withPromise: promise)
      } else {
        promise.reject(InitializationRequiredException())
      }
    }
  }
}
