import React, {FC, useEffect} from 'react';
import Screen from '../components/Screen';
import {Text} from 'react-native';
import theme from '../theme';
import {useMovieStore} from "../stores/MovieStore";

const HomeScreen: FC = () => {
  const {getCurrentlyPlaying, getMovieDetails} = useMovieStore();

  useEffect(() => {
    // getCurrentlyPlaying()
    getMovieDetails(123)
  }, [])

  return (
    <Screen>
      <Text style={theme.typography.h1}>HomeScreen</Text>
    </Screen>
  );
};

export default HomeScreen;
