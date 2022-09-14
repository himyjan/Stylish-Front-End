import { Product } from './productType';

export type Payload = {
  product?: Product[];
  quantity?: number;
  selectedSize?: string;
  selectedColorCode?: string;
};

export type Action = {
  type?: string;
  payload?: Product[];
};
