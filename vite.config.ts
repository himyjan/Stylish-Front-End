import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    root: './',
    publicDir: 'dist',
  };
});
