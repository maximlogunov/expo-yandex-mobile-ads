import * as YandexMobileAds from 'expo-yandex-mobile-ads';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [status, setStatus] = useState('Initializing...');

  const initializeSDK = async () => {
    const result = await YandexMobileAds.initialize({
      enableLogging: true,
    });

    setStatus(result);
  };

  useEffect(() => {
    initializeSDK();
  }, []);

  return (
    <View style={styles.container}>
      <Text>SDKVersion: {YandexMobileAds.SDKVersion}</Text>
      <Text>{status}</Text>
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
