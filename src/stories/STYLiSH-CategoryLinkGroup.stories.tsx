import * as React from 'react';
import CategoryLinkGroup from './STYLiSH-CategoryLinkGroup';

export default {
  title: 'STYLiSH/CategoryLinkGroup',
  component: CategoryLinkGroup,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <CategoryLinkGroup {...args} />;

export const LinkWithActive = Template.bind({});
LinkWithActive.args = {
  categories: [
    {
      name: 'women',
      displayText: '女裝',
    },
    {
      name: 'men',
      displayText: '男裝',
    },
    {
      name: 'accessories',
      displayText: '配件',
    },
  ],
  currentCategory: 'men',
};

export const LinkWithoutActive = Template.bind({});
LinkWithoutActive.args = {
  categories: [
    {
      name: 'women',
      displayText: '女裝',
    },
    {
      name: 'men',
      displayText: '男裝',
    },
    {
      name: 'accessories',
      displayText: '配件',
    },
  ],
  currentCategory: 'test',
};
