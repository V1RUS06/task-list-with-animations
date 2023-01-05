import {AppColors, Borders, CommonStyles} from '@styles/index';
import React from 'react';
import {Platform, Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

interface Props {
  text: string;
  onPress(): void;
  disabled: boolean;
}

export const AppButton: React.FC<Props> = ({
  text,
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, disabled ? styles.disabled : null]}
      onPress={onPress}
      activeOpacity={0.5}
      disabled={disabled}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const BUTTON_SIZE = 44;

const styles = StyleSheet.create({
  container: {
    height: BUTTON_SIZE,
    flexDirection: 'row',
    backgroundColor: AppColors.DARK_BLUE,
    borderRadius: Borders.RADIUS_8,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowOpacity: 0.4,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        elevation: 3,
      },
    }),
  },
  text: {
    ...CommonStyles.regularText24,
    color: AppColors.WHITE,
  },
  disabled: {
    backgroundColor: 'rgba(34, 47, 62, 0.5)',
  },
});
