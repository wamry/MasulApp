import RNLocalize from 'react-native-localize'
import i18next from 'i18next'
import en from './locale/en.json'
import fr from './locale/fr.json'
import { initReactI18next } from 'react-i18next'

const locale = RNLocalize.getLocales()[0]
const supportedLngs = ['en', 'fr']

i18next.use(initReactI18next).init(
  {
    fallbackLng: 'en',
    supportedLngs,
    resources: { en, fr },
    returnObjects: true,
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
  },
  () => {
    i18next.changeLanguage(locale.languageCode || 'en')
  }
)

export const changeLaguage = (languageKey: 'en' | 'fr') => {
  i18next.changeLanguage(languageKey) // -> returns a Promise
}
