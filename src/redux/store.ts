import { configureStore, createSlice } from '@reduxjs/toolkit';
import { initializer } from '../reducers/index';
import { Product } from '../types/productType';
import { Action } from './../types/reducerActionType';

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState: initializer,
  reducers: {
    ADD_TO_CART: (state: Product[], action: Action) => {
      state = action.payload as Product[];
    },
    REMOVE_FROM_CART: (state: Product[], action: Action) => {
      state = action.payload as Product[];
    },
    DECREMENT_QUANTITY: (state: Product[], action: Action) => {
      state = action.payload as Product[];
    },
    CLEAR_CART: (state: Product[], action: Action) => {
      state.length = 0;
    },
  },
});

export const store = configureStore({
  reducer: {
    cartItems: cartItemsSlice.reducer,
  },
});
