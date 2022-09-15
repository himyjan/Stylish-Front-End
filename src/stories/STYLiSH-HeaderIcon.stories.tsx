import * as React from 'react';
import HeaderIcon from './STYLiSH-HeaderIcon';

export default {
  title: 'STYLiSH/HeaderIcon',
  component: HeaderIcon,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <HeaderIcon {...args} />;

export const IconWithNumber = Template.bind({});
IconWithNumber.args = {
  icon: 'cart',
  cartItemsLength: 1,
  text: '購物車',
};

export const CartIconWithoutNumber = Template.bind({});
CartIconWithoutNumber.args = {
  icon: 'cart',
};
export const ProfileIconWithoutNumber = Template.bind({});
ProfileIconWithoutNumber.args = {
  icon: 'user',
};
