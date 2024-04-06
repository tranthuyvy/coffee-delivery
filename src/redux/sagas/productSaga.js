import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_ALL_PRODUCTS_REQUEST
} from '../actions/types';

import {
  getAllProductsSuccess,
  getAllProductsFailure,
  resetUpdateProductState,
  resetAddProductState
} from '../actions/actions';

function* getAllProductsSaga() {
  try {
    const token = 'eyJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3MTIxMjg3MjQsImV4cCI6MTcxMjczMzUyNCwidXNlcm5hbWUiOiIrODQzNzMxNjI1ODYifQ.jGvvA93oLouIjAa4wzpe6Tr1yrIU50fTE-90Na0UONhq0uwm5cNs4jkZJTNwvJbk'

    const response = yield call(axios.get, 'http://localhost:9999/api/admin/product/all', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    yield put(getAllProductsSuccess(response.data));
    yield put(resetUpdateProductState());
    yield put(resetAddProductState());
  } catch (error) {
    yield put(getAllProductsFailure(error));
  }
}

export default function* productSaga() {
  yield takeLatest(GET_ALL_PRODUCTS_REQUEST, getAllProductsSaga);
}
