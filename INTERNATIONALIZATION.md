# Internationalization (i18n) System

This project implements a lightweight, SSR-compatible internationalization system for Next.js without third-party libraries.

## Features

- 🌍 Multiple language support (English, Russian, Uzbek)
- 📦 Dynamic translation loading with code splitting
- 🔄 SSR and client-side compatibility
- 🍪 Language persistence via cookies
- 🔗 URL-based language switching (`?lang=ru`)
- 🎯 TypeScript support with auto-generated types
- ⚡ Lightweight with no external dependencies
- 🔍 Development warnings for missing translations

## File Structure

```
project-root/
├── translations/           # Translation files
│   ├── en.json            # English translations
│   ├── ru.json            # Russian translations
│   └── uz.json            # Uzbek translations
├── src/
│   ├── lib/
│   │   ├── i18n.ts        # Core i18n utilities
│   │   ├── i18n-context.tsx  # React context & hooks
│   │   └── i18n-server.ts    # Server-side utilities
│   ├── types/
│   │   └── translations.d.ts # TypeScript definitions
│   └── components/
│       └── shared/
│           └── LanguageSwitcher.tsx
└── scripts/
    └── generate-i18n-types.js  # Type generation script
```

## Quick Start

### 1. Using Translations in Components

```tsx
import { useTranslation } from "@/lib/i18n-context";

function MyComponent() {
	const { t } = useTranslation();

	return (
		<div>
			<h1>{t("nav.home")}</h1>
			<p>{t("header.promo")}</p>
			{/* With fallback */}
			<span>{t("missing.key", "Default text")}</span>
		</div>
	);
}
```

### 2. Full Hook with Language Control

```tsx
import { useT } from "@/lib/i18n-context";

function LanguageControls() {
	const { t, language, setLanguage, isLoading } = useT();

	return (
		<div>
			<p>Current: {language}</p>
			<button onClick={() => setLanguage("ru")}>Switch to Russian</button>
		</div>
	);
}
```

### 3. Server-side Usage

```tsx
// In page components or layouts
import { getServerI18n } from "@/lib/i18n-server";

export default async function Page({ searchParams }) {
	const { t, language } = await getServerI18n(searchParams);

	return (
		<div>
			<h1>{t("home.title")}</h1>
		</div>
	);
}
```

## Language Detection Priority

The system detects language in this order:

1. **URL Query Parameter**: `?lang=ru`
2. **Cookie**: `i18n-lang=ru`
3. **Browser Language**: `navigator.language`
4. **Default**: English (`en`)

## Adding a New Language

### 1. Create Translation File

Create `translations/fr.json`:

```json
{
	"nav.home": "Accueil",
	"nav.menu": "Menu",
	"nav.about": "À propos",
	"nav.contact": "Contact",
	"header.promo": "Réservez une table en ligne et obtenez 10% de réduction"
}
```

### 2. Update Language Configuration

In `src/lib/i18n.ts`, add the new language:

```ts
export type SupportedLanguage = "en" | "ru" | "uz" | "fr";
export const SUPPORTED_LANGUAGES: SupportedLanguage[] = [
	"en",
	"ru",
	"uz",
	"fr",
];
```

### 3. Update Language Switcher

In `src/components/shared/LanguageSwitcher.tsx`:

```ts
const LANGUAGE_NAMES: Record<SupportedLanguage, string> = {
	en: "English",
	ru: "Русский",
	uz: "O'zbek",
	fr: "Français", // Add this line
};
```

### 4. Regenerate Types (Optional)

```bash
node scripts/generate-i18n-types.js
```

## Managing Translations

### Translation File Format

All translation files must use flat key-value structure:

```json
{
	"section.key": "Translated text",
	"nav.home": "Home",
	"button.save": "Save",
	"message.welcome": "Welcome to our site"
}
```

### Key Naming Conventions

- Use dot notation: `section.item`
- Be descriptive: `button.save` instead of `btn1`
- Group related keys: `nav.*`, `form.*`, `error.*`

### Common Key Categories

```json
{
	"nav.*": "Navigation items",
	"button.*": "Button labels",
	"form.*": "Form labels and validation",
	"error.*": "Error messages",
	"common.*": "Reusable common text",
	"page.*": "Page-specific content",
	"aria.*": "Accessibility labels"
}
```

## TypeScript Support

### Auto-generated Types

Run the type generation script:

```bash
node scripts/generate-i18n-types.js
```

This creates `src/types/translations.d.ts` with:

```ts
export interface TranslationKeys {
	"nav.home": string;
	"nav.menu": string;
	// ... all your keys
}
```

### Type-safe Usage

```tsx
import { TranslationKey } from "@/types/translations";

function TypedComponent() {
	const { t } = useTranslation();

	// TypeScript will provide autocomplete and validation
	const title = t("nav.home"); // ✅ Valid
	const invalid = t("invalid.key"); // ❌ TypeScript error

	return <h1>{title}</h1>;
}
```

## Language Switching

### Programmatic Switching

```tsx
const { setLanguage } = useT();

// Switch language and update cookie
await setLanguage("ru");
```

### URL-based Switching

```tsx
// Add language to current URL
const switchToRussian = () => {
	const url = new URL(window.location.href);
	url.searchParams.set("lang", "ru");
	window.location.href = url.toString();
};
```

### Using the Language Switcher Component

```tsx
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";

function Header() {
	return (
		<header>
			<nav>{/* navigation items */}</nav>
			<LanguageSwitcher />
		</header>
	);
}
```

## Performance Optimizations

### Dynamic Loading

Translations are loaded dynamically using `import()`, which enables:

- Code splitting per language
- Reduced initial bundle size
- Lazy loading of unused languages

### Caching

- Translation files are cached in memory after first load
- Browser caches translation files with standard HTTP caching
- Cookie-based language persistence reduces detection overhead

### SSR Optimization

- Initial language detection happens server-side
- Translations are loaded during SSR to prevent layout shifts
- Hydration uses server-provided initial state

## Development

### Missing Translation Warnings

In development mode, the console will show warnings for missing keys:

```
Missing translation key: "undefined.key" for language: en
```

### Adding New Keys

1. Add the key to `translations/en.json`
2. Add translations to other language files
3. Optionally regenerate types: `node scripts/generate-i18n-types.js`
4. Use in components: `t('your.new.key')`

### Testing Translations

```tsx
// Test with different languages
const { setLanguage } = useT();

// Switch language in development
useEffect(() => {
	if (process.env.NODE_ENV === "development") {
		// Test language switching
		setLanguage("ru");
	}
}, []);
```

## Best Practices

### 1. Consistent Key Structure

```json
{
	"nav.home": "Home",
	"nav.about": "About",
	"nav.contact": "Contact",
	"form.email": "Email",
	"form.submit": "Submit",
	"error.required": "This field is required"
}
```

### 2. Meaningful Fallbacks

```tsx
// Good: Descriptive fallback
t("user.greeting", "Welcome back!");

// Bad: Key as fallback
t("user.greeting", "user.greeting");
```

### 3. Component-level Translation Keys

```tsx
// Good: Specific to component context
t("homepage.hero.title");
t("contactform.submit.button");

// Avoid: Too generic
t("title");
t("button");
```

### 4. Accessibility

```tsx
<button aria-label={t("aria.closeModal")}>
	<X className="h-4 w-4" />
</button>
```

## Troubleshooting

### Common Issues

1. **Translations not loading**: Check file paths and language codes
2. **SSR mismatches**: Ensure server and client use same language detection
3. **Type errors**: Regenerate types after adding new keys
4. **Missing cookies**: Check if cookies are enabled and domain is correct

### Debug Mode

Enable debug logging:

```tsx
// In development, log all translation calls
const { t } = useTranslation();
const debugT = (key: string, fallback?: string) => {
	const result = t(key, fallback);
	console.log(`i18n: ${key} -> ${result}`);
	return result;
};
```

## Migration Guide

### From Other i18n Libraries

1. Export existing translations to JSON files
2. Flatten nested objects: `{ user: { name: "Name" }}` → `{ "user.name": "Name" }`
3. Replace i18n library calls with `useTranslation()` hook
4. Update language switching logic

### Gradual Adoption

Start with the most frequently used components:

1. Header/Navigation
2. Forms
3. Error messages
4. Common buttons and labels

Then gradually expand to other components.
