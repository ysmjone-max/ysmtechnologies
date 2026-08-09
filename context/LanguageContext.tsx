'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from './translations';

export type Language = 'en' | 'am' | 'ti' | 'it' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string, params?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Language;
    if (saved && translations[saved]) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('lang', lang);
  };

  const t = (path: string, params?: Record<string, string>): string => {
    const keys = path.split('.');
    let current: any = translations[language];
    
    for (const key of keys) {
      if (current === undefined || current[key] === undefined) {
        let fallback: any = translations['en'];
        for (const k of keys) {
           if(fallback === undefined || fallback[k] === undefined) return path;
           fallback = fallback[k];
        }
        current = fallback;
        break; // found fallback
      }
      current = current[key];
    }
    
    let text = current as string;
    
    // Replace parameters if provided
    if (params && typeof text === 'string') {
      Object.keys(params).forEach(key => {
        text = text.replace(`{${key}}`, params[key]);
      });
    }
    
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
