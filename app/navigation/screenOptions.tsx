import {
  StackNavigationOptions,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import React from 'react';
import {AppColors, CommonStyles, Spacing} from '@styles/index';
import {AppBackButton} from '@components/UI/AppBackButton';

export const cardStyleInterpolators: StackNavigationOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};
export const HEADER_NONE: StackNavigationOptions = {
  headerShown: false,
  ...cardStyleInterpolators,
};

export const APP_STACK_HEADER: StackNavigationOptions = {
  headerShown: true,
  headerStyle: {
    backgroundColor: 'transparent',
    marginTop: Spacing.SCALE_20,
  },

  headerLeft: props => (
    <AppBackButton withShadow={false} onPress={props.onPress} />
  ),
  headerBackTitle: '',
  headerTitleStyle: {
    ...CommonStyles.mediumText28,
    fontWeight: 'bold',
    color: AppColors.GRAY,
  },
};
