import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: resolve(__dirname, './src/assets'),
      components: resolve(__dirname, './src/components'),
      pages: resolve(__dirname, './src/pages'),
      router: resolve(__dirname, './src/router'),
    },
    extensions: ['.ts', '.tsx'],
  },
  server: {
    port: 5002,
  },
});
