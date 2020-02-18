import React, {FC} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import theme from '../theme';

const Screen: FC = ({children}) => (
  <View style={styles.container}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.screenPadding,
  } as ViewStyle,
});

export default Screen;
