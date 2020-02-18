import React, {FC} from 'react';
import Screen from "../components/Screen";
import {Text} from "react-native";
import theme from "../theme";

const HomeScreen: FC = () => {
  return (
    <Screen>
      <Text style={theme.typography.h1}>HomeScreen</Text>
    </Screen>
  )
}

export default HomeScreen;
