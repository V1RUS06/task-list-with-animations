import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppBackButton} from '@components/UI/AppBackButton';
import {Text} from 'react-native';
import {AppColors, CommonStyles, Spacing} from '@styles/index';

export const AppBackHeader: React.FC<{title: string}> = ({title}) => {
  return (
    <View style={styles.container}>
      <AppBackButton withShadow={false} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.SCALE_30,
  },
  title: {
    ...CommonStyles.mediumText28,
    fontWeight: 'bold',
    color: AppColors.GRAY,
    marginLeft: Spacing.SCALE_30,
  },
});
