import { createContext, Dispatch } from 'react';
import { product } from '../types/productType';
import { Action } from '../types/reducerActionType';

const initialState: product[] =
  (JSON.parse(
    window.localStorage.getItem('cartItems') as string
  ) as product[]) || ([] as product[]);

export const cartItemsContext = createContext<[product[], Dispatch<Action>]>([
  initialState,
  () => null,
]);
