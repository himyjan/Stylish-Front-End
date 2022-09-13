import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { cartItemsReducer } from '../reducers/index';

export const store = configureStore({
  reducer: {
    counter: cartItemsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
