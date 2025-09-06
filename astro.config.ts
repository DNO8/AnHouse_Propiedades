// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";
// https://astro.build/config
export default defineConfig({
	site: "https://www.anhousepropiedades.cl",
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"@components": "/src/components",
				"@layouts": "/src/layouts",
			},
		},
	},
	devToolbar: { enabled: false },
	integrations: [sitemap()],
	env: {
		schema: {
			MAIL_HASH: envField.string({ context: "server", access: "public" }),
		},
	},
});
