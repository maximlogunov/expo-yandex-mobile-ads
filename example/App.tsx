import * as YandexMobileAds from 'expo-yandex-mobile-ads';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');

  const initializeSDK = async () => {
    try {
      await YandexMobileAds.initialize({
        userConsent: true,
      });

      setReady(true);
    } catch (e) {
      setError((e as Error).message);
    }
  };

  useEffect(() => {
    initializeSDK();
  }, []);

  const handlePress = () =>
    YandexMobileAds.showInterstitialAd('demo-interstitial-yandex');

  return (
    <View style={styles.container}>
      <Text>SDKVersion: {YandexMobileAds.SDKVersion}</Text>
      <Text>{error}</Text>
      {ready && (
        <TouchableOpacity onPress={handlePress}>
          <Text>Show Interstitial</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
