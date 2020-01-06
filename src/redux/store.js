import {combineReducers, createStore} from 'redux';
import {ConsentReducer} from './consent';

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  consent: ConsentReducer,
});

/* eslint-disable no-underscore-dangle */
const reduxDevtoolsEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // initialize Redux Dev Tools, if they are installed in browser.
/* eslint-enable */

const store = createStore(rootReducer, reduxDevtoolsEnhancer);

export default store;
