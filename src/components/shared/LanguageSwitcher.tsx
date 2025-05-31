"use client";

import { useRouter } from 'next/navigation';
import { useT } from '@/lib/i18n-context';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '@/lib/i18n';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const LANGUAGE_NAMES: Record<SupportedLanguage, string> = {
    en: 'English',
    fi: 'Suomeksi',
    sv: 'Svenska',
};

export function LanguageSwitcher() {
    const { language, setLanguage } = useT();
    const router = useRouter();

    const handleLanguageChange = async (newLanguage: SupportedLanguage) => {
        // Update the language in context (this will also set the cookie)
        await setLanguage(newLanguage);
    };

    return (
        <Select value={language} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-28 bg-transparent border-gray-600 text-white">
                <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#091519] border-gray-600">
                {SUPPORTED_LANGUAGES.map((lang) => (
                    <SelectItem
                        key={lang}
                        value={lang}
                        className="text-white hover:bg-white focus:bg-white data-[highlighted]:bg-white cursor-pointer transition-colors duration-200"
                    >
                        {LANGUAGE_NAMES[lang]}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
} 