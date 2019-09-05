import { fetchAddressList } from 'api/geocoder';
import { put, takeLatest, all } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';

function* fetchAddressListSaga(action) {
  try {
    const { data } = yield fetchAddressList(action.addressValue);
    yield put({ type: actionTypes.ADDRESS_LIST_FETCH_SUCCESS, addressList: data });
  } catch(e) {
    yield put({ type: actionTypes.ADDRESS_LIST_FETCH_FAIL });
  }
}

function* actionWatcher() {
    yield takeLatest(actionTypes.ADDRESS_LIST_FETCH, fetchAddressListSaga);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}