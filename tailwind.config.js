/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			gridTemplateColumns: {
      
        '4': 'repeat(auto-fit, minmax(280px, 1fr))',

      }
		},
		colors: {
			black: "#232526",
			dark: "#1E1E1E",
			orange: "#FF9C06",
			white: "#fff",
		},
	},
	plugins: [],
};
