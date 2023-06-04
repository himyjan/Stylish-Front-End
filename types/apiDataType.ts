export type Color = {
  code: string;
  name: string;
};

export type ApiData = {
  id: number;
  product_id: number;
  picture: string;
  story: string;
  category: string;
  title: string;
  price: number;
  main_image: string;
  colors: Color[];
  note: string;
  texture: string;
  description: string;
  wash: string;
  place: string;
  images: string[];
  sizes: string[];
};

export type ApiDataJson = {
  data: ApiData[];
  next_paging: number;
};
