import {
  GET_ALL_COUPON_SUCCESS,
  GET_ALL_COUPON_FAILURE
} from '../actions/types';

const initialState = {
  coupon: [],
  error: null
};

const couponReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUPON_SUCCESS:
      return {
        ...state,
        coupon: action.payload,
        error: null
      };
    case GET_ALL_COUPON_FAILURE:
      return {
        ...state,
        coupon: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default couponReducer;
