import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* updateProduct(action) {
  try {
    const { id, formData } = action.payload;

    const token = 'eyJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3MTIxMjg3MjQsImV4cCI6MTcxMjczMzUyNCwidXNlcm5hbWUiOiIrODQzNzMxNjI1ODYifQ.jGvvA93oLouIjAa4wzpe6Tr1yrIU50fTE-90Na0UONhq0uwm5cNs4jkZJTNwvJbk';

    const response = yield call(axios.put, `http://localhost:9999/api/admin/product/${id}/update`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      }
    });

    yield put({ type: 'UPDATE_PRODUCT_SUCCESS', payload: response.data });
  
  } catch (error) {
    yield put({ type: 'UPDATE_PRODUCT_FAILURE', error: error.message });
  }
}

function* putUpdateProduct() {
  yield takeEvery('UPDATE_PRODUCT_REQUEST', updateProduct);
}

export default putUpdateProduct;
