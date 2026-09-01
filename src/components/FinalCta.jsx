import React from 'react';
import { Smartphone, Play } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export const FinalCta = () => {
  const { loc } = useTranslation();

  return (
    <section id="download" className="lp-section-gap lp-container">
      <div className="lp-final-card">
        <span className="lp-eyebrow">🎲 {loc.finalCta.eyebrow}</span>
        <h2 className="lp-title-h2" style={{ maxWidth: '640px' }}>
          {loc.finalCta.title} <span className="lp-accent-gold">{loc.finalCta.titleAccent}</span> ?
        </h2>
        <p style={{ color: 'var(--lp-text-soft)', maxWidth: '520px', margin: 0, fontSize: '0.96rem' }}>
          {loc.finalCta.description}
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
              <div style={{ fontSize: '0.62rem', color: '#9DA8C3', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{loc.finalCta.getItOn}</div>
              <div style={{ fontSize: '0.92rem', fontWeight: '800', color: '#FFF' }}>{loc.finalCta.googlePlay}</div>
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
              <div style={{ fontSize: '0.62rem', color: '#9DA8C3', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{loc.finalCta.downloadOn}</div>
              <div style={{ fontSize: '0.92rem', fontWeight: '800', color: '#FFF' }}>{loc.finalCta.appStore}</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
