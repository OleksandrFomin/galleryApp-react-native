import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import withContext from './src/components/HOC/withContext';
import HomeStack from './src/components/HomeScreen/HomeStack';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home Stack">
        <Tab.Screen name="Home Stack" component={HomeStack} />
        <Tab.Screen name="Full Screen View" component={HomeStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default withContext(App);
