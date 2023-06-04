import * as React from 'react';
import ProductItem from './STYLiSH-ProductItem';

export default {
  title: 'STYLiSH/Product',
  component: ProductItem,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => (
  <div style={{ width: '700px' }}>
    <ProductItem {...args} />
  </div>
);

export const Default = {
  render: Template,

  args: {
    mainImageUrl: 'https://api.appworks-school.tw/assets/201807202140/main.jpg',
    colorCodes: ['DDFFBB', 'CCCCCC'],
    title: '透肌澎澎防曬襯衫',
    price: 799,
  },
};
