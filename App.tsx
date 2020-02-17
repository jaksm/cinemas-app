import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';

enableScreens(); // Performance optimization

import AuthStack from "./src/navigation/AuthStack";
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <AuthStack/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
