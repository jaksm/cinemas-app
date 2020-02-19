import React, {FC, useEffect} from 'react';
import Screen from '../components/Screen';
import {ScrollView, Text, View} from 'react-native';
import theme from '../theme';
import {useMovieStore} from '../stores/MovieStore';
import HorizontalList from '../components/HorizontalList';
import {observer} from 'mobx-react-lite';

const HomeScreen: FC = () => {
  const {
    getCurrentlyPlaying,
    currentlyPlayingMovies,
    getUpcoming,
    upcomingMovies,
  } = useMovieStore();

  useEffect(() => {
    getCurrentlyPlaying();
    getUpcoming();
  }, [getCurrentlyPlaying, getUpcoming]);

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={theme.typography.h1}>Currently</Text>
          <Text style={theme.typography.small}>In our cinemas</Text>
          <HorizontalList items={currentlyPlayingMovies} />
        </View>

        <View>
          <Text style={theme.typography.h1}>Upcoming</Text>
          <Text style={theme.typography.small}>
            You’ve never seen it before!
          </Text>
          <HorizontalList items={upcomingMovies} />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default observer(HomeScreen);
