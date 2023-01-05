import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  TextInputProps,
  ViewStyle,
  Platform,
} from 'react-native';
import {AppColors, Borders, CommonStyles, Spacing} from '@styles/';

export interface TextFieldProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  rightComponent?: React.ReactNode;
}

export const TextField = React.forwardRef<TextInput, TextFieldProps>(
  ({containerStyle, rightComponent, ...props}, ref) => {
    return (
      <View style={[styles.container, containerStyle]}>
        <TextInput
          ref={ref}
          style={[styles.input]}
          placeholderTextColor={AppColors.DARK_BLUE}
          {...props}
        />
        {rightComponent ? (
          <View style={styles.left}>{rightComponent}</View>
        ) : null}
      </View>
    );
  },
);

const INPUT_SIZE = 50;

const styles = StyleSheet.create({
  container: {
    borderRadius: Borders.RADIUS_8,
    backgroundColor: AppColors.WHITE_GRAY,
    width: '100%',
    height: INPUT_SIZE,
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
      android: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.25)',
      },
    }),
  },
  input: {
    paddingHorizontal: Spacing.SCALE_12,
    color: AppColors.DARK_BLUE,
    ...CommonStyles.regularText24,
  },
  left: {
    position: 'absolute',
    right: 0,
  },
});
