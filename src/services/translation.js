import { createI18n } from "vue-i18n";

// Define your translations here
const messages = {
  cro: {},
  en: {},
};

// Create an i18n instance with options
const i18n = createI18n({
  locale: "cro", // Default locale
  fallbackLocale: "en", // Fallback locale
  messages, // Locale messages
});

export default i18n;
