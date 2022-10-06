import i18n from 'i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from 'react-i18next';
import XHR from 'i18next-xhr-backend';
import languageEN from 'locales/en/translate.json';
import languageES from 'locales/es/translate.json';
import languageJP from 'locales/jp/translate.json';
import languagePT from 'locales/pt/translate.json';

i18n
.use(XHR)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources: {
        US: languageEN,
        ES: languageES,
        JP: languageJP,
        PT: languagePT
    },
    /* default language when load the website in browser */
    lng: "ES",
    /* When react i18next not finding any language to as default in borwser */
    fallbackLng: "ES",
    /* debugger For Development environment */
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: ".",
    interpolation: {
        escapeValue: false,
        formatSeparator: ","
    },
    react: {
        wait: true,
        bindI18n: 'languageChanged loaded',
        bindStore: 'added removed',
        nsMode: 'default'
    }
})

export default i18n;