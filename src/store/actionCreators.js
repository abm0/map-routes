import * as actionTypes from './actionTypes';

export const fetchAddressList = (addressValue) => ({
  type: actionTypes.ADDRESS_LIST_FETCH,
  addressValue,
});

export const addPoint = (address) => ({
  type: actionTypes.POINT_ADD,
  address,
});

export const removePoint = () => ({
  type: actionTypes.POINT_REMOVE,
});

export const movePoint = (dropData) => ({
  type: actionTypes.POINT_MOVE,
  ...dropData,
});