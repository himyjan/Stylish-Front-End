import { createContext, Dispatch } from 'react';
import { product } from '../types/productType';

type State = product[];

type ActionType = {
  type: string;
  payload: string;
};

const initialState = [] as product[] as State;

export const cartItemsContext = createContext<[State, Dispatch<ActionType>]>([
  initialState,
  () => null,
]);
