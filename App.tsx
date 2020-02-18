import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { NavigationTheme } from "./src/theme";

import AuthStack from "./src/navigation/AuthStack";
import {usePersistentNavigation} from "./src/hooks/usePersistentNavigation";

enableScreens(); // Performance optimization

const App = () => {
  const {initialState, isReady, persistNavigationState} = usePersistentNavigation();

  if (!isReady) {
    return null
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={NavigationTheme}
        initialState={initialState}
        onStateChange={persistNavigationState}
      >
        <StatusBar barStyle="light-content" />
        <AuthStack/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
