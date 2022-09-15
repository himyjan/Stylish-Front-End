import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
  desktop: {
    name: 'desktop',
    styles: {
      width: '1280px',
      height: '800px',
    },
  },
  mobile: {
    name: 'mobile',
    styles: {
      width: '360px',
      height: '400px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
};
