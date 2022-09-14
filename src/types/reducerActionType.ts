type Stock = {
  colorCode: string;
  size: string;
};

type Payload = {
  product?;
  quantity?: number;
  selectedSize?: string;
  selectedColorCode?: string;
  itemIndex?: number;
  itemQuantity?: number;
};

export type Action = {
  type?: string;
  payload?: Payload;
};
