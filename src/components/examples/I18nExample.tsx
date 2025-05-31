"use client";

import { useT, useTranslation } from '@/lib/i18n-context';

/**
 * Example component demonstrating i18n usage patterns
 */
export function I18nExample() {
    // Method 1: Using the full hook with language info
    const { t, language, setLanguage, isLoading } = useT();

    // Method 2: Using just the translation function
    const { t: translate } = useTranslation();

    if (isLoading) {
        return <div>{t('common.loading')}</div>;
    }

    return (
        <div className="space-y-4 p-6 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-bold text-gray-800">
                {t('home.title')}
            </h2>

            <p className="text-gray-600">
                Current language: <strong>{language}</strong>
            </p>

            <div className="space-y-2">
                <p className="text-gray-700">
                    Navigation examples:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>{t('nav.home')}</li>
                    <li>{t('nav.menu')}</li>
                    <li>{t('nav.about')}</li>
                    <li>{t('nav.contact')}</li>
                </ul>
            </div>

            <div className="space-y-2">
                <p className="text-gray-700">
                    Common actions:
                </p>
                <div className="space-x-2">
                    <button className="px-3 py-1 bg-blue-500 text-white rounded">
                        {t('common.save')}
                    </button>
                    <button className="px-3 py-1 bg-gray-500 text-white rounded">
                        {t('common.cancel')}
                    </button>
                </div>
            </div>

            <div className="text-sm text-gray-500">
                {/* Example with fallback */}
                {t('nonexistent.key', 'This is a fallback message')}
            </div>

            <div className="text-xs text-gray-400">
                {t('footer.copyright')}
            </div>
        </div>
    );
} 