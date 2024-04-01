import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_ALL_PRODUCTS_REQUEST
} from '../actions/types';

import {
  getAllProductsSuccess,
  getAllProductsFailure
} from '../actions/actions';

function* getAllProductsSaga() {
  try {
    const token = 'eyJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3MTE5NDk5MjMsImV4cCI6MTcxMjU1NDcyMywidXNlcm5hbWUiOiIrODQzNzMxNjI1ODYifQ.YQ5OhYHOmIUvgO9-6vwQopE29YCrCxh8EMmZGz8Sl98HP8F3kr3BGoEkCLXNiX52'

    const response = yield call(axios.get, 'http://localhost:9999/api/admin/product/all', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    yield put(getAllProductsSuccess(response.data));
  } catch (error) {
    yield put(getAllProductsFailure(error));
  }
}

export default function* productSaga() {
  yield takeLatest(GET_ALL_PRODUCTS_REQUEST, getAllProductsSaga);
}
