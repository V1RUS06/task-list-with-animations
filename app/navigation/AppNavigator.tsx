import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {observer} from 'mobx-react';

import {HEADER_NONE} from './screenOptions';
import {NAVIGATION_HOME} from '@navigation/screenNames';
import {HomeScreen} from '@screens/home/HomeScreen';
import {AddTaskScreen} from '@screens/home/screens/AddTaskScreen';

const Stack = createStackNavigator();

export const AppNavigator = observer(() => {
  return (
    <Stack.Navigator screenOptions={HEADER_NONE}>
      <Stack.Screen name={NAVIGATION_HOME.HOME} component={HomeScreen} />
      <Stack.Screen name={NAVIGATION_HOME.ADD_TASK} component={AddTaskScreen} />
    </Stack.Navigator>
  );
});
