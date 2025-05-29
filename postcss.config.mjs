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

export default config;
