import { createI18n } from "vue-i18n";


const messages = {
  cro: {},
  en: {},
};


const i18n = createI18n({
  locale: "cro", 
  fallbackLocale: "en", 
  messages, 
});

export default i18n;
