import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { ConsentReducer } from './consent';

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  consent: ConsentReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(compose(thunk)))
);

export default store;
