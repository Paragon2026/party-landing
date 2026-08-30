import React from 'react';
import { PartyLogo } from './PartyLogo';
import { Download } from 'lucide-react';

export const Header = () => {
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
          <a href="#features" className="lp-nav-link">Features</a>
          <a href="#experience" className="lp-nav-link">Safety &amp; Karma</a>
          <a href="#gm-tools" className="lp-nav-link">Game Master</a>
          <a href="#reviews" className="lp-nav-link">Reviews</a>
          <a href="#faq" className="lp-nav-link">FAQ</a>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a 
            href="#download"
            className="lp-cta-primary"
            style={{ padding: '9px 18px', fontSize: '0.84rem' }}
          >
            <Download size={14} />
            <span>Download</span>
          </a>
        </div>
      </div>
    </header>
  );
};
