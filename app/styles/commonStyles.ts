import {StyleSheet} from 'react-native';
import * as Typography from './typography';

export const CommonStyles = StyleSheet.create({
  /**
   * Bold text start
   */
  boldText16: {
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_UBUNTU_BOLD,
  },
  /**
   * Medium text start
   */
  mediumText16: {
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_UBUNTU_MEDIUM,
  },
  mediumText28: {
    fontSize: Typography.FONT_SIZE_28,
    fontFamily: Typography.FONT_FAMILY_UBUNTU_MEDIUM,
  },
  /**
   * Regular text start
   */
  regularText24: {
    fontSize: Typography.FONT_SIZE_24,
    fontFamily: Typography.FONT_FAMILY_UBUNTU_REGULAR,
    lineHeight: 28,
  },
  regularText16: {
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_UBUNTU_REGULAR,
    lineHeight: Typography.LINE_HEIGHT_18,
  },
  regularText14: {
    fontSize: Typography.FONT_SIZE_14,
    fontFamily: Typography.FONT_FAMILY_UBUNTU_REGULAR,
    lineHeight: Typography.LINE_HEIGHT_16,
  },
  /**
   * text shadow
   */

  textShadowBlack16: {
    textShadowColor: 'rgba(0, 0, 0, 0.16)',
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowRadius: 3,
  },
});
