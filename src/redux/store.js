import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import randomPhotosReducer from './randomPhotosReducer';
import searchedPhotosReducer from './searchedPhotosReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  randomPhotos: randomPhotosReducer,
  searchedPhotos: searchedPhotosReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export default store;
