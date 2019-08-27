import { handleActions } from 'redux-actions';

import { actionTypes } from './actions';

const initialState = {};

export default handleActions({
  [actionTypes.POINT_ADD]: (state, action) => ({
    ...state,
  }),
  
  [actionTypes.POINT_REMOVE]: (state, action) => ({
    ...state,
  }),
  
  [actionTypes.POINT_MOVE]: (state, action) => ({
    ...state,
  }),
}, initialState);