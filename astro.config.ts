// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site:'https://www.anhousepropiedades.cl',
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