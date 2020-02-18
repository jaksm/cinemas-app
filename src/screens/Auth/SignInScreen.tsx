import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import Screen from '../../components/Screen';
import {useNavigation} from '@react-navigation/native';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import theme from '../../theme';
import {useUserStore} from '../../stores/UserStore';

const SignInScreen = () => {
  const {signIn} = useUserStore();
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function handleSignIn() {
    try {
      await signIn({email, password});
      console.log('SignedIn');
      // navigation.navigate('Home');
    } catch (e) {
      console.log('Error signing in', e);
    }
  }

  return (
    <Screen>
      <Text style={theme.typography.h1}>Sign in</Text>

      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.inputs}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder={'john@doe.com'}
            keyboardType={'email-address'}
            autoCompleteType={'email'}
            autoCorrect={false}
            autoCapitalize={'none'}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
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
