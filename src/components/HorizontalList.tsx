import React, {FC, useRef} from 'react';
import {
  FlatList,
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Movie} from '../stores/MovieStore';
import {getFullImagePath} from '../stores/api';
import theme from '../theme';
import truncate from '../utils/truncate';
import {useNavigation} from '@react-navigation/native';
import {toJS} from "mobx";

const DIMENSIONS = {
  width: 148,
  height: 184,
};
const ITEM_PADDING = 14 / 2;
const SNAP_WIDTH = DIMENSIONS.width + ITEM_PADDING;

type ListItem = Movie;

const Item: FC<ListItem> = item => {
  const {title, poster_path, vote_average, vote_count} = item;

  const navigation = useNavigation();

  const posterURI = getFullImagePath(poster_path);

  const {current: price} = useRef<string>(
    Math.round(Math.random() * 100).toFixed(2),
  );

  function handleMoviePress() {
    navigation.navigate('Movie', { movie: toJS(item) });
  }

  return (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.7}
      onPress={handleMoviePress}>
      <Image source={{uri: posterURI}} style={styles.poster} />

      <View>
        <Text style={theme.typography.small}>
          <Text style={styles.titleText}>{vote_average.toString()}</Text>
          <Text> ({vote_count})</Text>
        </Text>
        <Text style={[theme.typography.p, styles.titleText]}>
          {truncate(title, 17)}
        </Text>
        <Text style={[theme.typography.small, styles.priceText]}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
};

interface HorizontalList {
  items: ListItem[];
}

const HorizontalList: FC<HorizontalList> = ({items}) => {
  const keyExtractor = ({id}: ListItem) =>
    typeof id === 'string' ? id : id.toString();

  return (
    <View>
      <FlatList
        style={styles.list}
        data={items}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        snapToInterval={SNAP_WIDTH + ITEM_PADDING * 2}
        keyExtractor={keyExtractor}
        renderItem={({item}) => <Item {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginHorizontal: -ITEM_PADDING,
    marginVertical: theme.screenPadding,
  } as ViewStyle,
  item: {
    width: SNAP_WIDTH,
    padding: ITEM_PADDING,
    marginHorizontal: ITEM_PADDING,
  } as ViewStyle,
  poster: {
    ...DIMENSIONS,
    borderRadius: theme.borderRadius.small,
    width: SNAP_WIDTH,
    margin: -ITEM_PADDING,
    marginBottom: ITEM_PADDING,
  } as ImageStyle,
  priceText: {
    color: theme.colors.primary,
  } as TextStyle,
  titleText: {
    fontWeight: 'bold',
  } as TextStyle,
});

export default HorizontalList;
