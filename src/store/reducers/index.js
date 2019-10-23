import { combineReducers } from 'redux';

import addresses from './addresses';
import points from './points';

export default combineReducers({
  addresses,
  points,
});