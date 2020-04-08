import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import FullScreenView from '../Common/FullScreenView';

const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'My Gallery'}}
      />
      <Stack.Screen
        name="Full Screen View"
        component={FullScreenView}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
