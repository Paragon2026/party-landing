import React from 'react';
import { Crown, CreditCard, Heart } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { PhoneVideoPlayer } from './PhoneVideoPlayer';

export const FeatureGMPro = () => {
  const { loc } = useTranslation();

  return (
    <section id="gm-tools" className="lp-section-gap lp-container">
      <div className="lp-pro-card">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '36px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span className="lp-eyebrow" style={{ background: 'rgba(244, 208, 104, 0.2)', color: '#F4D068', borderColor: '#F4D068' }}>
              <Crown size={14} /> {loc.gm.eyebrow}
            </span>
            <h2 className="lp-title-h2">
              {loc.gm.title} <span className="lp-accent-gold">{loc.gm.titleAccent}</span>
            </h2>
            <p style={{ color: 'var(--lp-text-soft)', fontSize: '0.95rem' }}>
              {loc.gm.description}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '8px' }}>
              <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid var(--lp-border)', borderRadius: '12px', padding: '14px' }}>
                <CreditCard size={20} color="#F4D068" style={{ marginBottom: '8px' }} />
                <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#FFF8E7' }}>{loc.gm.card1Title}</div>
                <div style={{ fontSize: '0.75rem', color: '#9DA8C3', marginTop: '4px' }}>{loc.gm.card1Desc}</div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid var(--lp-border)', borderRadius: '12px', padding: '14px' }}>
                <Heart size={20} color="#EF4444" style={{ marginBottom: '8px' }} />
                <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#FFF8E7' }}>{loc.gm.card2Title}</div>
                <div style={{ fontSize: '0.75rem', color: '#9DA8C3', marginTop: '4px' }}>{loc.gm.card2Desc}</div>
              </div>
            </div>
          </div>

          {/* Real GM Manager Screenshot Phone */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <PhoneVideoPlayer type="gm" style={{ transform: 'rotateY(-4deg)' }} />
          </div>
        </div>
      </div>
    </section>
  );
};
