import addressesReducer, { initialAddressesState } from './addressesReducer';
import * as actionCreators from '../actionCreators';
import * as actionTypes from '../actionTypes';

describe('addresses reducer', () => {
  const reducerWithInitialState = (action) => addressesReducer(initialAddressesState, action);
  
  describe('on ADDRESS_LIST_FETCH action', () => {
    it('should set isFetching status to true and reset list array', () => {
      const expectedState = {
        list: [],
        isFetching: true,
      };
      
      const addressValue = 'adderessValue';
      const action = actionCreators.fetchAddressList(addressValue);
      const actualState = reducerWithInitialState(action);
      
      expect(actualState).toEqual(expectedState);
    });
  });


  describe('on ADDRESS_LIST_FETCH_SUCCESS action', () => {
    it('should add addresses to address list and set isFetching to false', () => {
      const addressList = [
        { name: 'address 1' },
        { name: 'address 2' },
        { name: 'address 3' },
      ];
      
      const expectedState = {
        isFetching: false,
        list: [...addressList],
      };
      
      const action = {
        type: actionTypes.ADDRESS_LIST_FETCH_SUCCESS,
        addressList,
      };
  
      const actualState = reducerWithInitialState(action);
  
      expect(actualState).toEqual(expectedState);
    });
  });
  
  describe('on ADDRESS_LIST_FETCH_FAIL action', () => {
    it('should set isFetching to false and not update address list', () => {
      const action = {
        type: actionTypes.ADDRESS_LIST_FETCH_FAIL,
      };
  
      const expectedState = {
        isFetching: false,
        list: [],
      };
  
      const actualState = reducerWithInitialState(action);
      expect(actualState).toEqual(expectedState);
    });
  });
});