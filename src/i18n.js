import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./assets/locales/en/translation.json";
import az from "./assets/locales/az/translation.json";
import navAz from "./assets/locales/az/layout/nav.json";
import navEn from "./assets/locales/en/layout/nav.json";

i18n.use(initReactI18next).init({
  lng: "en",
  debug: true,
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
