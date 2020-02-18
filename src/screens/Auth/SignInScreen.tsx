import React from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, View, ViewStyle} from 'react-native';
import Screen from "../../components/Screen";
import {useNavigation} from "@react-navigation/native";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import theme from "../../theme";

const SignInScreen = () => {
  const navigation = useNavigation();

  function handleSignIn() {
    // navigation.navigate('Home');
  }

  return (
    <Screen>
      <Text style={theme.typography.h1}>Sign in</Text>

      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.inputs}>
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

        <Button onPress={handleSignIn}>Sign In</Button>
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

export default SignInScreen;
