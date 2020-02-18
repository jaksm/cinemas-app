import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, ViewStyle} from 'react-native';

interface SafeScreenProps {
  style?: ViewStyle;
}

const SafeScreen: FC<SafeScreenProps> = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
});

export default SafeScreen;
