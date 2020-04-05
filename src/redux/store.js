import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import photosListReducer from './photosListReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  photosList: photosListReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export default store;
