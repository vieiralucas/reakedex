import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from './reducers';

let middlewares = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {

  const loggerMiddleware = createLogger();
  middlewares = [...middlewares, loggerMiddleware];
}

const store = createStore(rootReducer, undefined, applyMiddleware(...middlewares));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
