// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
	site: 'https://validyong.github.io',
	base: 'depress',
	i18n: {
		locales: ['en', 'ja'],
		defaultLocale: 'en',
		// routing: 

	},
	integrations: [
		markdoc(),
		starlight({
			title: 'depress',
			favicon: '/gino.svg',
			logo: {
				src: '/public/gino.svg',
				alt: 'Gino',
			},
			social: {
				// github: 'https://github.com/withastro/starlight',
			},
			// sidebar: [
			// 	{
			// 		label: 'Guides',
			// 		items: [
			// 			// Each item here is one entry in the navigation menu.
			// 			{ label: 'Example Guide', slug: 'guides/example' },
			// 		],
			// 	},
			// 	// {
			// 	// 	label: 'bot',
			// 	// 	items: [
			// 	// 		{ label: 'Slash Commands', slug:  },
			// 	// 	],
			// 	// },
			// 	{
			// 		label: 'Reference',
			// 		autogenerate: { directory: 'reference' },
			// 	},
			// ],
			components: {
				// Header: './src/components/Header.astro',
			},
			// locales: {
			// 	en: {
			// 		label: 'English',
			// 	},
			// 	ja: {
			// 		label: '日本語',
			// 		lang: 'ja',
			// 	},
			// },
		}),
	],
});
