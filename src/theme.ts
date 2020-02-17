import {TextStyle} from 'react-native';
import {Theme} from "@react-navigation/native/lib/typescript/src/types";

const colors = {
  white: '#F6F6F6',
  grey: '#ABB4BD',
  primary: '#EF3651',
  background: '#1E1F28',
  dark: '#2A2C36',
  error: '#FF2424',
  success: '#55D85A',
  hot: '#FF3E3E',
  text: '#F5F5F5',
};

const typography = {
  h1: {
    fontFamily: 'Muli',
    fontWeight: 'bold',
    fontSize: 34,
    color: colors.white,
  } as TextStyle,
  h2: {
    fontFamily: 'Muli',
    fontWeight: '600',
    fontSize: 24,
    color: colors.white,
  } as TextStyle,
  h3: {
    fontFamily: 'Muli',
    fontWeight: '600',
    fontSize: 18,
    color: colors.white,
  } as TextStyle,
  p: {
    fontFamily: 'Muli',
    fontWeight: '500',
    fontSize: 14,
    color: colors.text,
  } as TextStyle,
  small: {
    fontFamily: 'Muli',
    fontWeight: 'normal',
    fontSize: 11,
    color: colors.white,
  } as TextStyle,
  label: {
    fontFamily: 'Muli',
    fontWeight: '600',
    fontSize: 14,
    color: colors.white,
  } as TextStyle,
};

const screenPadding = 16;

const theme = {
  colors,
  typography,
  screenPadding,
};

export type AppThemeColors = keyof typeof colors;
export type AppThemeTypography = keyof typeof typography;

export const NavigationTheme: Theme = {
  colors: {
    background: colors.background,
    border: colors.grey,
    card: colors.background,
    primary: colors.primary,
    text: colors.text,
  },
  dark: true,
};

export default theme;
