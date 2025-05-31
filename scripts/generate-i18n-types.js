#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

/**
 * Script to generate TypeScript types from translation JSON files
 * Run: node scripts/generate-i18n-types.js
 */

const TRANSLATIONS_DIR = path.join(__dirname, "..", "translations");
const OUTPUT_FILE = path.join(
	__dirname,
	"..",
	"src",
	"types",
	"translations.d.ts"
);

function generateTypes() {
	try {
		// Read the English translation file (base for keys)
		const enFilePath = path.join(TRANSLATIONS_DIR, "en.json");

		if (!fs.existsSync(enFilePath)) {
			console.error("English translation file not found at:", enFilePath);
			process.exit(1);
		}

		const translations = JSON.parse(fs.readFileSync(enFilePath, "utf8"));
		const keys = Object.keys(translations);

		// Generate TypeScript interface
		const interfaceKeys = keys.map((key) => `  '${key}': string;`).join("\n");

		const typeDefinition = `// Auto-generated translation key types
// This file should be regenerated when translation keys change

export interface TranslationKeys {
${interfaceKeys}
}

export type TranslationKey = keyof TranslationKeys;

// Extend the global namespace for better IDE support
declare global {
  namespace I18n {
    interface TranslationKeys extends TranslationKeys {}
  }
}
`;

		// Ensure the output directory exists
		const outputDir = path.dirname(OUTPUT_FILE);
		if (!fs.existsSync(outputDir)) {
			fs.mkdirSync(outputDir, { recursive: true });
		}

		// Write the type definition file
		fs.writeFileSync(OUTPUT_FILE, typeDefinition);

		console.log(
			`✅ Generated TypeScript types for ${keys.length} translation keys`
		);
		console.log(`📁 Output: ${OUTPUT_FILE}`);
	} catch (error) {
		console.error("❌ Error generating types:", error);
		process.exit(1);
	}
}

generateTypes();
