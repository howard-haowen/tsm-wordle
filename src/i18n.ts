import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { CONFIG } from './constants/config'
import HttpApi from 'i18next-http-backend'

i18next
  .use(HttpApi)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
    },
    lng: CONFIG.localizationCode,
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false,
    },
    saveMissing: true,
  })

export default i18next
