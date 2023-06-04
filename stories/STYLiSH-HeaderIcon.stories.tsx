import * as React from 'react';
import HeaderIcon from './STYLiSH-HeaderIcon';

export default {
  title: 'STYLiSH/HeaderIcon',
  component: HeaderIcon,
  parameters: {
    layout: 'fullscreen',
  },
};

export const IconWithNumber = {
  args: {
    icon: 'cart',
    cartItemsLength: 1,
    text: '購物車',
  },
};

export const CartIconWithoutNumber = {
  args: {
    icon: 'cart',
  },
};

export const ProfileIconWithoutNumber = {
  args: {
    icon: 'user',
  },
};
