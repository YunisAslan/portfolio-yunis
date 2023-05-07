import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import az from "./locales/az/translation.json";
import navAz from "./locales/az/nav.json";
import navEn from "./locales/en/nav.json";


export const LANG_LOCAL_STORAGE_KEY = "selectedLanguage";
const selectedLanguage = localStorage.getItem(LANG_LOCAL_STORAGE_KEY);

i18n.use(initReactI18next).init({
  lng: selectedLanguage || "en",
  debug: false,
  resources: {
    en: {
      translation: en,
      nav: navEn,
    },
    az: {
      translation: az,
      nav: navAz,
    },
  },
});

export default i18n;
