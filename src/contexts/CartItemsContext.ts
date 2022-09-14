import { createContext, Dispatch } from 'react';
import { product } from '../types/productType';
import { State } from '../types/reducerStateType';
import { Action } from '../types/reducerActionType';

const cartItems =
  (JSON.parse(
    window.localStorage.getItem('cartItems') as string
  ) as product[]) || ([] as product[]);

const initialState: State = {
  cartItems: cartItems,
};

export const cartItemsContext = createContext<[State, Dispatch<Action>]>([
  initialState,
  () => null,
]);
