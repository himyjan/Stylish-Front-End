import { Product } from './productType';

export type Action = {
  type?: string;
  payload?: Product[];
};
