export const actionTypes = {
  POINT_ADD: 'POINT_ADD',
  POINT_REMOVE: 'POINT_REMOVE',
  POINT_MOVE: 'POINT_MOVE',
};

export const addPoint = () => ({
  type: actionTypes.POINT_ADD,
});

export const removePoint = () => ({
  type: actionTypes.POINT_REMOVE,
});

export const movePoint = () => ({
  type: actionTypes.POINT_MOVE,
});