import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/**@type {import ('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["i.ibb.co", "i.imgur.com", "ibb.co"],
	},
	env: {
		API: process.env.API,
		ENCRYPTION_ENABLED: process.env.ENCRYPTION_ENABLED,
		ENCRYPTION_ALGORITHM: process.env.ENCRYPTION_ALGORITHM,
		ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
		ENCRYPTION_IV_LENGTH: process.env.ENCRYPTION_IV_LENGTH,
		SECRET_KEY: process.env.SECRET_KEY,
		ENCRYPTION_KEY1: process.env.ENCRYPTION_KEY1,
	},
};

export default withNextIntl(nextConfig);
