import * as React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Screen from '../components/Screen';
import theme from '../theme';

const createDummyScreen = (screenName: string) => () => (
  <Screen style={{justifyContent: 'center', alignItems: 'center'}}>
    <Text style={theme.typography.h1}>{screenName}</Text>
  </Screen>
);

const CartScreen = createDummyScreen('Cart');
const TicketsScreen = createDummyScreen('Tickets');
const FavouritesScreen = createDummyScreen('Favourites');
const ProfileScreen = createDummyScreen('Profile');

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName={'HomeScreen'}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Tickets" component={TicketsScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default HomeTabs;
