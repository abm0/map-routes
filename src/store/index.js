import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducer from 'store/reducer';

const composeEnchancers = composeWithDevTools({});

const initialState = {};

export default () => {
  return createStore(
    reducer, 
    initialState, 
    composeEnchancers(applyMiddleware(logger))
  );
};
