//from JSX to here
import { FETCH_NEWS, SET_NEWS } from './types';

export const fetchNews = () => ({
  type: FETCH_NEWS,
});

export const setNews = news => ({
  type: SET_NEWS,
  payload: news,
});
