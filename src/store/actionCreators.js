import * as actionTypes from './actionTypes';

export const fetchAddressList = () => ({
  type: actionTypes.ADDRESS_LIST_FETCH,
});

export const fetchAddressListSuccess = (data) => ({
  type: actionTypes.ADDRESS_LIST_FETCH_SUCCESS, 
  addressList: data,
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

export const updatePointPosition = (coordinates, id) => ({
  type: actionTypes.POINT_POSITION_CHANGE,
  coordinates,
  id,
});
