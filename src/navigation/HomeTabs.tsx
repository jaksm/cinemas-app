import * as React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Screen from '../components/Screen';
import theme from '../theme';

// Inactive icons
import HomeIconInactive from '../assets/icons/home-inactive.svg';
import CartIconInactive from '../assets/icons/cart-inactive.svg';
import TicketsIconInactive from '../assets/icons/tickets-inactive.svg';
import FavouritesIconInactive from '../assets/icons/favourites-inactive.svg';
import ProfileIconInactive from '../assets/icons/profile-inactive.svg';

// Active icons
import HomeIconActive from '../assets/icons/home-active.svg';
import CartIconActive from '../assets/icons/cart-active.svg';
import TicketsIconActive from '../assets/icons/tickets-active.svg';
import FavouritesIconActive from '../assets/icons/favourites-active.svg';
import ProfileIconActive from '../assets/icons/profile-active.svg';

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
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <HomeIconActive /> : <HomeIconInactive />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <CartIconActive /> : <CartIconInactive />,
        }}
      />
      <Tab.Screen
        name="Tickets"
        component={TicketsScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <TicketsIconActive /> : <TicketsIconInactive />,
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <FavouritesIconActive /> : <FavouritesIconInactive />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ProfileIconActive /> : <ProfileIconInactive />,
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabs;
