import React, {FC, useEffect} from 'react';
import Screen from '../../components/Screen';
import {ScrollView, Text, View} from 'react-native';
import theme from '../../theme';
import {useMovieStore} from '../../stores/MovieStore';
import HorizontalList from '../../components/HorizontalList';
import {observer} from 'mobx-react-lite';
import FAB from '../../components/FAB';
import {useNavigation} from '@react-navigation/native';

const HomeScreen: FC = () => {
  const {
    getCurrentlyPlaying,
    currentlyPlayingMovies,
    getUpcoming,
    upcomingMovies,
  } = useMovieStore();
  const navigation = useNavigation();


  function handleCameraPress() {
    navigation.navigate('QRScan');
  }

  useEffect(() => {
    getCurrentlyPlaying();
    getUpcoming();
  }, [getCurrentlyPlaying, getUpcoming]);

  return (
    <Screen style={{position: 'relative'}}>
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

      <FAB onPress={handleCameraPress} />
    </Screen>
  );
};

export default observer(HomeScreen);
