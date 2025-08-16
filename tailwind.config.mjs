/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
export const content = [
  "./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte,html,md,mdx,vue,svelte}",
];
export const theme = {
  extend: {
    fontFamily: {
      EBGaramond: ['EBGaramond', 'sans-serif'],
      FiraMono: ['FiraMono', 'monospace'],
    },
  },
};
export const plugins = [typography];