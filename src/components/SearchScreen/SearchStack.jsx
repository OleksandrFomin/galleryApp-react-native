import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './SearchScreen';
import Searchbar from './Searchbar';
import FullScreenView from '../Common/FullScreenView';

const SearchStack = ({getSearchedPhotos}) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerTitle: (props) => (
          <Searchbar getSearchedPhotos={getSearchedPhotos} {...props} />
        ),
      }}>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen
        name="Full Screen View"
        component={FullScreenView}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
