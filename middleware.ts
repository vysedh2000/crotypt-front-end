import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

export default createMiddleware({
	locales: ["en", "de", "nl"],

	defaultLocale: "en",
});

export async function middleware(request: NextRequest) {
	// Step 1: Use the incoming request (example)
	const defaultLocale =
		(request.headers.get("x-your-custom-locale") as "en" | "de" | "nl") || "en";

	// Step 2: Create and call the next-intl middleware (example)
	const handleI18nRouting = createMiddleware({
		locales: ["en", "de", "nl"],
		defaultLocale,
	});
	const response = handleI18nRouting(request);

	// Step 3: Alter the response (example)
	response.headers.set("x-your-custom-locale", defaultLocale);

	return response;
}

export const config = {
	matcher: ["/", "/(de|en|nl)/:path*"],
};
