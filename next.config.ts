import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/**@type {import ('next').NextConfig} */
const nextConfig = {
  env: {
    API: process.env.API,
    ENCRYPTION_ENABLED: process.env.ENCRYPTION_ENABLED,
    ENCRYPTION_ALGORITHM: process.env.ENCRYPTION_ALGORITHM,
    ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
    ENCRYPTION_IV_LENGTH: process.env.ENCRYPTION_IV_LENGTH,
  },
};

export default withNextIntl(nextConfig);
