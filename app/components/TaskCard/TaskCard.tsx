import {AppColors, Borders, CommonStyles, Spacing} from '@styles/index';
import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {StyleSheet} from 'react-native';
import {CheckBox} from '@components/UI/CheckBox/CheckBox';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {observer} from 'mobx-react';
import {useStores} from '../../hooks/useStores';
import {ITask} from '@store/modules/TasksStore';

interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  task: ITask;
}

const TRASH_ICON = require('@assets/icons/trash.png');
const SCREEN_WIDTH = Dimensions.get('window').width;

const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.3;
const ITEM_HEIGHT = 44;

export const TaskCard: React.FC<Props> = observer(
  ({task, simultaneousHandlers}) => {
    const [checked, setChecked] = React.useState(false);
    const {tasksStore} = useStores();
    const translateX = useSharedValue(0);
    const itemHeight = useSharedValue(ITEM_HEIGHT);
    const marginTop = useSharedValue(Spacing.SCALE_10);

    const onCheckedItem = () => {
      setChecked(!checked);
    };
    const removeTask = React.useCallback((id: string | number[]) => {
      tasksStore.removeTask(id);
    }, []);

    const PanGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>(
      {
        onActive: event => {
          translateX.value = event.translationX;
        },
        onEnd: () => {
          const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
          if (shouldBeDismissed) {
            translateX.value = withTiming(-SCREEN_WIDTH);
            itemHeight.value = withTiming(0);
            marginTop.value = withTiming(0, undefined, isFinished => {
              if (isFinished) {
                runOnJS(removeTask)(task.id);
              }
            });
          } else {
            translateX.value = withTiming(0);
          }
        },
      },
    );

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    }));

    const animatedIconStyle = useAnimatedStyle(() => {
      const opacity = withTiming(
        translateX.value < TRANSLATE_X_THRESHOLD ? 0 : 1,
      );

      return {opacity};
    });

    const animatedTaskContainerStyle = useAnimatedStyle(() => {
      return {
        height: itemHeight.value,
        marginTop: marginTop.value,
      };
    });

    return (
      <TouchableWithoutFeedback onPress={onCheckedItem}>
        <Animated.View
          style={[styles.taskContainer, animatedTaskContainerStyle]}>
          <Animated.View style={[styles.iconContainer, animatedIconStyle]}>
            <Image source={TRASH_ICON} style={styles.icon} />
          </Animated.View>
          <PanGestureHandler
            onGestureEvent={PanGesture}
            simultaneousHandlers={simultaneousHandlers}>
            <Animated.View style={[styles.container, animatedStyle]}>
              <CheckBox
                onPress={onCheckedItem}
                isChecked={checked}
                disableBuiltInState
              />
              <Text style={[styles.text, checked ? styles.selectedText : null]}>
                {task.text}
              </Text>
            </Animated.View>
          </PanGestureHandler>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  },
);

const styles = StyleSheet.create({
  taskContainer: {
    marginTop: Spacing.SCALE_16,
    justifyContent: 'center',
    height: ITEM_HEIGHT,
  },
  container: {
    paddingHorizontal: Spacing.SCALE_10,
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',

    borderRadius: Borders.RADIUS_8,
    backgroundColor: 'rgba(250, 250, 254, 1)',
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

  text: {
    ...CommonStyles.regularText24,
    color: AppColors.DARK_BLUE,
  },
  selectedText: {
    textDecorationLine: 'line-through',
    color: 'rgba(34, 47, 62, 0.5)',
  },
  iconContainer: {
    position: 'absolute',
    right: '5%',
  },
  icon: {
    width: 28,
    height: 28,
  },
});
