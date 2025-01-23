import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/modules/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/shared/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				bg: {
					primary: 'var(--bg-primary)',
					secondary: 'var(--bg-secondary)',
					accent: 'var(--bg-accent)',
					'accent-hover': 'var(--bg-accent-hover)',
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
