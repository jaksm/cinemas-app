import React from 'react';
import {Text, View} from 'react-native';
import theme from '../../theme';
import Screen from '../../components/Screen';
import TextInput from '../../components/TextInput';

const SignUpScreen = () => {
  return (
    <Screen>
      <Text style={theme.typography.h1}>Sign Up</Text>

      <View>
        <TextInput />
      </View>
    </Screen>
  );
};

export default SignUpScreen;
