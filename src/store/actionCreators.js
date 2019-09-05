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

export const movePoint = (dropData) => ({
  type: actionTypes.POINT_MOVE,
  ...dropData,
});