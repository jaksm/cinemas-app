import React from 'react';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import {Image, StyleSheet, View, ViewStyle} from 'react-native';
import ShareIcon from '../assets/icons/share.svg';
// Screens
import HomeScreen from '../screens/Home/HomeScreen';
import MovieScreen from '../screens/Home/MovieScreen';
import QrScanScreen from "../screens/Home/QRScanScreen";

const HomeBanner = () => {
  return (
    <View style={styles.banner}>
      <Image source={require('../assets/images/Logo.png')} />
    </View>
  );
};

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
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
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          header: () => <HomeBanner />,
        }}
      />
      <Stack.Screen
        name="Movie"
        component={MovieScreen}
        options={{
          headerTitle: 'Reserve Tickets',
          headerTitleAlign: 'center',
          headerRight: () => <ShareIcon />,
          headerRightContainerStyle: {
            marginRight: 20,
          },
        }}
      />
      <Stack.Screen
        name="QRScan"
        component={QrScanScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  banner: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14 * 2,
  } as ViewStyle,
});

export default HomeStack;
