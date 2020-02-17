import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { NavigationTheme } from "./src/theme";

import AuthStack from "./src/navigation/AuthStack";

enableScreens(); // Performance optimization

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={NavigationTheme}>
        <StatusBar barStyle="dark-content" />
        <AuthStack/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
