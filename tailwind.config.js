/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1024px",
			xl: "1440px",
		},
		fontFamily: {
			sans: ["ui-sans-serif", "Figtree", "system-ui"],
			display: ["Murmure"],
			body: ['"Figtree"'],
			handwritten: ['"Caveat"', "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
};
