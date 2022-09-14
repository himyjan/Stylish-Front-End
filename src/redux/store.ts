import { configureStore, createSlice } from '@reduxjs/toolkit';
import { cartItemsReducer, initializer } from '../reducers/index';
import { product } from '../types/productType';
import { Action } from './../types/reducerActionType';

export const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
  },
});

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState: initializer,
  reducers: {
    ADD_TO_CART: (state: product[], action: Action) => {
      state = action.payload as product[];
    },
    REMOVE_FROM_CART: (state: product[], action: Action) => {
      state = action.payload as product[];
    },
    DECREMENT_QUANTITY: (state: product[], action: Action) => {
      state = action.payload as product[];
    },
    CLEAR_CART: (state: product[], action: Action) => {
      state.length = 0;
    },
  },
});
