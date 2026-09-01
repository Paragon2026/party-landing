import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../locales/en';
import { fr } from '../locales/fr';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('party_landing_lang');
      if (saved === 'fr' || saved === 'en') return saved;
      if (typeof navigator !== 'undefined' && navigator.language && navigator.language.toLowerCase().startsWith('fr')) {
        return 'fr';
      }
    } catch (e) {}
    return 'en';
  });

  const setLanguage = (newLang) => {
    if (newLang === 'fr' || newLang === 'en') {
      setLang(newLang);
      try {
        localStorage.setItem('party_landing_lang', newLang);
      } catch (e) {}
    }
  };

  const toggleLanguage = () => {
    setLanguage(lang === 'en' ? 'fr' : 'en');
  };

  const loc = lang === 'fr' ? fr : en;

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, toggleLanguage, loc }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return { lang: 'en', setLanguage: () => {}, toggleLanguage: () => {}, loc: en };
  }
  return context;
};
