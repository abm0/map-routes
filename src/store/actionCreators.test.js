import * as actionTypes from './actionTypes';
import * as actionCreators from './actionCreators';

describe('action creators', () => {
  it('should return proper ADDRESS_LIST_FETCH action', () => {
    const addressValue = 'Some address';
    const expectedAction = {
      type: actionTypes.ADDRESS_LIST_FETCH,
      addressValue,
    };

    expect(actionCreators.fetchAddressList(addressValue)).toEqual(expectedAction);
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
    const expectedAction = {
      type: actionTypes.POINT_POSITION_CHANGE,
      id,
      coordinates,
    };

    expect(actionCreators.updatePointPosition(coordinates, id)).toEqual(expectedAction);
  });
});