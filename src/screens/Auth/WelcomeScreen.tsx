import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import theme from '../../theme';
import SafeScreen from '../../components/SafeScreen';
import Button from '../../components/Button';
import {useUserStore} from '../../stores/UserStore';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const {checkAuth} = useUserStore();

  const [loading, setLoading] = useState<boolean>(true);

  function handleSignUpPress() {
    navigation.navigate('SignUp');
  }

  function handleSignInPress() {
    navigation.navigate('SignIn');
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleCheckAuth = async () => {
    const authed = await checkAuth();
    setLoading(false);

    if (authed) {
      navigation.navigate('Home');
    }
  };

  useEffect(() => {
    handleCheckAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeScreen style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image source={require('../../assets/images/Logo.png')} />
          <Text style={theme.typography.h1}>Take Your Seat</Text>
        </View>

        {loading ? (
          <ActivityIndicator size={'large'} color={theme.colors.primary} />
        ) : (
          <View>
            <Button fullWidth={true} onPress={handleSignUpPress}>
              Sign up
            </Button>

            <TouchableOpacity activeOpacity={0.9} onPress={handleSignInPress}>
              <Text style={[theme.typography.p, styles.text]}>
                Already have account?{' '}
                <Text style={styles.signInText}>Sign in</Text> instead.
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  content: {
    flex: 1,
    maxHeight: '70%',
    justifyContent: 'space-between',
    paddingHorizontal: theme.screenPadding,
  } as ViewStyle,
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  text: {
    alignSelf: 'center',
    marginTop: 14 * 1.5,
  } as TextStyle,
  signInText: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  } as TextStyle,
});

export default WelcomeScreen;
