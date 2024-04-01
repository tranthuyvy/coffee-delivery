import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import productsReducer from './productsReducer';
import ordersReducer from './ordersReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  products: productsReducer,
  orders: ordersReducer,
});

export default rootReducer;
