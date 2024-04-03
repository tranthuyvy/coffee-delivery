import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_ALL_CATEGORIES_REQUEST } from '../actions/types';

import { getAllCategoriesSuccess, getAllCategoriesFailure } from '../actions/actions';

function* getAllCategoriesSaga() {
  try {
    const token = 'eyJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3MTIxMjg3MjQsImV4cCI6MTcxMjczMzUyNCwidXNlcm5hbWUiOiIrODQzNzMxNjI1ODYifQ.jGvvA93oLouIjAa4wzpe6Tr1yrIU50fTE-90Na0UONhq0uwm5cNs4jkZJTNwvJbk'

    const response = yield call(axios.get, 'http://localhost:9999/api/admin/category/all', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    yield put(getAllCategoriesSuccess(response.data));
  } catch (error) {
    yield put(getAllCategoriesFailure(error));
  }
}

export default function* categoriesSaga() {
  yield takeLatest(GET_ALL_CATEGORIES_REQUEST, getAllCategoriesSaga);
}
