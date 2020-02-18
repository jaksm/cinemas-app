import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import theme from '../theme';

interface ButtonProps extends TouchableOpacityProps {
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({children, fullWidth = false, ...rest}) => {
  const _containerStyle = [styles.container, rest.buttonStyle];

  if (fullWidth) {
    _containerStyle.push(styles.fullWidth);
  }

  return (
    <TouchableOpacity activeOpacity={0.95} style={_containerStyle} {...rest}>
      <Text style={[theme.typography.label, rest.textStyle]} selectable={false}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    borderRadius: 100,
    paddingVertical: 14 * 1.25,
    paddingHorizontal: 14 * 2,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  fullWidth: {
    minWidth: '100%',
  },
});

export default Button;
