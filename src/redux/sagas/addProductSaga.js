import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addProduct(action) {
  try {
    const token = 'eyJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3MTIxMjg3MjQsImV4cCI6MTcxMjczMzUyNCwidXNlcm5hbWUiOiIrODQzNzMxNjI1ODYifQ.jGvvA93oLouIjAa4wzpe6Tr1yrIU50fTE-90Na0UONhq0uwm5cNs4jkZJTNwvJbk'
    
    const response = yield call(axios.post, 'http://localhost:9999/api/admin/product/add', action.payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      }
    });
    yield put({ type: 'ADD_PRODUCT_SUCCESS', payload: response.data });

  } catch (error) {
    yield put({ type: 'ADD_PRODUCT_FAILURE', error: error.message });
  }
}

function* postAddProduct() {
  yield takeEvery('ADD_PRODUCT_REQUEST', addProduct);
}

export default postAddProduct;