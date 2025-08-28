// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  devToolbar:{enabled: false},
  integrations: [],
  env:{
    schema:{
       MAIL_API:envField.string({context:'server',access:'public'}),
       MAIL_API_KEY:envField.string({context:'server', access:'secret'})
    }
  }
});