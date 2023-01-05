import {AppColors} from '@styles/index';
import * as React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  StyleSheet,
  View,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CONTAINER_WIDTH = width;
const CONTAINER_HEIGHT = height;

const LOGO_IMAGE = require('@assets/images/logo.png');

export type SplashAnimatedStatusLiteral = 'init' | 'data' | 'home';

interface Props {
  animatedStatus: SplashAnimatedStatusLiteral;
  onFinish(): void;
}
export const Loader: React.FC<Props> = ({animatedStatus, onFinish}) => {
  return (
    <View style={styles.container}>
      <Image source={LOGO_IMAGE} style={styles.logo} resizeMode="contain" />
      <ActivityIndicator color={AppColors.RED} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CONTAINER_WIDTH,
    height: CONTAINER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.WHITE_GRAY,
  },
  logo: {
    width: 234,
  },
});
