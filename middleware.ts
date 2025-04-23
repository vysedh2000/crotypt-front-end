import createMiddleware from "next-intl/middleware";

export default createMiddleware({
	locales: ["en", "de", "nl"],

	defaultLocale: "en",
});

export const config = {
	matcher: ["/(de|en|nl)/:path*", "/"],
};
