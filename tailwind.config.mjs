/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export const content = [
  "./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte,html,md,mdx,vue,svelte}",
];
export const theme = {
  extend: {
    fontFamily: {
      aboreto: ['Aboreto', 'sans-serif'],
    },
  },
};
export const plugins = [typography];