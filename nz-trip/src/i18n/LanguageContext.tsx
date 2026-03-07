'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { en } from './translations/en';
import { zh } from './translations/zh';

type Language = 'en' | 'zh';
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  t: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  t: en,
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const stored = localStorage.getItem('nz-trip-lang') as Language | null;
    if (stored === 'en' || stored === 'zh') {
      setLanguage(stored);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === 'en' ? 'zh' : 'en';
      localStorage.setItem('nz-trip-lang', next);
      return next;
    });
  };

  const t = language === 'en' ? en : (zh as unknown as Translations);

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
