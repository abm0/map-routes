import PropTypes from 'prop-types';
import { handleActions } from 'redux-actions';

import * as actionTypes from '../actionTypes';

export const initialAddressesState = {
  list: [],
  isFetching: false,
};

const addressesReducer = handleActions({
  [actionTypes.ADDRESS_LIST_FETCH]: state => ({
    ...state,
    isFetching: true,
    list: [],
  }),

  [actionTypes.ADDRESS_LIST_FETCH_SUCCESS]: (state, action) => ({
    ...state,
    list: [...action.addressList],
    isFetching: false,
  }),

  [actionTypes.ADDRESS_LIST_FETCH_FAIL]: state => ({
    ...state,
    isFetching: false,
  }),
}, initialAddressesState);

export const addressShape = {
  lat: PropTypes.string,
  lng: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default addressesReducer;