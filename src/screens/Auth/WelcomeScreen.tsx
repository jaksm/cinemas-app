import React from 'react';
import {Image, StyleSheet, Text, ViewStyle, View} from 'react-native';
import SafeScreen from '../../components/SafeScreen';
import theme from '../../theme';
import Button from '../../components/Button';

const WelcomeScreen = () => {
  return (
    <SafeScreen style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image source={require('../../assets/images/Logo.png')} />
          <Text style={theme.typography.h1}>Take Your Seat</Text>
        </View>

        <Button fullWidth={true}>Continue</Button>
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
    maxHeight: '60%',
    justifyContent: 'space-between',
    paddingHorizontal: theme.screenPadding,
  } as ViewStyle,
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
});

export default WelcomeScreen;
