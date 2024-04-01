import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import productsReducer from '../reducers/productsReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  products: productsReducer,
});

export default rootReducer;
