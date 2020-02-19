import React, {FC, useRef, useState} from 'react';
import {RNCamera} from 'react-native-camera';
import Screen from '../../components/Screen';
import {Text, StyleSheet, View, ViewStyle} from 'react-native';
import SuccessIcon from '../../assets/icons/correct.svg';
import theme from '../../theme';
import {useNavigation} from "@react-navigation/native";
import {MovieDetails, useMovieStore} from "../../stores/MovieStore";
import {toJS} from "mobx";

const ScanSuccess: FC = () => (
  <View style={styles.success}>
    <SuccessIcon width={84} height={84} />
    <Text style={theme.typography.h3}>QR Scanned!</Text>
  </View>
);

const QrScanScreen = () => {
  const navigation = useNavigation();
  const {getMovieDetails} = useMovieStore();

  const [success, setSuccess] = useState(false);
  const cameraRef = useRef<RNCamera>(null);

  async function handleBarCode({data}: {data: string}) {
    setSuccess(true);
    const movieDetails = await getMovieDetails(Number(data));
    setSuccess(false);
    navigation.navigate('Movie', {
      movie: toJS<MovieDetails>(movieDetails),
    });
  }

  return (
    <Screen style={{position: 'relative'}}>
      {success && <ScanSuccess />}
      <RNCamera
        ref={cameraRef}
        style={{
          flex: 1,
          width: '100%',
        }}
        onBarCodeRead={handleBarCode}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({
  success: {
    position: 'absolute',
    alignItems: 'center',
    zIndex: 10,
    top: '45%',
    left: '42%',
  } as ViewStyle,
});

export default QrScanScreen;
