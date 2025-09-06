/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
export default {
	content: [
		"./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte,html,md,mdx,vue,svelte}",
	],
	theme: {
		extend: {
			fontFamily: {
				EBGaramond: ["EBGaramond", "sans-serif"],
				FiraMono: ["FiraMono", "monospace"],
			},
		},
	},
	plugins: [typography],
};
