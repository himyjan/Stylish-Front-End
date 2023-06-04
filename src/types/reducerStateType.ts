import { Product } from './productType';

export type State = {
  cartItems?: Product[];
  selectedColorCode?: string;
  selectedSize?: string;
  quantity?: number;
};
