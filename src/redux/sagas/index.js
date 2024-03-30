import { all } from 'redux-saga/effects';
// import { watchAddToCart } from './cartSaga';
import newSaga from './newSaga';

export default function* rootSaga() {
  yield all([
    newSaga(),
    // watchAddToCart(),
  ]);
}
