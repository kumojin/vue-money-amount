/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue2 from '@vitejs/plugin-vue2';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue2()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '^vue$': 'vue/dist/vue.common.js',
    },
  },
  test: {
    environment: 'happy-dom',
    include: ['**/src/**/*.spec.[jt]s?(x)', '**/src/__tests__/*.[jt]s?(x)'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/coverage/**',
      '**/logs/**',
    ],
    globals: true,
  },
});
