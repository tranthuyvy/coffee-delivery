import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_ALL_ORDERS_REQUEST
} from '../actions/types';

import {
  getAllOrdersSuccess,
  getAllOrdersFailure
} from '../actions/actions';

function* getAllOrdersSaga() {
  try {
    const token = 'eyJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3MTE5NDk5MjMsImV4cCI6MTcxMjU1NDcyMywidXNlcm5hbWUiOiIrODQzNzMxNjI1ODYifQ.YQ5OhYHOmIUvgO9-6vwQopE29YCrCxh8EMmZGz8Sl98HP8F3kr3BGoEkCLXNiX52'

    const response = yield call(axios.get, 'http://localhost:9999/api/admin/order/all', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    yield put(getAllOrdersSuccess(response.data));
  } catch (error) {
    yield put(getAllOrdersFailure(error));
  }
}

export default function* orderSaga() {
  yield takeLatest(GET_ALL_ORDERS_REQUEST, getAllOrdersSaga);
}
