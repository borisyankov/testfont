/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.sectionContainer}>
        <Text style={styles.default}>1234567890 (default)</Text>
        <Text style={styles.first}>1234567890 (first)</Text>
        <Text style={styles.second}>1234567890 (second)</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    gap: 24,
    flex: 1,
  },
  first: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Mulish Black',
  },
  second: {
    fontSize: 24,
    fontWeight: '400',
    fontFamily: 'mulishblack',
  },
  default: {
    fontSize: 24,
  },
});

export default App;
