// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve:{
      alias:{
        '@components':'/src/components',
        '@layouts':'/src/layouts'
    }
  }
  },
  devToolbar:{enabled: false},
  integrations: [],
  env:{
    schema:{
      MAIL_HASH: envField.string({context:'server', access:'public'})
    }
  }

});