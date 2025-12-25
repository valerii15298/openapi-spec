// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import starlightLlmsTxt from 'starlight-llms-txt';

// https://astro.build/config
export default defineConfig({
	site: "https://valerii15298.github.io",
	base: "/openapi-spec",
	integrations: [
		starlight({
			title: 'OpenAPI Specification',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/valerii15298/openapi-spec' }],
			customCss: ["/src/styles.css"],
			pagefind: false,
			components: {
				Search: './src/components/Search.astro',
			},
			plugins: [starlightLinksValidator({errorOnInvalidHashes: false}), starlightLlmsTxt()]
		}),
	],
});
