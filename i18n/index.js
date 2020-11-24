import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import fr from './locales/fr.json';

const resources = {
  fr: {
    translation: fr,
  },
  en: {
    translation: en,
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: {
      default: ['en'],
    },
    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
