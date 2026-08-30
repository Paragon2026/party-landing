import React from 'react';
import { PartyLogo } from './PartyLogo';
import { Download, Smartphone } from 'lucide-react';

export const Header = () => {
  return (
    <header className="lp-header">
      <div className="lp-container lp-header-inner">
        <a href="#" className="lp-logo-link">
          <PartyLogo size={38} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'Cinzel', fontSize: '1.25rem', fontWeight: '900', color: '#FFF8E7', letterSpacing: '0.05em', lineHeight: 1 }}>
              PARTY
            </span>
            <span style={{ fontSize: '0.62rem', color: '#F4D068', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: '800' }}>
              Tabletop RPG Match
            </span>
          </div>
        </a>

        <nav className="lp-nav-links">
          <a href="#matchmaking" className="lp-nav-link">Features</a>
          <a href="#karma" className="lp-nav-link">Anti-Ghosting</a>
          <a href="#safety" className="lp-nav-link">Safety Tools</a>
          <a href="#gm-pro" className="lp-nav-link">Dungeon Master</a>
          <a href="#reviews" className="lp-nav-link">Reviews</a>
          <a href="#faq" className="lp-nav-link">FAQ</a>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a 
            href="#download"
            className="lp-cta-primary"
            style={{ padding: '10px 20px', fontSize: '0.86rem' }}
          >
            <Download size={15} />
            <span>Download the App</span>
          </a>
        </div>
      </div>
    </header>
  );
};
