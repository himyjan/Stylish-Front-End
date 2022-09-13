import * as React from 'react';
import { createContext, Dispatch } from 'react';
import { product } from '../types/productType';

type State = product[];

type ActionType = {
  type: string;
  payload: string;
};

const initialState = {
  cartItems: JSON.parse((window.localStorage.getItem("cartItems") as string )) ||  [] 
}

export const cartItemsContext = createContext <{cartItems: any, dispatch : Dispatch<any>}> ({
  cartItems: initialState,
  dispatch: () => null,
});
