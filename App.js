import React from 'react';
import MainScreen from './components/MainScreen';
import FullScreenView from './components/FullScreenView';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import withContext from './components/HOC/withContext';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="Main Screen" component={MainScreen} />
        <Stack.Screen name="Full Screen View" component={FullScreenView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default withContext(App);
