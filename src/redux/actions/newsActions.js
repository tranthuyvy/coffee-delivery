export const FETCH_NEWS = 'FETCH_NEWS';
export const SET_NEWS = 'SET_NEWS';

export const fetchNews = () => ({
  type: FETCH_NEWS,
});

export const setNews = news => ({
  type: SET_NEWS,
  payload: news,
});
