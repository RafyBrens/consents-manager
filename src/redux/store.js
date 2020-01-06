import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { ConsentReducer } from './consent';

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  consent: ConsentReducer,
});

/* eslint-disable no-underscore-dangle */
const reduxEnhacer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // initialize Redux Dev Tools, if they are installed in browser.
/* eslint-enable */

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), reduxEnhacer)
);

export default store;
