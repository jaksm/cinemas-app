import React, {FC} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import theme from '../theme';

interface ScreenProps {
  style?: ViewStyle;
}

const Screen: FC<ScreenProps> = ({children, style}) => (
  <View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.screenPadding,
    flex: 1,
  } as ViewStyle,
});

export default Screen;
