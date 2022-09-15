import { cartItemsReducer } from '../reducers/index';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { cartItems: cartItemsReducer },
});
