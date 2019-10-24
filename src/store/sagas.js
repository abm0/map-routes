import { put, call, takeEvery, all } from 'redux-saga/effects';
import { 
  formatGeocodeResponse,
  formatReverseGeocodeResponse,
} from 'helpers';

import {
  fetchAddressListSuccess, 
  fetchAddressListFail,
  updatePointPositionSuccess,
  updatePointPositionFail,
} from 'store/actionCreators';

import * as actionTypes from 'store/actionTypes';

function* updatePointPosition(action) {
  const {
    id,
    geocodeFn,
    coordinates,
  } = action;

  try {
    const response = yield call(() => geocodeFn(coordinates));
    const geoData = formatReverseGeocodeResponse(response, coordinates);
    yield put(updatePointPositionSuccess(geoData, id));
  } catch(e) {
    yield put(updatePointPositionFail());
  }
};

function* fetchAddressList(action) {
  const {
    value,
    geocodeFn,
  } = action;

  try {
    const response = yield call(() => geocodeFn(value));
    const geoData = formatGeocodeResponse(response);
    yield put(fetchAddressListSuccess(geoData));
  } catch(e) {
    yield put(fetchAddressListFail());
  }
};

function* watchAddressListFetch() {
  yield takeEvery(actionTypes.ADDRESS_LIST_FETCH, fetchAddressList);
};

function* watchPointPositionUpdate() {
  yield takeEvery(actionTypes.POINT_POSITION_CHANGE, updatePointPosition)
};

export default function* rootSaga() {
  yield all([
    watchAddressListFetch(),
    watchPointPositionUpdate(),
  ]);
};
