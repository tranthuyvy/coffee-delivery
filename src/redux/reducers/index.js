import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import productsReducer from './productsReducer';
import ordersReducer from './ordersReducer';
import customersReducer from './customersReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  products: productsReducer,
  orders: ordersReducer,
  customers: customersReducer,
});

export default rootReducer;
