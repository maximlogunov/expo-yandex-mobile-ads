package expo.modules.yandexmobileads

import android.app.Activity
import android.content.Context
import com.yandex.mobile.ads.common.AdRequestConfiguration
import com.yandex.mobile.ads.common.AdError
import com.yandex.mobile.ads.common.ImpressionData
import com.yandex.mobile.ads.common.AdRequestError
import com.yandex.mobile.ads.interstitial.InterstitialAd
import com.yandex.mobile.ads.interstitial.InterstitialAdEventListener
import com.yandex.mobile.ads.interstitial.InterstitialAdLoadListener
import com.yandex.mobile.ads.interstitial.InterstitialAdLoader
import expo.modules.kotlin.Promise

class InterstitialAdManager(
  private var currentActivity: Activity,
  private var appContext: Context,
  private var  promise: Promise
) {
  private var interstitialAd: InterstitialAd? = null
  private var interstitialAdLoader: InterstitialAdLoader? = null

  init {
    // Interstitial ads loading should occur after initialization of the SDK.
    // Initialize the SDK as early as possible, for example in Application.onCreate or Activity.onCreate
    interstitialAdLoader = InterstitialAdLoader(appContext).apply {
      setAdLoadListener(object : InterstitialAdLoadListener {
        override fun onAdLoaded(ad: InterstitialAd) {
            interstitialAd = ad
            // The ad was loaded successfully. You can now show the ad.
            showAd(currentActivity)
        }

        override fun onAdFailedToLoad(adRequestError: AdRequestError) {
            // Ad failed to load with AdRequestError.
            // Attempting to load a new ad from the onAdFailedToLoad() method is strongly discouraged.
        }
      })
    }
    // loadInterstitialAd()
  }

  fun loadAd(adUnitId: String) {
    val adRequestConfiguration = AdRequestConfiguration.Builder(adUnitId).build()

    interstitialAdLoader?.loadAd(adRequestConfiguration)
  }

  private fun showAd(activity: Activity) {
    interstitialAd?.apply {
      setAdEventListener(object : InterstitialAdEventListener {
        override fun onAdShown() {
          // Called when ad is shown.
        }
        override fun onAdFailedToShow(adError: AdError) {
          // Called when an InterstitialAd failed to show.
          // Clean resources after Ad dismissed
          interstitialAd?.setAdEventListener(null)
          interstitialAd = null

          // Now you can preload the next interstitial ad.
          // loadInterstitialAd()
        }
        override fun onAdDismissed() {
          // Called when an ad is dismissed.
          // Clean resources after Ad dismissed
          interstitialAd?.setAdEventListener(null)
          interstitialAd = null

          promise.resolve()
          // Now you can preload the next interstitial ad.
          // loadInterstitialAd()
        }
        override fun onAdClicked() {
          // Called when a click is recorded for an ad.
        }
        override fun onAdImpression(impressionData: ImpressionData?) {
          // Called when an impression is recorded for an ad.
        }
      })

      show(activity)
    }
  }
}