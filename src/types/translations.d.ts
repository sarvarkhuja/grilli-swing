// Auto-generated translation key types
// This file should be regenerated when translation keys change

export interface TranslationKeys {
  'nav.home': string;
  'nav.menu': string;
  'nav.about': string;
  'nav.contact': string;
  'header.promo': string;
  'social.facebook': string;
  'social.instagram': string;
  'button.toggleMenu': string;
  'common.loading': string;
  'common.error': string;
  'common.save': string;
  'common.cancel': string;
  'home.title': string;
  'footer.copyright': string;
  'aria.toggleMenu': string;
}

export type TranslationKey = keyof TranslationKeys;

// Extend the global namespace for better IDE support
declare global {
  namespace I18n {
    type TranslationKeys = TranslationKeys
  }
}
