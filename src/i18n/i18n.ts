import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// Initialize i18next
i18n
  // Load translations using http backend
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    // Debug mode in development
    debug: import.meta.env.DEV,
    // Default language
    fallbackLng: "en",
    // Namespace for translations
    ns: ["translation"],
    defaultNS: "translation",
    // Interpolation configuration
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    // Backend configuration
    backend: {
      // Path to load translations from
      loadPath: "/locales/{{lng}}/{{ns}}.json",
      crossDomain: true,
      // Add some debugging
      requestOptions: {
        cache: 'no-cache'
      }
    },
    // Language detection options
    detection: {
      // Order of detection methods
      order: ["localStorage", "navigator", "htmlTag"],
      // Cache language in localStorage
      caches: ["localStorage"],
      // Local storage key
      lookupLocalStorage: "fermi-vision-language",
      // Check for language in HTML tag
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
    },
    // Supported languages
    supportedLngs: ["en", "zh"],
    // Don't load resources here, let the backend handle it
    resources: null,
    react: {
      useSuspense: true,
    },
  });

// Helper function to change language
export const changeLanguage = (language: string) => {
  return i18n.changeLanguage(language);
};

// Helper function to get current language
export const getCurrentLanguage = () => {
  return i18n.language;
};

export default i18n;
