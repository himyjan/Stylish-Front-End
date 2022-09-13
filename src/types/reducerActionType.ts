import { product } from './productType';

export type Action = {
  type?: string;
  payload?: product[];
};
