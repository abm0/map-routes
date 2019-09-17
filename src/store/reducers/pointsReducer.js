import { handleActions } from 'redux-actions';
import { moveElement } from 'helpers';

import * as actionTypes from '../actionTypes';

import cloneDeep from 'lodash/cloneDeep';

const initialPointsState = {
  byId: {},
  ids: [],
};

const pointsReducer = handleActions({
  [actionTypes.POINT_ADD]: (state, action) => {
    const newState = cloneDeep(state);
    const { byId } = newState;
    const newId = action.id;

    const presentPoint = Object.values(byId).filter(point => 
      point.lat === action.address.lat &&
      point.lng === action.address.lng
    );

    if (presentPoint.length) {
      return { ...newState };
    }
    
    return {
      ...newState,
      byId: {
        ...newState.byId,
        [newId]: { 
          ...action.address,
          id: newId,
        },
      },
      ids: [...newState.ids, newId],
    };
  },
  
  [actionTypes.POINT_REMOVE]: (state, action) => {
    const newState = cloneDeep(state);
    const { byId, ids } = newState;
    const { id } = action;

    ids.splice(ids.indexOf(id), 1);
    delete byId[id];

    return {
      ...newState,
      byId: {
        ...byId
      },
      ids: [...ids],
    };
  },
  
  [actionTypes.POINT_ORDER_CHANGE]: (state, action) => {
    const newState = cloneDeep(state);
    
    const {
      oldIndex,
      newIndex,
    } = action;

    const { ids } = newState;

    const reorderedIds = moveElement(ids, oldIndex, newIndex)

    return {
      ...newState,
      ids: reorderedIds,
    };
  },

  [actionTypes.POINT_POSITION_CHANGE]: (state, action) => {
    const newState = cloneDeep(state);
    
    const {
      coordinates,
      id,
    } = action;
    
    const { byId } = newState;

    byId[id].lng = coordinates[0].toString();
    byId[id].lat = coordinates[1].toString();

    return {
      ...newState,
      byId: {
        ...byId,
      }
    }
  },
}, initialPointsState);

export default pointsReducer;