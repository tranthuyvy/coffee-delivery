import {
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  FETCH_NEWS, 
  SET_NEWS,
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_FAILURE,
  GET_ALL_CUSTOMERS_REQUEST,
  GET_ALL_CUSTOMERS_SUCCESS,
  GET_ALL_CUSTOMERS_FAILURE,
  GET_ORDER_DETAIL_REQUEST,
  GET_ORDER_DETAIL_SUCCESS,
  GET_ORDER_DETAIL_FAILURE,
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ALL_CATEGORIES_FAILURE,
} from './types';

export const getAllCategoriesRequest = () => ({
  type: GET_ALL_CATEGORIES_REQUEST
});

export const getAllCategoriesSuccess = (categories) => ({
  type: GET_ALL_CATEGORIES_SUCCESS,
  payload: categories
});

export const getAllCategoriesFailure = (error) => ({
  type: GET_ALL_CATEGORIES_FAILURE,
  payload: error
});

export const getAllCustomersRequest = () => ({
  type: GET_ALL_CUSTOMERS_REQUEST
});

export const getAllCustomersSuccess = (customers) => ({
  type: GET_ALL_CUSTOMERS_SUCCESS,
  payload: customers
});

export const getAllCustomersFailure = (error) => ({
  type: GET_ALL_CUSTOMERS_FAILURE,
  payload: error
});

export const getAllOrdersRequest = () => ({
  type: GET_ALL_ORDERS_REQUEST
});

export const getAllOrdersSuccess = (orders) => ({
  type: GET_ALL_ORDERS_SUCCESS,
  payload: orders
});

export const getAllOrdersFailure = (error) => ({
  type: GET_ALL_ORDERS_FAILURE,
  payload: error
});

export const getOrderDetailRequest = (id) => ({
  type: GET_ORDER_DETAIL_REQUEST,
  payload: id
});

export const getOrderDetailSuccess = (orderDetail) => ({
  type: GET_ORDER_DETAIL_SUCCESS,
  payload: orderDetail
});

export const getOrderDetailFailure = (error) => ({
  type: GET_ORDER_DETAIL_FAILURE,
  payload: error
});

export const getAllProductsRequest = () => ({
  type: GET_ALL_PRODUCTS_REQUEST
});

export const getAllProductsSuccess = (products) => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  payload: products
});

export const getAllProductsFailure = (error) => ({
  type: GET_ALL_PRODUCTS_FAILURE,
  payload: error
});

export const addProductRequest = (formData) => ({
  type: ADD_PRODUCT_REQUEST,
  payload: formData,
});

export const addProductSuccess = (data) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: data,
});

export const addProductFailure = (error) => ({
  type: ADD_PRODUCT_FAILURE,
  error,
});

export const getProductDetailRequest = (id) => ({
  type: GET_PRODUCT_DETAIL_REQUEST,
  payload: id
});

export const getProductDetailSuccess = (productDetail) => ({
  type: GET_PRODUCT_DETAIL_SUCCESS,
  payload: productDetail
});

export const getProductDetailFailure = (error) => ({
  type: GET_PRODUCT_DETAIL_FAILURE,
  payload: error
});

export const fetchNews = () => ({
  type: FETCH_NEWS,
});

export const setNews = news => ({
  type: SET_NEWS,
  payload: news,
});