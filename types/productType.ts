export type Color = {
  code: string;
  name: string;
};

export type Product = {
  id?: number;
  product_id?: number;
  picture?: string;
  story?: string;
  category?: string;
  title?: string;
  price?: number;
  main_image?: string;
  colors?: Color[];
  color?: Color;
  note?: string;
  texture?: string;
  description?: string;
  wash?: string;
  place?: string;
  images?: string[];
  sizes?: string[];
  size?: string;
  qty?: number;
  stock?: number;
  name?: string;
  image?: string;
};
