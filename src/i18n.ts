import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import homeEn from "./locales/en/home.json";
import homeRu from "./locales/ru/home.json";
import { useZusLang } from "./zustand/use-zus-lang";

const initialLanguage = useZusLang.getState().activeLang.value;

i18n.use(initReactI18next).init({
  resources: {
    en: {
      home: homeEn,
    },
    ru: {
      home: homeRu,
    },
  },
  lng: initialLanguage, // Язык по умолчанию
  fallbackLng: "ru",
  ns: ["home"], // список namespaces
  defaultNS: "home", // namespace по умолчанию (можно менять в компонентах)
  interpolation: {
    escapeValue: false, // React уже экранирует значения
  },
});

export default i18n;
