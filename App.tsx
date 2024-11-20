/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  configureFonts,
  MD3LightTheme,
  PaperProvider,
  Text as PaperText,
} from 'react-native-paper';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const fontConfig = {
  fontFamily: Platform.select({
    web: 'Mulish Black, sans-serif',
    ios: 'Mulish Black',
    android: 'mulishblack',
    default: 'sans-serif',
  }),
};

const theme = {
  ...MD3LightTheme,
  fonts: configureFonts({config: fontConfig}),
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.screen}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View style={styles.sectionContainer}>
          <Text style={styles.default}>1234567890 (default)</Text>
          <Text style={styles.first}>1234567890 (first)</Text>
          <Text style={styles.second}>1234567890 (second)</Text>
          <PaperText style={styles.default}>1234567890 (paper)</PaperText>
        </View>
      </SafeAreaView>
    </PaperProvider>
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
