import React from 'react';
import { Download } from 'lucide-react';
import { PartyLogo } from './PartyLogo';

export const MobileBottomBar = () => {
  return (
    <div className="lp-bottom-bar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <PartyLogo size={32} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#FFF8E7', lineHeight: 1.1 }}>Party App</span>
          <span style={{ fontSize: '0.68rem', color: '#F4D068' }}>Free on iOS &amp; Android</span>
        </div>
      </div>
      <a 
        href="#download"
        className="lp-cta-primary"
        style={{ padding: '9px 16px', fontSize: '0.82rem' }}
      >
        <Download size={14} />
        <span>Download App</span>
      </a>
    </div>
  );
};
