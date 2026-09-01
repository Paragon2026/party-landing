import React from 'react';
import { PartyLogo } from './PartyLogo';
import { Download } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = () => {
  const { loc } = useTranslation();

  return (
    <header className="lp-header">
      <div className="lp-container lp-header-inner">
        <a href="#" className="lp-logo-link">
          <PartyLogo size={38} />
          <span style={{ fontFamily: 'Cinzel', fontSize: '1.35rem', fontWeight: '900', color: '#FFF8E7', letterSpacing: '0.06em', lineHeight: 1 }}>
            PARTY
          </span>
        </a>

        <nav className="lp-nav-links">
          <a href="#scheduling" className="lp-nav-link">{loc.nav.scheduling}</a>
          <a href="#features" className="lp-nav-link">{loc.nav.features}</a>
          <a href="#gm-tools" className="lp-nav-link">{loc.nav.gameMaster}</a>
          <a href="#reviews" className="lp-nav-link">{loc.nav.reviews}</a>
          <a href="#faq" className="lp-nav-link">{loc.nav.faq}</a>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <LanguageSwitcher />
          <a 
            href="#download"
            className="lp-cta-primary"
            style={{ padding: '8px 16px', fontSize: '0.82rem' }}
          >
            <Download size={14} />
            <span>{loc.nav.download}</span>
          </a>
        </div>
      </div>
    </header>
  );
};
