import {AppColors, Borders} from '@styles/index';
import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface Props {
  onPress(isChecked: boolean): void;
  isChecked?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  disableBuiltInState?: boolean;
}

const CHECKED_IMAGE = require('@assets/images/ok.png');

export const CheckBox: React.FC<Props> = ({
  onPress,
  isChecked,
  containerStyle,
  disableBuiltInState = false,
}) => (
  <View style={[styles.container, containerStyle]}>
    <BouncyCheckbox
      onPress={onPress}
      innerIconStyle={styles.innerIconStyle}
      size={20}
      checkIconImageSource={CHECKED_IMAGE}
      isChecked={isChecked}
      fillColor={AppColors.DARK_BLUE}
      disableBuiltInState={disableBuiltInState}
      iconImageStyle={styles.iconImageStyle}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerIconStyle: {
    borderRadius: Borders.RADIUS_4,
    backgroundColor: '#ffffff',
    borderWidth: 2,
  },
  iconImageStyle: {
    backgroundColor: AppColors.DARK_BLUE,
    resizeMode: 'center',

    width: '100%',
    height: '100%',
  },
});
