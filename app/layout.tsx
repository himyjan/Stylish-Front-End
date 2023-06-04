'use client';

import '@/styles/globals.css';
import React from 'react';
import Script from "next/script";
import GlobalNav from './GlobalNav';
import GlobalStyle from './../ui/globalstyles';
import { CartItemsProvider } from '../context/cartItemsContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartItemsProvider>
      <html>
        <head>
          <title>STYLiSH</title>
          <Script src="https://js.tappaysdk.com/tpdirect/v5.13.1" />
        </head>
        <body className="">
          <div className="">
            <div className="">
              <GlobalNav />
            </div>

            <div className="">
              <div className="">{children}</div>
            </div>

            <div className=""></div>
          </div>
        </body>
      </html>
      <GlobalStyle />
    </CartItemsProvider>
  );
}
