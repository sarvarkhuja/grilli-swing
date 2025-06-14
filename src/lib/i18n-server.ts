import { headers, cookies } from "next/headers";
import {
	SupportedLanguage,
	DEFAULT_LANGUAGE,
	detectLanguageFromQuery,
	loadTranslations,
	createTranslationFunction,
	SUPPORTED_LANGUAGES,
} from "./i18n";

/**
 * Server-side cookie detection
 */
export async function detectLanguageFromServerCookie(): Promise<SupportedLanguage | null> {
	try {
		const cookieStore = cookies();
		const cookieLang = (await cookieStore).get("i18n-lang")?.value;
		return SUPPORTED_LANGUAGES.includes(cookieLang as SupportedLanguage)
			? (cookieLang as SupportedLanguage)
			: null;
	} catch {
		return null;
	}
}

/**
 * Server-side language detection with priority: query param > cookie > default
 */
export async function detectServerLanguage(
	searchParams?: URLSearchParams
): Promise<SupportedLanguage> {
	// 1. Check query parameter
	if (searchParams) {
		const queryLang = detectLanguageFromQuery(searchParams);
		if (queryLang) return queryLang;
	}

	// 2. Check cookie
	const cookieLang = await detectLanguageFromServerCookie();
	if (cookieLang) return cookieLang;

	// 3. Default fallback
	return DEFAULT_LANGUAGE;
}

/**
 * Server-side language detection using request headers
 */
export async function getServerLanguage(searchParams?: {
	[key: string]: string | string[] | undefined;
}): Promise<SupportedLanguage> {
	try {
		// Convert searchParams to URLSearchParams if provided
		let urlSearchParams: URLSearchParams | undefined;
		if (searchParams) {
			urlSearchParams = new URLSearchParams();
			Object.entries(searchParams).forEach(([key, value]) => {
				if (typeof value === "string") {
					urlSearchParams!.set(key, value);
				} else if (Array.isArray(value)) {
					urlSearchParams!.set(key, value[0] || "");
				}
			});
		}

		return await detectServerLanguage(urlSearchParams);
	} catch (error) {
		console.error("Error detecting server language:", error);
		return DEFAULT_LANGUAGE;
	}
}

/**
 * Server-side translation loader
 */
export async function getServerTranslations(language: SupportedLanguage) {
	try {
		return await loadTranslations(language);
	} catch (error) {
		console.error("Error loading server translations:", error);
		return {};
	}
}

/**
 * Complete server-side i18n setup - returns language, translations, and t function
 */
export async function getServerI18n(searchParams?: {
	[key: string]: string | string[] | undefined;
}) {
	const language = await getServerLanguage(searchParams);
	const translations = await getServerTranslations(language);
	const t = createTranslationFunction(translations, language);

	return {
		language,
		translations,
		t,
	};
}

/**
 * Get Accept-Language header from request (fallback for more sophisticated detection)
 */
export async function getAcceptLanguageHeader(): Promise<string | null> {
	try {
		const headersList = await headers();
		return headersList.get("accept-language");
	} catch {
		return null;
	}
}
