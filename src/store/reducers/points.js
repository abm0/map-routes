import PropTypes from 'prop-types';
import { handleActions } from 'redux-actions';
import { moveElement } from 'helpers';

import cloneDeep from 'lodash/cloneDeep';
import * as actionTypes from '../actionTypes';

export const initialPointsState = {
  byId: {},
  ids: [],
};

const pointsReducer = handleActions({
  [actionTypes.POINT_ADD]: (state, action) => {
    const nextState = cloneDeep(state);
    const { byId } = nextState;
    const newId = action.id;

    const presentPoint = Object.values(byId).filter(point =>
      point.lat === action.address.lat &&
      point.lng === action.address.lng,
    );

    if (presentPoint.length) {
      return { ...nextState };
    }
    
    return {
      ...nextState,
      byId: {
        ...nextState.byId,
        [newId]: {
          ...action.address,
          id: newId,
          isSaving: false,
        },
      },
      ids: [...nextState.ids, newId],
    };
  },
  
  [actionTypes.POINT_REMOVE]: (state, action) => {
    const nextState = cloneDeep(state);
    const {
      byId, 
      ids,
    } = nextState;
    const { id } = action;

    ids.splice(ids.indexOf(id), 1);
    delete byId[id];

    return {
      ...nextState,
      byId: { ...byId },
      ids: [...ids],
    };
  },
  
  [actionTypes.POINT_ORDER_CHANGE]: (state, action) => {
    const nextState = cloneDeep(state);
    
    const {
      oldIndex,
      newIndex,
    } = action;

    const { ids } = nextState;

    const reorderedIds = moveElement(ids, oldIndex, newIndex)

    return {
      ...nextState,
      ids: reorderedIds,
    };
  },

  [actionTypes.POINT_POSITION_CHANGE]: (state, action) => {
    const nextState = cloneDeep(state);
    const { id } = action;
    
    return {
      ...nextState,
      byId: {
        ...nextState.byId,
        [id]: {
          ...nextState.byId[id],
          isSaving: true,
        },
      },
    };
  },
  
  [actionTypes.POINT_POSITION_CHANGE_SUCCESS]: (state, action) => {
    const nextState = cloneDeep(state);
    
    const {
      data,
      id,
    } = action;
    
    const { byId } = nextState;

    const point = { ...data };

    point.id = id;
    point.lng = point.lng.toString();
    point.lat = point.lat.toString();

    return {
      ...nextState,
      byId: {
        ...byId,
        [id]: {
          ...point,
          isSaving: false,
        },
      },
    }
  },
}, initialPointsState);

export const pointShape = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  lat: PropTypes.string,
  lng: PropTypes.string,
  isSaving: PropTypes.bool,
};

export default pointsReducer;