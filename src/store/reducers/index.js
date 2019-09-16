import { combineReducers } from 'redux';

import addresses from './addressesReducer';
import points from './pointsReducer';

export default combineReducers({
  addresses,
  points,
});