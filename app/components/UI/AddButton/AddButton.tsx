import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';

interface Props {
  onPress(): void;
  containerStyles?: ViewStyle;
}

const PLUS_IMAGE = require('@assets/images/big_plus.png');

export const AddButton: React.FC<Props> = ({onPress, containerStyles}) => {
  return (
    <TouchableWithoutFeedback
      style={{...containerStyles}}
      onPress={onPress}
      hitSlop={{
        top: 30,
        left: 30,
        right: 30,
        bottom: 30,
      }}>
      <Image source={PLUS_IMAGE} style={styles.image} />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 56,
    width: 56,
  },
});
