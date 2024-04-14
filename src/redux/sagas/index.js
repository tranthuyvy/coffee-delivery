import { all } from 'redux-saga/effects';
import newSaga from './newSaga';
import productSaga from './productSaga';
import orderSaga from './orderSaga';
import customerSaga from './customerSaga';
import orderDetailSaga from './orderDetailSaga';
import productDetailSaga from './productDetailSaga';
import postAddProduct from './addProductSaga';
import categoriesSaga from './categoriesSaga';
import putUpdateProduct from './updateProductSaga';
import userProfileSaga from './userProfileSaga';
import customerOrdersSaga from './customerOrdersSaga';

export default function* rootSaga() {
  yield all([
    newSaga(),
    productSaga(),
    orderSaga(),
    customerSaga(),
    orderDetailSaga(),
    productDetailSaga(),
    postAddProduct(),
    categoriesSaga(),
    putUpdateProduct(),
    userProfileSaga(),
    customerOrdersSaga(),
  ]);
}
