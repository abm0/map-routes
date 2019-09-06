import * as actionTypes from './actionTypes';

export const fetchAddressList = (addressValue) => ({
  type: actionTypes.ADDRESS_LIST_FETCH,
  addressValue,
});

export const addPoint = (address) => ({
  type: actionTypes.POINT_ADD,
  address,
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
