import { all } from 'redux-saga/effects';
import newSaga from './newSaga';
import productSaga from './productSaga';
import orderSaga from './orderSaga';
import customerSaga from './customerSaga';

export default function* rootSaga() {
  yield all([
    newSaga(),
    productSaga(),
    orderSaga(),
    customerSaga(),
  ]);
}
