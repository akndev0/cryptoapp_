import { combineReducers } from 'redux';
import orderBookReducer from './reducers/orderBookReducer';

export default combineReducers({
  orderbook: orderBookReducer
});


