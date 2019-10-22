// import { fetchAddressList } from 'api/geocoder';
// import { put, takeLatest, all } from 'redux-saga/effects';
// import * as actionTypes from './actionTypes';
// import {
//   fetchAddressListSuccess, 
//   fetchAddressListFail,
// } from './actionCreators';

// export function* fetchAddressListSaga(action) {
//   try {
//     const { data } = yield fetchAddressList(action.addressValue);
//     yield put(fetchAddressListSuccess(data));
//   } catch(e) {
//     yield put(fetchAddressListFail());
//   }
// }

// export function* actionWatcher() {
//     yield takeLatest(actionTypes.ADDRESS_LIST_FETCH, fetchAddressListSaga);
// }

// export default function* rootSaga() {
//   yield all([
//     actionWatcher(),
//   ]);
// }

// TODO: remove saga