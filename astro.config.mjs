// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/valerii15298/openapi-spec' }],
			customCss: ["/src/styles.css"],
			pagefind: false,
			components: {
				Search: './src/components/Search.astro',
			},
		}),
	],
});
