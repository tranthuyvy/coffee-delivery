import { all } from 'redux-saga/effects';
import newSaga from './newSaga';
import productSaga from './productSaga';

export default function* rootSaga() {
  yield all([
    newSaga(),
    productSaga(),
    // watchAddToCart(),
  ]);
}
