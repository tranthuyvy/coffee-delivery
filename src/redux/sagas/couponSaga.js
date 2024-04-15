import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_ALL_COUPON_REQUEST } from '../actions/types';

import { getAllCouponSuccess, getAllCouponFailure } from '../actions/actions';

function* getAllCouponSaga() {
  try {
    const token = localStorage.getItem('token');

    const response = yield call(axios.get, 'http://localhost:9999/api/coupon/all', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    yield put(getAllCouponSuccess(response.data));
  } catch (error) {
    yield put(getAllCouponFailure(error));
  }
}

export default function* couponsSaga() {
  yield takeLatest(GET_ALL_COUPON_REQUEST, getAllCouponSaga);
}
