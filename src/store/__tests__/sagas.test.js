import mockAxios from 'axios';

import * as geocoderApi from 'api/geocoder';

import { fetchAddressListSaga } from '../sagas';
import { fetchAddressList } from '../actionCreators';
import * as actionTypes from '../actionTypes';

describe('fetchAddressListSaga', () => {  
  const addressValue = 'some address';
  const action = fetchAddressList(addressValue);

  it('should dispatch ADDRESS_LIST_FETCH_SUCCESS action when API call succeeds', async () => {    
    // mockAxios.post.mockImplementationOnce(() => Promise.resolve([]));
    mockAxios.post.mockResolvedValueOnce([]);
    
    // const response = await geocoderApi.fetchAddressList();

    const requestSaga = fetchAddressListSaga(action);

    requestSaga.next();
     
    const requestSagaResult = requestSaga.next().value;

    console.log(requestSagaResult);

    expect(requestSagaResult.payload.action.type).toEqual(actionTypes.ADDRESS_LIST_FETCH_SUCCESS);
  });

  // it('should dispatch ADDRESS_LIST_FETCH_FAIL action when API call fails', () => {
  //   const mockedRequestOptions = {
  //     willFail: true,
  //   };

  //   const requestSaga = fetchAddressListSaga(action, mockedAxios(mockedRequestOptions));

  //   requestSaga.next();
 
  //   const requestSagaResult = requestSaga.next().value;

  //   // expect(axiosMock.post).toHaveBeenCalledWith('http://localhost:4000/addresses', { geocode: addressValue });
  //   // expect(requestSagaResult.payload.action.type).toEqual(actionTypes.ADDRESS_LIST_FETCH_FAIL);
  // });
});