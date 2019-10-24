import * as actionTypes from './actionTypes';

export const fetchAddressList = (value, geocodeFn) => ({ 
  type: actionTypes.ADDRESS_LIST_FETCH, 
  value,
  geocodeFn,
});

export const fetchAddressListSuccess = (data) => ({
  type: actionTypes.ADDRESS_LIST_FETCH_SUCCESS, 
  addressList: data,
});

export const fetchAddressListFail = () => ({
  type: actionTypes.ADDRESS_LIST_FETCH_FAIL, 
});

export const addPoint = (address, id) => ({
  type: actionTypes.POINT_ADD,
  address,
  id,
});

export const removePoint = (id) => ({
  type: actionTypes.POINT_REMOVE,
  id,
});

export const changePointOrder = (dropData) => ({
  type: actionTypes.POINT_ORDER_CHANGE,
  ...dropData,
});

export const updatePointPosition = (id, geocodeFn, coordinates) => ({
  type: actionTypes.POINT_POSITION_CHANGE,
  id,
  geocodeFn,
  coordinates,
});

export const updatePointPositionSuccess = (data, id) => ({
  type: actionTypes.POINT_POSITION_CHANGE_SUCCESS,
  data,
  id,
});

export const updatePointPositionFail = () => ({
  type: actionTypes.POINT_POSITION_CHANGE_FAIL,
});