"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import {
    SupportedLanguage,
    Translations,
    DEFAULT_LANGUAGE,
    loadTranslations,
    createTranslationFunction,
    detectLanguage,
    setLanguageCookie
} from './i18n';

interface I18nContextValue {
    language: SupportedLanguage;
    setLanguage: (language: SupportedLanguage) => void;
    t: (key: string, fallback?: string) => string;
    isLoading: boolean;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

interface I18nProviderProps {
    children: React.ReactNode;
    initialLanguage?: SupportedLanguage;
    initialTranslations?: Translations;
}

export function I18nProvider({
    children,
    initialLanguage = DEFAULT_LANGUAGE,
    initialTranslations = {}
}: I18nProviderProps) {
    const [language, setCurrentLanguage] = useState<SupportedLanguage>(initialLanguage);
    const [translations, setTranslations] = useState<Translations>(initialTranslations);
    const [isLoading, setIsLoading] = useState(false);

    // Create translation function
    const t = useCallback(
        (key: string, fallback?: string) => {
            return createTranslationFunction(translations, language)(key, fallback);
        },
        [translations, language]
    );

    // Load translations for a specific language
    const loadLanguageTranslations = useCallback(async (lang: SupportedLanguage) => {
        setIsLoading(true);
        try {
            const newTranslations = await loadTranslations(lang);
            setTranslations(newTranslations);
        } catch (error) {
            console.error('Failed to load translations:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Set language and load translations
    const setLanguage = useCallback(async (newLanguage: SupportedLanguage) => {
        if (newLanguage === language) return;

        setCurrentLanguage(newLanguage);
        setLanguageCookie(newLanguage);
        await loadLanguageTranslations(newLanguage);
    }, [language, loadLanguageTranslations]);

    // Initial setup - detect language from client-side if needed
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Only run on client side
            const detectedLanguage = detectLanguage(new URLSearchParams(window.location.search));

            if (detectedLanguage !== language) {
                setLanguage(detectedLanguage);
            } else if (Object.keys(translations).length === 0) {
                // Load translations for initial language if not provided
                loadLanguageTranslations(language);
            }
        }
    }, []); // Empty dependency array - only run once on mount

    // Listen for URL changes (query param changes)
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleUrlChange = () => {
            const detectedLanguage = detectLanguage(new URLSearchParams(window.location.search));
            if (detectedLanguage !== language) {
                setLanguage(detectedLanguage);
            }
        };

        // Listen for popstate events (back/forward button)
        window.addEventListener('popstate', handleUrlChange);

        return () => {
            window.removeEventListener('popstate', handleUrlChange);
        };
    }, [language, setLanguage]);

    const contextValue: I18nContextValue = {
        language,
        setLanguage,
        t,
        isLoading,
    };

    return (
        <I18nContext.Provider value={contextValue}>
            {children}
        </I18nContext.Provider>
    );
}

// Hook to use the i18n context
export function useT() {
    const context = useContext(I18nContext);

    if (context === undefined) {
        throw new Error('useT must be used within an I18nProvider');
    }

    return context;
}

// Convenience hook to only get the translation function
export function useTranslation() {
    const { t } = useT();
    return { t };
} 