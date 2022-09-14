import { configureStore, createSlice } from '@reduxjs/toolkit';
import { initializer } from '../reducers/index';
import { Product } from '../types/productType';
import { Action } from './../types/reducerActionType';

export const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState: initializer,
  reducers: {
    add: (state: Product[], action: Action) => {
      function getStock(colorCode, size) {
        return action.payload.product.variants.find(
          (variant) => variant.color_code === colorCode && variant.size === size
        ).stock;
      }
      const newCartItems: Product[] = [
        ...state,
        {
          color: action.payload.product.colors.find(
            (color) => color.code === action.payload.selectedColorCode
          ),
          id: action.payload.product.id,
          image: action.payload.product.main_image,
          name: action.payload.product.title,
          price: action.payload.product.price,
          qty: action.payload.quantity,
          size: action.payload.selectedSize,
          stock: getStock(
            action.payload.selectedColorCode,
            action.payload.selectedSize
          ),
        },
      ];
      window.alert('已加入商品');
      window.localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      state = action.payload as Product[];
    },
    changeQuantity: (state: Product[], action: Action) => {
      const newCartItems = state.map((item, index) =>
        index === action.payload.itemIndex
          ? {
              ...item,
              qty: action.payload.itemQuantity,
            }
          : item
      );

      window.alert('已修改商品數量');
      window.localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      state = action.payload as Product[];
    },
    delete: (state: Product[], action: Action) => {
      const newCartItems = state.filter(
        (_, index) => index !== action.payload.itemIndex
      );
      window.alert('已刪除商品');
      window.localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      state = action.payload as Product[];
    },
    clear: (state: Product[], action: Action) => {
      state.length = 0;
    },
  },
});

export const store = configureStore({
  reducer: {
    cartItems: cartItemsSlice.reducer,
  },
});
