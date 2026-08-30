import React from 'react';
import { Crown, CreditCard, Heart } from 'lucide-react';

export const FeatureGMPro = () => {
  return (
    <section id="gm-tools" className="lp-section-gap lp-container">
      <div className="lp-pro-card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '680px' }}>
            <span className="lp-eyebrow" style={{ background: 'rgba(244, 208, 104, 0.2)', color: '#F4D068', borderColor: '#F4D068' }}>
              <Crown size={14} /> Game Master Hub
            </span>
            <h2 className="lp-title-h2">
              Monetize your storytelling with <span className="lp-accent-gold">total peace of mind</span>
            </h2>
            <p style={{ color: 'var(--lp-text-soft)', fontSize: '0.95rem' }}>
              Run paid tables or split venue costs easily via your Stripe account (which you can connect directly in the app), with automated escrow protection and fair play guarantees.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginTop: '8px' }}>
              <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid var(--lp-border)', borderRadius: '12px', padding: '14px' }}>
                <CreditCard size={20} color="#F4D068" style={{ marginBottom: '8px' }} />
                <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#FFF8E7' }}>Guaranteed Escrow Holds</div>
                <div style={{ fontSize: '0.75rem', color: '#9DA8C3', marginTop: '4px' }}>Seat fees are secured in advance and released only after the session concludes.</div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid var(--lp-border)', borderRadius: '12px', padding: '14px' }}>
                <Heart size={20} color="#EF4444" style={{ marginBottom: '8px' }} />
                <div style={{ fontWeight: '800', fontSize: '0.88rem', color: '#FFF8E7' }}>Direct Player Tipping (Tip Jar)</div>
                <div style={{ fontSize: '0.75rem', color: '#9DA8C3', marginTop: '4px' }}>Receive player appreciation and tips directly to your connected Stripe account.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
