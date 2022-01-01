// Copyright (C) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This file is part of @maxqwars/pathogen.
//
// @maxqwars/pathogen is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// @maxqwars/pathogen is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with @maxqwars/pathogen.  If not, see <http://www.gnu.org/licenses/>.

import LanguageDetector from 'i18next-browser-languagedetector'
import en from './en.json'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ru from './ru.json'

// import ja from "./ja.json";
// import fr from "./fr.json";

const resources = {
  en: { translation: en },
  ru: { translation: ru }
  // ja: { translation: ja },
  // fr: { translation: fr },
}

export const DEFAULT_LANGUAGE = 'en'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false
    }
  })

export enum SUPPORTED_LANGUAGES {
  EN = 'en',
  RU = 'ru'
}

export default i18n
