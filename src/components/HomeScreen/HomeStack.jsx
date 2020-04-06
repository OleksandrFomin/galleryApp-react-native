import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import FullScreenView from './FullScreenView';

const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Full Screen View" component={FullScreenView} />
    </Stack.Navigator>
  );
};

export default HomeStack;
