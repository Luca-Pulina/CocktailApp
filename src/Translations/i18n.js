import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import { TRANSLATIONS_EN } from "./en/translation"
import { TRANSLATIONS_IT } from "./it/translations"

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: TRANSLATIONS_EN,
			},
			it: {
				translation: TRANSLATIONS_IT,
			},
		},
	})

i18n.changeLanguage("en")
