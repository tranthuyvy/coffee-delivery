import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import productsReducer from './productsReducer';
import ordersReducer from './ordersReducer';
import customersReducer from './customersReducer';
import orderDetailReducer from './orderDetailReducer';
import productDetailReducer from './productDetailReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  products: productsReducer,
  orders: ordersReducer,
  customers: customersReducer,
  orderDetail: orderDetailReducer,
  productDetail: productDetailReducer,
});

export default rootReducer;
