import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

const composeEnchancers = composeWithDevTools({});

const store = createStore(
  reducers, 
  composeEnchancers()
);

export default store;
