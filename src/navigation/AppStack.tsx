import React from 'react';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName={'Auth'}
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
        name="Auth"
        component={AuthStack}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default AppStack;
