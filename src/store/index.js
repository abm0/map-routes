import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from 'store/localStorage';

import reducers from './reducers';

const STORAGE_NAMESPACE = 'map-routes';

const persistedState = loadState(STORAGE_NAMESPACE);
const composeEnchancers = composeWithDevTools({});

const store = createStore(reducers, persistedState, composeEnchancers());

store.subscribe(() => {
  saveState(STORAGE_NAMESPACE, store.getState());
});

export default store;
