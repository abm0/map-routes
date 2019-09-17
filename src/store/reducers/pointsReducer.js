import { handleActions } from 'redux-actions';
import { moveElement } from 'helpers';

import * as actionTypes from '../actionTypes';

const initialPointsState = {
  byId: {},
  ids: [],
};

const pointsReducer = handleActions({
  [actionTypes.POINT_ADD]: (state, action) => {
    const { byId } = state;
    // const newId = new Date().getUTCMilliseconds();
    const newId = action.id;

    const presentPoint = Object.values(byId).filter(point => 
      point.lat === action.address.lat &&
      point.lng === action.address.lng
    );

    if (presentPoint.length) {
      return { ...state };
    }
    
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

export default pointsReducer;