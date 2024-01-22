import i18n from 'i18next'
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend'
import {  initReactI18next } from "react-i18next";
import ar from "../localizer/ar"
import en from "../localizer/en"
import ur from "../localizer/ur"
const resources = {
    en: {
      translation: en
    },
    ur: {
      translation: ur
    },
    ar: {
      translation: ar
    }
  };
i18n
  .use(Backend)
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    supportedLngs: ['en', 'ar', 'ur'],// if you're using a language detector, do not define the lng option
    fallbackLng: "en",
debug:true,
detection: {
    order: ['path', 'cookie', 'htmlTag'],
    caches: ['cookie'],
  },
  // react: { useSuspense: false },
 /* backend: {
    loadPath: '../localizer/${lng}.json',
  }*/
  });

  export default i18n;