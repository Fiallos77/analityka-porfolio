"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type Lang = "en" | "es"

interface LanguageContextValue {
  lang: Lang
  toggleLang: () => void
  t: (translations: Record<Lang, string>) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "es" : "en"))
  }, [])

  const t = useCallback(
    (translations: Record<Lang, string>) => translations[lang],
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLang must be used within a LanguageProvider")
  return context
}
