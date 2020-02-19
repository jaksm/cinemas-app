import React, {FC} from 'react';
import Screen from '../../components/Screen';
import {useRoute} from '@react-navigation/native';
import {Text} from 'react-native';
import {MovieDetails} from '../../stores/MovieStore';

const MovieScreen: FC = () => {
  const route = useRoute();
  const {movie}: {movie: MovieDetails | undefined} = route.params;

  if (!movie) {
    return (
      <Screen>
        <Text>Oops, something broke.</Text>
      </Screen>
    );
  }

  return (
    <Screen>
      <Text>{movie.id}</Text>
    </Screen>
  );
};

export default MovieScreen;
