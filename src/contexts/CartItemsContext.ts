import { createContext, Dispatch } from 'react';
import { product } from '../types/productType';

const initialState = {
  cartItems:
    JSON.parse(window.localStorage.getItem('cartItems') as string) ||
    ([] as product[]),
};

export const cartItemsContext = createContext<{
  cartItems: any;
  dispatch: Dispatch<any>;
}>({
  cartItems: initialState,
  dispatch: () => null,
});
