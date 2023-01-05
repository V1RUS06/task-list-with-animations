import * as React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {AppColors, Spacing} from '@styles/';

interface Props {
  onPress?(): void;
  source?: ImageSourcePropType;
  withShadow?: boolean;
  tintColor?: string;
}
export const AppBackButton: React.FC<Props> = ({
  onPress,
  source,
  withShadow = true,
  tintColor,
}) => {
  const navigation = useNavigation();
  const goBack = onPress || navigation.goBack;
  const tintStyle = {
    tintColor,
  };
  return (
    <TouchableOpacity
      style={[styles.container, withShadow ? styles.shadow : null]}
      onPress={goBack}>
      <Image
        style={[tintStyle, styles.arrowSize]}
        source={source || require('@assets/images/left_arrow.png')}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const CONTAINER_SIZE = 24;

const styles = StyleSheet.create({
  container: {
    width: CONTAINER_SIZE,
    height: CONTAINER_SIZE,
    alignItems: 'center',
    marginLeft: Spacing.SCALE_20,
  },

  shadow: {
    backgroundColor: AppColors.WHITE,
    tintColor: AppColors.BLACK,
    elevation: 2,
    shadowColor: AppColors.BLACK,
    shadowOpacity: 0.15,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  arrowSize: {
    width: 24,
    height: 24,
  },
});
