import ExpoModulesCore

internal struct ExpoYandexMobileAdsConfig: Record {
  @Field
  var userConsent: Bool = false
    
  @Field
  var locationConsent: Bool = false
    
  @Field
  var enableLogging: Bool = false
    
  @Field
  var enableDebugErrorIndicator: Bool = false
}
