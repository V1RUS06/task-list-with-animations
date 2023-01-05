import {AppColors, CommonStyles, Spacing} from '@styles/';
import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ERROR_TEXT = 'Что-то не так с интернетом\nПроверь соединение';
const CONTAINER_SIZE = 44;

export const NetworkError: React.FC = () => {
  const insets = useSafeAreaInsets();

  const containerStyle = {
    paddingTop: insets.top,
  };
  return (
    <View style={[styles.wrapper, containerStyle]}>
      <View style={styles.container}>
        <Text style={styles.text}>{ERROR_TEXT}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: AppColors.RED,
  },
  container: {
    height: CONTAINER_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.SCALE_10,
  },
  text: {
    ...CommonStyles.regularText14,
    textAlign: 'center',
    color: '#fff',
  },
});
