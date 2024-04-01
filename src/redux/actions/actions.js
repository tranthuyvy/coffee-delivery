import {
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  FETCH_NEWS, 
  SET_NEWS,
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_FAILURE,
} from './types';

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

export const fetchNews = () => ({
  type: FETCH_NEWS,
});

export const setNews = news => ({
  type: SET_NEWS,
  payload: news,
});