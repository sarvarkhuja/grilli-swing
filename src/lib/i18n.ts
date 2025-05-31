export type SupportedLanguage = "en" | "fi";
export type TranslationKey = string;
export type Translations = Record<TranslationKey, string>;

// Available languages
export const SUPPORTED_LANGUAGES: SupportedLanguage[] = ["en", "fi"];
export const DEFAULT_LANGUAGE: SupportedLanguage = "en";

// Language detection utilities
export function detectLanguageFromQuery(
	searchParams: URLSearchParams
): SupportedLanguage | null {
	const lang = searchParams.get("lang");
	return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage)
		? (lang as SupportedLanguage)
		: null;
}

export function detectLanguageFromNavigator(): SupportedLanguage {
	if (typeof window === "undefined") return DEFAULT_LANGUAGE;

	const browserLang = navigator.language.split("-")[0];
	return SUPPORTED_LANGUAGES.includes(browserLang as SupportedLanguage)
		? (browserLang as SupportedLanguage)
		: DEFAULT_LANGUAGE;
}

export function detectLanguageFromCookie(): SupportedLanguage | null {
	// Client-side cookie reading only
	if (typeof window !== "undefined") {
		const match = document.cookie.match(/i18n-lang=([^;]+)/);
		const cookieLang = match?.[1];
		return SUPPORTED_LANGUAGES.includes(cookieLang as SupportedLanguage)
			? (cookieLang as SupportedLanguage)
			: null;
	}

	// Return null for server-side (will be handled in i18n-server.ts)
	return null;
}

export function setLanguageCookie(language: SupportedLanguage) {
	if (typeof window !== "undefined") {
		document.cookie = `i18n-lang=${language}; path=/; max-age=31536000; SameSite=Lax`;
	}
}

// Translation loader with dynamic imports
const translationCache = new Map<SupportedLanguage, Translations>();

export async function loadTranslations(
	language: SupportedLanguage
): Promise<Translations> {
	// Check cache first
	if (translationCache.has(language)) {
		return translationCache.get(language)!;
	}

	try {
		const translations = await import(`../../translations/${language}.json`);
		const translationData = translations.default || translations;
		translationCache.set(language, translationData);
		return translationData;
	} catch (error) {
		console.error(
			`Failed to load translations for language: ${language}`,
			error
		);

		// Fallback to English if not already trying English
		if (language !== DEFAULT_LANGUAGE) {
			return loadTranslations(DEFAULT_LANGUAGE);
		}

		// If even English fails, return empty object
		return {};
	}
}

// Translation function
export function createTranslationFunction(
	translations: Translations,
	language: SupportedLanguage
) {
	return function t(key: TranslationKey, fallback?: string): string {
		const translation = translations[key];

		if (translation) {
			return translation;
		}

		// Log missing keys in development
		if (process.env.NODE_ENV === "development") {
			console.warn(
				`Missing translation key: "${key}" for language: ${language}`
			);
		}

		// Return fallback or key as last resort
		return fallback || key;
	};
}

// Language detection with priority: query param > cookie > navigator > default
// Client-side version (server-side version is in i18n-server.ts)
export function detectLanguage(
	searchParams?: URLSearchParams
): SupportedLanguage {
	// 1. Check query parameter
	if (searchParams) {
		const queryLang = detectLanguageFromQuery(searchParams);
		if (queryLang) return queryLang;
	}

	// 2. Check cookie (client-side only)
	const cookieLang = detectLanguageFromCookie();
	if (cookieLang) return cookieLang;

	// 3. Check navigator (client-side only)
	if (typeof window !== "undefined") {
		return detectLanguageFromNavigator();
	}

	// 4. Default fallback
	return DEFAULT_LANGUAGE;
}
