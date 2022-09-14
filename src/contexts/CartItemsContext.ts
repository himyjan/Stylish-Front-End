import { createContext, Dispatch } from 'react';
import { Product } from '../types/productType';
import { Action } from '../types/reducerActionType';

const initialState: Product[] =
  (JSON.parse(
    window.localStorage.getItem('cartItems') as string
  ) as Product[]) || ([] as Product[]);

export const cartItemsContext = createContext<[Product[], Dispatch<Action>]>([
  initialState,
  () => null,
]);
