import React from 'react';
import { Crown, CreditCard, Heart, ArrowRight } from 'lucide-react';

export const FeatureGMPro = () => {
  return (
    <section id="gm-pro" className="lp-section-gap lp-container">
      <div className="lp-pro-card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '640px' }}>
            <span className="lp-eyebrow" style={{ background: 'rgba(244, 208, 104, 0.2)', color: '#F4D068', borderColor: '#F4D068' }}>
              👑 Dungeon Master Suite &amp; Monetization
            </span>
            <h2 className="lp-title-h2">
              Upgrade to <span className="lp-accent-gold">Party Master</span> — Monetize your storytelling with total peace of mind
            </h2>
            <p style={{ color: 'var(--lp-text-soft)', fontSize: '0.95rem' }}>
              For professional Dungeon Masters or tables sharing venue/material costs, Party provides enterprise-grade escrow holds, automated payouts via Stripe Connect, and fair play dispute resolution.
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
                <div style={{ fontSize: '0.75rem', color: '#9DA8C3', marginTop: '4px' }}>Receive heartfelt financial appreciation straight from grateful players.</div>
              </div>
            </div>

            <div style={{ marginTop: '10px' }}>
              <a 
                href="#download"
                className="lp-cta-primary"
              >
                <span>Join as a Verified DM 👑</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
