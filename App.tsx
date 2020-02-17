import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Hello Cinemas!</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
