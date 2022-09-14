import { createStore } from 'redux';
import { cartItemsReducer } from '../reducers/index';
export const store = createStore(cartItemsReducer);
