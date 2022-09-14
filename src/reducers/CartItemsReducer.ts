import { State } from '../types/reducerStateType';
import { Action } from '../types/reducerActionType';

const initialState = [];

// 初始資料，為 state 的初始值，通常會在這裡把結構描述完整
export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem('cartItems')) || initialValue;

// 一個 Reducer 用來描述根據指令執行對應的動作，會回傳一個新的 state 物件，是個純函式
export const cartItemsReducer = (state: State, action: Action) => {
  // 判斷指令
  switch (action.type) {
    case 'ADD_TO_CART': {
      return state;
    }
    // .find((item) => item.name === action.item.name)
    // ? state.map((item) =>
    //     item.name === action.item.name
    //       ? {
    //           ...item,
    //           quantity: item.quantity + 1,
    //         }
    //       : item
    //   )
    // : [...state, { ...action.item, quantity: 1 }];

    case 'REMOVE_FROM_CART': {
      return state;
    }
    // .filter((item) => item.name !== action.item.name);

    case 'DECREMENT_QUANTITY': {
      return state;
    }
    // .find((item) => item.name === action.item.name)?.quantity ===
    // 1
    // ? state.filter((item) => item.name !== action.item.name)
    // : state.map((item) =>
    //     item.name === action.item.name
    //       ? {
    //           ...item,
    //           quantity: item.quantity - 1,
    //         }
    //       : item
    //   );

    case 'CLEAR_CART':
      state.cartItems = [];
      return state;

    case 'NEW_STATE': {
      console.log(action.payload);
      state.cartItems = action.payload;
      return state;
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
