import React from 'react';
import { useTranslation } from '../context/LanguageContext';

export const LanguageSwitcher = ({ className = '' }) => {
  const { lang, setLanguage } = useTranslation();

  return (
    <div 
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: 'rgba(21, 26, 44, 0.9)',
        border: '1.5px solid var(--lp-border)',
        borderRadius: '20px',
        padding: '3px',
        gap: '2px',
        backdropFilter: 'blur(8px)'
      }}
      className={className}
    >
      <button
        onClick={() => setLanguage('fr')}
        style={{
          background: lang === 'fr' ? 'linear-gradient(135deg, #F4D068 0%, #D97724 100%)' : 'transparent',
          color: lang === 'fr' ? '#1A1008' : '#D6DCE8',
          fontWeight: '800',
          fontSize: '0.74rem',
          border: 'none',
          borderRadius: '16px',
          padding: '4px 8px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          transition: 'all 0.2s ease'
        }}
        title="Passer en Français"
      >
        <span style={{ fontSize: '13px' }}>🇫🇷</span>
        <span>FR</span>
      </button>

      <button
        onClick={() => setLanguage('en')}
        style={{
          background: lang === 'en' ? 'linear-gradient(135deg, #F4D068 0%, #D97724 100%)' : 'transparent',
          color: lang === 'en' ? '#1A1008' : '#D6DCE8',
          fontWeight: '800',
          fontSize: '0.74rem',
          border: 'none',
          borderRadius: '16px',
          padding: '4px 8px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          transition: 'all 0.2s ease'
        }}
        title="Switch to English"
      >
        <span style={{ fontSize: '13px' }}>🇬🇧</span>
        <span>EN</span>
      </button>
    </div>
  );
};
