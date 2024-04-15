import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import productsReducer from './productsReducer';
import ordersReducer from './ordersReducer';
import customersReducer from './customersReducer';
import orderDetailReducer from './orderDetailReducer';
import productDetailReducer from './productDetailReducer';
import addProductReducer from './addProductReducer';
import categoriesReducer from './categoriesReducer';
import updateProductReducer from './updateProductReducer';
import userProfileReducer from './userProfileReducer';
import customerOrdersReducer from './customerOrderReducer';
import cartReducer from './cartReducer';
import addOrderReducer from './addOrderReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  products: productsReducer,
  orders: ordersReducer,
  customers: customersReducer,
  orderDetail: orderDetailReducer,
  productDetail: productDetailReducer,
  addProduct: addProductReducer,
  categories: categoriesReducer,
  updateProduct: updateProductReducer,
  user: userProfileReducer,
  customerOrders: customerOrdersReducer,
  cart: cartReducer,
  addOrder: addOrderReducer,
});

export default rootReducer;
