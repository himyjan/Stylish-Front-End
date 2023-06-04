import { createStore, combineReducers } from 'redux';
import { cartItemsReducer } from '../reducers/index';

const rootReducer = combineReducers({
  cartItemsReducer,
});

export const store = createStore(rootReducer);
