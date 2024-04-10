import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: 'hsl(var(--color-primary) / 1)',
					dark: 'hsl(var(--color-primary-dark) / 1)'
				},
				layout: {
					DEFAULT: 'hsl(var(--layout-primary) / 1)',
					dark: 'hsl(var(--layout-primary-dark) / 1)',
					darkest: 'hsl(var(--layout-primary-darkest) / 1)',
					light: 'hsl(var(--layout-primary-light) / 1)',
					secondary: 'hsl(var(--layout-secondary) / 1)'
				}
			},
			boxShadow: {
				section: '0 4px 48px rgba(0, 0, 0, 0.5)'
			}
		}
	},
	plugins: []
};
export default config;
