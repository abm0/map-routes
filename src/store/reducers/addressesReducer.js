import { handleActions } from 'redux-actions';

import * as actionTypes from '../actionTypes';

export const initialAddressesState = {
  list: [],
  isFetching: false,
};

const addressesReducer = handleActions({
  [actionTypes.ADDRESS_LIST_FETCH]: (state, action) => ({
    ...state,
    isFetching: true,
    list: [],
  }),

  [actionTypes.ADDRESS_LIST_FETCH_SUCCESS]: (state, action) => ({
    ...state,
    list: [...action.addressList],
    isFetching: false,
  }),

  [actionTypes.ADDRESS_LIST_FETCH_FAIL]: (state, action) => ({
    ...state,
    isFetching: false,
  }),
}, initialAddressesState);

export default addressesReducer;