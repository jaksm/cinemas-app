import React, {FC} from 'react';

import {
  StyleSheet,
  TextInput as Base,
  TextInputProps,
  TextStyle,
} from 'react-native';

import theme from '../theme';

const TextInput: FC<TextInputProps> = props => {
  return <Base style={[styles.container, props.style]} placeholderTextColor={theme.colors.grey} {...props} />;
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14 * 1.25,
    paddingHorizontal: 14,
    backgroundColor: theme.colors.dark,
    borderRadius: theme.borderRadius.small,
    color: theme.colors.white,
    // minWidth: '100%',
  } as TextStyle,
});

export default TextInput;
