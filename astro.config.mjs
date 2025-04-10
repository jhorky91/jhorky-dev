// @ts-check
import { defineConfig } from 'astro/config';
import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve:{
      alias: {
        '@': path.resolve('./src'),
        '@components': path.resolve('./src/components'),
        '@layouts': path.resolve('./src/layouts'),
        '@ui': path.resolve('./src/ui'),
        '@icons': path.resolve('./src/icons'),
        '@pages': path.resolve('./src/pages'),
        '@styles': path.resolve('./src/styles'),
      }
    },
    plugins: [tailwindcss()]
  }
});