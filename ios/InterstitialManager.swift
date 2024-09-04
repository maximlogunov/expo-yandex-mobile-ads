import Foundation
import ExpoModulesCore
import YandexMobileAds
import React

final class InterstitialManager: NSObject {
  private var interstitialAd: InterstitialAd?
  private var promise: Promise?
  // private var didClick = false
  // private var didShow = false
  // private var trackImpression: ImpressionData?

  private lazy var interstitialAdLoader: InterstitialAdLoader = {
    let loader = InterstitialAdLoader()
    loader.delegate = self

    return loader
  }()

  func loadAd(_ adUnitID: String, withPromise promise: Promise) {
    self.promise = promise

    let configuration = AdRequestConfiguration(adUnitID: adUnitID)
    interstitialAdLoader.loadAd(with: configuration)
  }

  func showAd() {
    guard let rootControlller = RCTPresentedViewController() else {
        return
    }

    interstitialAd?.show(from: rootControlller)
  }
}

extension InterstitialManager: InterstitialAdLoaderDelegate {
  func interstitialAdLoader(_ adLoader: InterstitialAdLoader, didLoad interstitialAd: InterstitialAd) {
    // This method will call after successfully loading
    self.interstitialAd = interstitialAd
    self.interstitialAd!.delegate = self

    showAd()
  }

  func interstitialAdLoader(_ adLoader: InterstitialAdLoader, didFailToLoadWithError error: AdRequestError) {
    // This method will call after getting any error while loading the ad
    promise?.reject(error.error)
  }
}

extension InterstitialManager: InterstitialAdDelegate {
    func interstitialAd(_ interstitialAd: InterstitialAd, didFailToShowWithError error: Error) {
        promise?.reject(error)
    }
    
    /// Called after dismissing the interstitial ad.
    /// - Parameter interstitialAd: 
    func interstitialAdDidDismiss(_ interstitialAd: InterstitialAd) {
        promise?.resolve()
    }
    
    /// Called after dismissing the interstitial ad.
    /// - Parameter interstitialAd: 
    // func interstitialAdDidShow(_ interstitialAd: InterstitialAd) {
    //     didShow = true
    // }

    /// Notifies that the user has clicked on the ad.
    /// - Parameter interstitialAd: 
    // func interstitialAdDidClick(_ interstitialAd: InterstitialAd) {
    //     didClick = true
    // }
    
    // func interstitialAd(_ interstitialAd: InterstitialAd, didTrackImpressionWith impressionData: ImpressionData?) {
    //     trackImpression = impressionData
    // }
}
