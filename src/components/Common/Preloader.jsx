import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import Center from './Center';

const Preloader = () => {
  return (
    <Center>
      <ActivityIndicator size="large" />
    </Center>
  );
};

export default Preloader;
