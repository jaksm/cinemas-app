import React, {FC} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import theme from '../theme';
import CameraIcon from '../assets/icons/camera.svg';

const ICON_SIZE = 32;

const FAB: FC<TouchableOpacityProps> = props => {
  return (
    <TouchableOpacity {...props} style={[styles.container, props.style]}>
      <CameraIcon width={ICON_SIZE} height={ICON_SIZE} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: ICON_SIZE / 2,
    borderRadius: 100,
    backgroundColor: theme.colors.success,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: theme.screenPadding,
    right: theme.screenPadding,
  } as ViewStyle,
});

export default FAB;
