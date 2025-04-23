const config = {
	plugins: {
		"postcss-import": {},
		"@tailwindcss/nesting": {},
		"@tailwindcss/postcss": {
			tailwindConfig: "./tailwind.config.js",
		},
		autoprefixer: {},
	},
};

// Works for both ESM and CJS
module.exports = config;
export default config;
