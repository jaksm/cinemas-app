import React, {FC} from 'react';
import Screen from "../../components/Screen";
import { useRoute } from '@react-navigation/native';
import {Text} from "react-native";

const MovieScreen: FC = () => {
  const route = useRoute();
  const {movie} = route.params;

  return (
    <Screen>
      <Text>{movie.id}</Text>
    </Screen>
  )
}

export default MovieScreen;
