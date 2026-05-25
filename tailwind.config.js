/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				lawfirm: {
					primary: '#0f2044',
					'primary-content': '#ffffff',
					secondary: '#c9a84c',
					'secondary-content': '#ffffff',
					accent: '#d4af37',
					'accent-content': '#0f2044',
					neutral: '#1a1a2e',
					'neutral-content': '#ffffff',
					'base-100': '#ffffff',
					'base-200': '#f4f4f6',
					'base-300': '#e5e7eb',
					'base-content': '#1a1a2e',
					info: '#3abff8',
					success: '#36d399',
					warning: '#fbbd23',
					error: '#f87272',
				},
			},
		],
		defaultTheme: 'lawfirm',
	},
};
