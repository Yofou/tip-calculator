const plugin = require('tailwindcss/plugin');

/**@type {import("tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
	content: ['./src/**/*.{svelte,html}'],
	theme: {
		colors: {
			blue: {
				300: '#C5E4E7',
				600: '#26C2AE',
				900: '#00474B'
			},
			white: {
				full: '#FFFFFF',
				300: '#F3F9FA',
				600: '#9EBBBD',
				900: '#5E7A7D'
			},
			red: '#E17457'
		},
		fontFamily: {
			space: ["'Space Mono'", 'monospace']
		},
		fontSize: {
			sm: '0.8125rem', // 13px
			base: '1rem', // 16px
			md: '1.25rem', // 20px
			lg: '1.5rem', // 24px
			xl: '3rem' // 48p
		}
	},
	plugins: [
		plugin(({ addComponents, theme }) => {
			addComponents({
				'.text-label': {
					fontFamily: theme('fontFamily.space'),
					fontWeight: theme('fontWeight.bold'),
					fontSize: theme('fontSize.base')
				},
				'.text-inputs': {
					fontFamily: theme('fontFamily.space'),
					fontWeight: theme('fontWeight.bold'),
					fontSize: theme('fontSize.lg')
				},
				'.text-money': {
					fontFamily: theme('fontFamily.space'),
					fontWeight: theme('fontWeight.bold'),
					fontSize: theme('fontSize.xl'),
					letterSpacing: '-1px'
				},
				'.text-under': {
					fontFamily: theme('fontFamily.space'),
					fontWeight: theme('fontWeight.bold'),
					fontSize: theme('fontSize.sm')
				},
				'.text-reset': {
					fontFamily: theme('fontFamily.space'),
					fontWeight: theme('fontWeight.bold'),
					fontSize: theme('fontSize.md')
				}
			});
		})
	]
};
