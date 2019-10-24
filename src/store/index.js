import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from 'store/localStorage';
import createSagaMiddleware from 'redux-saga';
import reducers from 'store/reducers';
import sagas from 'store/sagas';

const STORAGE_NAMESPACE = 'map-routes';

const persistedState = loadState(STORAGE_NAMESPACE);
const composeEnchancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();

const storeEnchancers = composeEnchancers(applyMiddleware(sagaMiddleware));

const store = createStore(
  reducers, 
  persistedState, 
  storeEnchancers,
);

sagaMiddleware.run(sagas);

store.subscribe(() => {
  saveState(STORAGE_NAMESPACE, store.getState());
});

export default store;
