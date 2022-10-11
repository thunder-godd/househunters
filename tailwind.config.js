/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			black: "#232526",
			dark: "#1E1E1E",
			orange: "#FF9C06",
			white: "#fff",
		},
	},
	plugins: [],
};
