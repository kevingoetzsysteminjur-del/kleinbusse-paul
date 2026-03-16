"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { translations, Locale } from "./translations";

type T = typeof translations.de;

const LanguageContext = createContext<{
  locale: Locale;
  t: T;
  setLocale: (l: Locale) => void;
}>({ locale: "de", t: translations.de, setLocale: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("de");
  const t = translations[locale] as unknown as T;
  return (
    <LanguageContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
