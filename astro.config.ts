// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import path from 'path';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve:{
      alias:{
        '@components': path.resolve('/src/components') ,
        '@layouts':path.resolve('/src/layouts')
    }
  }
  },
  devToolbar:{enabled: false},
  integrations: [],

});