import { Product } from '../types/productType';

const initialState = [];

// 初始資料，為 state 的初始值，通常會在這裡把結構描述完整
export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem('cartItems')) || initialValue;

// 一個 Reducer 用來描述根據指令執行對應的動作，會回傳一個新的 state 物件，是個純函式
export const cartItemsReducer = (state, action) => {
  // 判斷指令
  switch (action.type) {
    case 'add': {
      function getStock(colorCode, size) {
        return action.payload.product.variants.find(
          (variant) => variant.color_code === colorCode && variant.size === size
        ).stock;
      }
       const qty = getQty(selectedColorCode, selectedSize);

       if (qty > 0) {
         cartItems.forEach((cartItem) => {
           if (
             cartItem.color.code === selectedColorCode &&
             cartItem.size === selectedSize
           ) {
             cartItem.qty += quantity;
           }
         });
       }

       const newCartItems =
         qty > 0
           ? cartItems
           : [
               ...cartItems,
               {
                 color: product.colors.find(
                   (color) => color.code === selectedColorCode
                 ),
                 id: product.id,
                 image: product.main_image,
                 name: product.title,
                 price: product.price,
                 qty: quantity,
                 size: selectedSize,
                 stock: getStock(selectedColorCode, selectedSize),
               },
             ];
      window.alert('已加入商品');
      window.localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      return newCartItems;
    }
    case 'changeQuantity': {
      const newCartItems = state.map((item, index) =>
        index === action.payload.itemIndex
          ? {
              ...item,
              qty: action.payload.itemQuantity,
            }
          : item
      );

      window.alert('已修改商品數量');
      return newCartItems;
    }
    case 'delete': {
      const newCartItems = state.filter(
        (_, index) => index !== action.payload.itemIndex
      );
      window.alert('已刪除商品');
      window.localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      return newCartItems;
    }
    case 'clear': {
      const newCartItems = [];
      window.localStorage.setItem('cartItems', JSON.stringify(newCartItems));
      return newCartItems;
    }
    default: {
      return state;
    }
  }
};

export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  item,
});

export const decrementItemQuantity = (item) => ({
  type: 'DECREMENT_QUANTITY',
  item,
});

export const removeFromCart = (item) => ({
  type: 'REMOVE_FROM_CART',
  item,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});
