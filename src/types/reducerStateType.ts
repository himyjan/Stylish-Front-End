import { product } from './productType';

export type State = {
  cartItems?: product[];
  selectedColorCode?: string;
  selectedSize?: string;
  quantity?: number;
};
