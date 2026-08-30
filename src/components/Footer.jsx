import React from 'react';
import { PartyLogo } from './PartyLogo';

export const Footer = () => {
  return (
    <footer className="lp-footer lp-container">
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '24px', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <PartyLogo size={32} />
          <strong style={{ fontFamily: 'Cinzel', color: '#FFF8E7', fontSize: '1.15rem', letterSpacing: '0.04em' }}>PARTY</strong>
        </div>

        <div className="lp-footer-links">
          <a href="https://party-app-legal.vercel.app/" target="_blank" rel="noreferrer" className="lp-footer-link">
            Terms of Service
          </a>
          <a href="https://party-app-legal.vercel.app/" target="_blank" rel="noreferrer" className="lp-footer-link">
            Privacy Policy
          </a>
          <a href="https://party-app-legal.vercel.app/" target="_blank" rel="noreferrer" className="lp-footer-link">
            Legal Notices
          </a>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '24px', paddingTop: '16px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '12px', alignItems: 'center', fontSize: '0.75rem' }}>
        <span>© 2026 Party App. All rights reserved.</span>
      </div>
    </footer>
  );
};
