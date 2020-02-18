import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TransitionSpecs} from '@react-navigation/stack';

import WelcomeScreen from '../screens/Auth/WelcomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName={'Welcome'}
      screenOptions={{
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
        headerBackTitleVisible: false,
        headerTransparent: false,
        headerTitle: '',
      }}>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="SignIn" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;
