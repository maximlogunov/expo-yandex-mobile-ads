import { StyleSheet, Text, View } from 'react-native';

import * as ExpoYandexMobileAds from 'expo-yandex-mobile-ads';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoYandexMobileAds.hello()}</Text>
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
