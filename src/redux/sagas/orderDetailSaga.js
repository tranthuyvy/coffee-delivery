import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_ORDER_DETAIL_REQUEST
} from '../actions/types';

import {
  getOrderDetailSuccess,
  getOrderDetailFailure
} from '../actions/actions';

function* getOrderDetailSaga(action) {
  try {
    const id = action.payload;

    const token = 'eyJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3MTE5NDk5MjMsImV4cCI6MTcxMjU1NDcyMywidXNlcm5hbWUiOiIrODQzNzMxNjI1ODYifQ.YQ5OhYHOmIUvgO9-6vwQopE29YCrCxh8EMmZGz8Sl98HP8F3kr3BGoEkCLXNiX52'

    const response = yield call(axios.get, `http://localhost:9999/api/admin/order/${id}/find`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const orderDetail = response.data.data;

    yield put(getOrderDetailSuccess(orderDetail));
  } catch (error) {
    yield put(getOrderDetailFailure(error));
  }
}

export default function* orderDetailSaga() {
  yield takeLatest(GET_ORDER_DETAIL_REQUEST, getOrderDetailSaga);
}
