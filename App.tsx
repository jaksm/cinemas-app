import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import {NavigationTheme} from './src/theme';
import {usePersistentNavigation} from './src/hooks/usePersistentNavigation';
import AppStack from './src/navigation/AppStack';

enableScreens(); // Performance optimization

const App = () => {
  const {
    initialState,
    isReady,
    persistNavigationState,
  } = usePersistentNavigation();

  if (!isReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={NavigationTheme}
        initialState={initialState}
        onStateChange={persistNavigationState}>
        <StatusBar barStyle="light-content" />
        <AppStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
