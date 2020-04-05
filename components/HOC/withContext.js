import React from 'react';
import {Provider} from 'react-redux';
import store from '../../redux/store';

const withContext = (Component) => {
  return () => {
    return (
      <Provider store={store}>
        <Component />
      </Provider>
    );
  };
};

export default withContext;
