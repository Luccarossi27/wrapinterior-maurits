'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import {
  defaultLocale,
  dictionaries,
  locales,
  type Locale,
} from '@/lib/i18n/dictionaries'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (typeof dictionaries)[Locale]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'wrap-interior-locale'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null
      if (stored && locales.includes(stored)) {
        setLocaleState(stored)
        return
      }
      const browser = window.navigator.language.slice(0, 2).toLowerCase() as Locale
      if (locales.includes(browser)) setLocaleState(browser)
    } catch {
      // ignore access errors (e.g. privacy mode)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
