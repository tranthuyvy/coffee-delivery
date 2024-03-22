import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_NEWS, setNews } from '../actions/newsActions';
import { news } from '../../apis/mock-data';

function* fetchNewsSaga() {
  try {
    yield put(setNews(news));
  } catch (error) {
    console.error('fetchNewsSaga error:', error);
  }
}

export function* watchFetchNews() {
  yield takeLatest(FETCH_NEWS, fetchNewsSaga);
}
