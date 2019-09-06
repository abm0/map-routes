import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';

import { moveElement } from 'helpers';


const initialAddressesState = {
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
    isFetchin: false,
  }),

  [actionTypes.ADDRESS_LIST_FETCH_FAIL]: (state, action) => ({
    ...state,
    isFetching: false,
  }),
}, initialAddressesState);

const initialPointsState = {
  byId: {},
  ids: [],
};

const pointsReducer = handleActions({
  [actionTypes.POINT_ADD]: (state, action) => {
    const newId = new Date().getUTCMilliseconds();
    
    return {
      ...state,
      byId: {
        ...state.byId,
        [newId]: { 
          ...action.address,
          id: newId,
        },
      },
      ids: [...state.ids, newId],
    };
  },
  
  [actionTypes.POINT_REMOVE]: (state, action) => {
    const { byId, ids } = state;
    const { id } = action;

    ids.splice(ids.indexOf(id), 1);
    delete byId[id];

    return {
      ...state,
      byId: {
        ...byId
      },
      ids: [...ids],
    };
  },
  
  [actionTypes.POINT_ORDER_CHANGE]: (state, action) => {
    const {
      oldIndex,
      newIndex,
    } = action;

    const { ids } = { ...state };

    const reorderedIds = moveElement(ids, oldIndex, newIndex)

    return {
      ...state,
      ids: reorderedIds,
    };
  },

  [actionTypes.POINT_POSITION_CHANGE]: (state, action) => {
    const {
      coordinates,
      id,
    } = action;

    const { byId } = state;

    byId[id].lng = coordinates[0].toString();
    byId[id].lat = coordinates[1].toString();

    return {
      ...state,
      byId: {
        ...byId,
      }
    }
  },
}, initialPointsState);

const rootReducer = combineReducers({
  addresses: addressesReducer,
  points: pointsReducer,
});

export default rootReducer;