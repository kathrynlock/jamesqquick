const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			aspectRation: {
				thumbnail: '1.5'
			},
			fontFamily: {
				sans: ['Cabin', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
