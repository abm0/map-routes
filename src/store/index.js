import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'

// import loggerMiddleware from 'redux-logger';
import reducer from './reducer';
import sagas from './sagas';

export const sagaMiddleware = createSagaMiddleware();

const composeEnchancers = composeWithDevTools({});

const store = createStore(
  reducer, 
  // initialState, 
  composeEnchancers(applyMiddleware(
    // loggerMiddleware,
    sagaMiddleware
  ))
);;

sagaMiddleware.run(sagas);

export default store;
