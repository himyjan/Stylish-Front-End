import { createStore, combineReducers } from 'redux';
import { cartItemsReducer } from '../reducers/index';

const rootReducer = combineReducers({
  cartItemsReducer,
});

export const store = createStore(
  rootReducer,
  JSON.parse(localStorage.getItem('cartItems')) || []
);

console.log(store.getState());
