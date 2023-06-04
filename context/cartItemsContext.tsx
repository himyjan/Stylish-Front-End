'use client';

import { useState, useEffect, createContext } from 'react';
import { Product } from 'types/productType';

export const CartItemsContext = createContext<[Product[], React.Dispatch<React.SetStateAction<Product[]>>] | undefined>(undefined);

export function CartItemsProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState([] as Product[]);

  useEffect(() => {
    setCartItems(JSON.parse((window as any).localStorage.getItem('cartItems') || '[]') as Product[]);
  }, []);

  return (
    <CartItemsContext.Provider value={[cartItems, setCartItems]}>
      {children}
    </CartItemsContext.Provider>
  );
}