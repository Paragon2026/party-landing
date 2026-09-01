import React from 'react';
import { Download } from 'lucide-react';
import { PartyLogo } from './PartyLogo';
import { useTranslation } from '../context/LanguageContext';

export const MobileBottomBar = () => {
  const { loc } = useTranslation();

  return (
    <div className="lp-bottom-bar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <PartyLogo size={32} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#FFF8E7', lineHeight: 1.1 }}>PARTY</span>
          <span style={{ fontSize: '0.68rem', color: '#F4D068' }}>{loc.mobileBar.freeOnStores}</span>
        </div>
      </div>
      <a 
        href="#download"
        className="lp-cta-primary"
        style={{ padding: '9px 16px', fontSize: '0.82rem' }}
      >
        <Download size={14} />
        <span>{loc.mobileBar.download}</span>
      </a>
    </div>
  );
};
