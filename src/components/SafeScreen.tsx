import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const SafeScreen: FC = ({children}) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export default SafeScreen;
