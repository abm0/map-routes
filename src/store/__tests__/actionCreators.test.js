import * as actionTypes from '../actionTypes';
import * as actionCreators from '../actionCreators';

describe('action creators', () => {
  const geocodeFn = () => {};
  
  it('should return proper ADDRESS_LIST_FETCH action', () => {
    const value = 'Some address';
    const expectedAction = {
      type: actionTypes.ADDRESS_LIST_FETCH,
      geocodeFn,
      value,
    };

    expect(actionCreators.fetchAddressList(value, geocodeFn)).toEqual(expectedAction);
  });
  
  it('should return proper POINT_ADD action', () => {
    const address = 'Some address';
    const expectedAction = {
      type: actionTypes.POINT_ADD,
      address,
    };

    expect(actionCreators.addPoint(address)).toEqual(expectedAction);
  });
  
  it('should return proper POINT_REMOVE action', () => {
    const id = 'Some id';
    const expectedAction = {
      type: actionTypes.POINT_REMOVE,
      id,
    };

    expect(actionCreators.removePoint(id)).toEqual(expectedAction);
  });

  it('should return proper POINT_ORDER_CHANGE action', () => {
    const dropData = {
      lat: 'lat',
      lng: 'lng',
    };
    const expectedAction = {
      type: actionTypes.POINT_ORDER_CHANGE,
      ...dropData,
    };

    expect(actionCreators.changePointOrder(dropData)).toEqual(expectedAction);
  });

  it('should return proper POINT_POSITION_CHANGE action', () => {
    const coordinates = [0, 0];
    const id = 'Some id';
    const geocodeFn = () => {};
    const expectedAction = {
      type: actionTypes.POINT_POSITION_CHANGE,
      id,
      coordinates,
      geocodeFn,
    };

    expect(actionCreators.updatePointPosition(id, coordinates, geocodeFn)).toEqual(expectedAction);
  });
});