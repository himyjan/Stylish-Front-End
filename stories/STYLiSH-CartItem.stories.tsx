import * as React from 'react';
import CartItem from './STYLiSH-CartItem';

export default {
  title: 'STYLiSH/CartItem',
  component: CartItem,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    color: { code: 'FFFFFF', name: '白色' },
    id: 201807242211,
    image: 'https://api.appworks-school.tw/assets/201807242211/main.jpg',
    name: '純色輕薄百搭襯衫',
    price: 799,
    qty: 1,
    size: 'XL',
    stock: 5,
    index: 0,
    trashIcon:
      'https://cdn.discordapp.com/attachments/1015532616969105419/1019838674248155156/trash.png',
  },
};
