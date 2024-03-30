import { combineReducers } from 'redux';
// import cartReducer from './cartReducer';
import newsReducer from './newsReducer';

const rootReducer = combineReducers({
  // cart: cartReducer,
  news: newsReducer,
});

export default rootReducer;
