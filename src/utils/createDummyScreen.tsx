import Screen from '../components/Screen';
import {Text} from 'react-native';
import theme from '../theme';
import * as React from 'react';

export const createDummyScreen = (screenName: string) => () => (
  // eslint-disable-next-line react-native/no-inline-styles
  <Screen style={{justifyContent: 'center', alignItems: 'center'}}>
    <Text style={theme.typography.h1}>{screenName}</Text>
  </Screen>
);
