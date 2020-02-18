import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import theme from '../../theme';
import Screen from '../../components/Screen';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  function handleSignUp() {
    // navigation.navigate('Home');
  }

  return (
    <Screen>
      <Text style={theme.typography.h1}>Sign up</Text>

      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.inputs}>
          <TextInput
            placeholder={'John Doe'}
            autoCompleteType={'name'}
            autoCapitalize={'words'}
          />
          <TextInput
            placeholder={'john@doe.com'}
            keyboardType={'email-address'}
            autoCompleteType={'email'}
            autoCorrect={false}
            autoCapitalize={'none'}
          />
          <TextInput
            placeholder={'*******'}
            autoCorrect={false}
            autoCapitalize={'none'}
            secureTextEntry={true}
          />
        </View>

        <Button onPress={handleSignUp}>Sign Up</Button>
      </KeyboardAvoidingView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    maxHeight: '80%',
  } as ViewStyle,
  inputs: {
    marginTop: 14 * 2,
  } as ViewStyle,
});

export default SignUpScreen;
