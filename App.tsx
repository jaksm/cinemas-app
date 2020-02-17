import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Hello Cinemas!</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
