import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import { ConsentReducer } from './consent';
import { ListConsentsReducer } from './listConsents';

export const history = createBrowserHistory();

/* Create root reducer, containing all features of the application */
const createRootReducer = historyParam =>
  combineReducers({
    consent: ConsentReducer,
    listConsents: ListConsentsReducer,
    router: connectRouter(historyParam),
  });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  createRootReducer(history),
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
);

export default store;
