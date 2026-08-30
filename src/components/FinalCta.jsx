import React from 'react';
import { Download, Smartphone, ArrowRight, Play } from 'lucide-react';

export const FinalCta = () => {
  return (
    <section id="download" className="lp-section-gap lp-container">
      <div className="lp-final-card">
        <span className="lp-eyebrow">🎲 Your Adventure Awaits</span>
        <h2 className="lp-title-h2" style={{ maxWidth: '640px' }}>
          Ready to roll for <span className="lp-accent-gold">initiative</span> ?
        </h2>
        <p style={{ color: 'var(--lp-text-soft)', maxWidth: '520px', margin: 0, fontSize: '0.96rem' }}>
          Join thousands of tabletop adventurers today. Download the Party app free on iOS and Android to find your dream group.
        </p>

        {/* Store Badges Row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '12px', justifyContent: 'center' }}>
          <a 
            href="https://play.google.com/store" 
            target="_blank" 
            rel="noreferrer"
            className="lp-cta-store"
          >
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              background: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Play size={16} fill="#F4D068" color="#F4D068" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.62rem', color: '#9DA8C3', textTransform: 'uppercase', letterSpacing: '0.5px' }}>GET IT ON</div>
              <div style={{ fontSize: '0.92rem', fontWeight: '800', color: '#FFF' }}>Google Play</div>
            </div>
          </a>

          <a 
            href="https://apps.apple.com" 
            target="_blank" 
            rel="noreferrer"
            className="lp-cta-store"
          >
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              background: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Smartphone size={18} color="#F4D068" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.62rem', color: '#9DA8C3', textTransform: 'uppercase', letterSpacing: '0.5px' }}>DOWNLOAD ON THE</div>
              <div style={{ fontSize: '0.92rem', fontWeight: '800', color: '#FFF' }}>App Store</div>
            </div>
          </a>
        </div>

        <div style={{ marginTop: '14px' }}>
          <a 
            href="https://party-app-rpg.vercel.app/"
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: '0.82rem', color: '#F4D068', textDecoration: 'underline', fontWeight: '700' }}
          >
            Or launch the instant Web Companion in browser →
          </a>
        </div>
      </div>
    </section>
  );
};
