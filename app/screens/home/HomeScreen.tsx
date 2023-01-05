import {Spacing} from '@styles/index';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {AddButton} from '@components/UI/AddButton/AddButton';
import {StackScreenProps} from '@react-navigation/stack';
import {NAVIGATION_HOME} from '@navigation/screenNames';
import {TasksList} from '@screens/home/components/TasksList/TasksList';
import {observer} from 'mobx-react';
import {SafeAreaView} from 'react-native-safe-area-context';

const LOGO_IMAGE = require('@assets/images/logo.png');

export const HomeScreen: React.FC<StackScreenProps<any>> = observer(
  ({navigation}) => {
    const onAddTaskPress = () => {
      navigation.push(NAVIGATION_HOME.ADD_TASK);
    };

    return (
      <SafeAreaView edges={['bottom', 'top']} style={{flex: 1}}>
        <View style={styles.container}>
          <Image source={LOGO_IMAGE} style={styles.logo} resizeMode="contain" />
          <View style={styles.addButtonContainer}>
            <AddButton onPress={onAddTaskPress} />
          </View>
          <TasksList />
        </View>
      </SafeAreaView>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing.SCALE_16,
  },
  logo: {
    marginTop: Spacing.SCALE_90,
    width: 234,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 31,
    right: 36,
    zIndex: 5,
  },
});
