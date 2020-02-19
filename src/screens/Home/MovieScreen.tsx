import React, {FC, useRef} from 'react';
import Screen from '../../components/Screen';
import {useRoute} from '@react-navigation/native';
import {
  Image,
  ImageStyle,
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {MovieDetails} from '../../stores/MovieStore';
import {getFullImagePath} from '../../stores/api';
import theme from '../../theme';
import Button from '../../components/Button';

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

  const genres = movie.genres.map(g => g.name).join(', ');
  const {current: price} = useRef<string>(
    Math.round(Math.random() * 100).toFixed(2),
  );

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{uri: getFullImagePath(movie.poster_path)}}
          style={styles.poster}
          resizeMode={'cover'}
        />

        <View style={styles.content}>
          <Text style={theme.typography.small}>{genres}</Text>
          <Text style={theme.typography.h1}>
            {movie.title}{' '}
            <Text style={theme.typography.h2}>
              ({new Date(movie.release_date).getFullYear()})
            </Text>
          </Text>
          <Text style={theme.typography.small}>
            <Text style={styles.titleText}>
              {movie.vote_average.toString()}
            </Text>
            <Text> ({movie.vote_count})</Text>
          </Text>

          <View style={styles.content}>
            <Text style={theme.typography.p}>{movie.overview}</Text>
          </View>
        </View>

        <Button>Buy Tickets For ${price}</Button>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  poster: {width: '100%', height: 300} as ImageStyle,
  titleText: {
    fontWeight: 'bold',
  } as TextStyle,
  content: {
    marginVertical: 14,
  } as ViewStyle,
  reserveButton: {
    alignSelf: 'flex-end',
  } as ViewStyle,
});

export default MovieScreen;
