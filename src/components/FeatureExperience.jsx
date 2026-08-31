import React from 'react';
import { ShieldCheck, Lock, Feather, UserCheck, Check } from 'lucide-react';

export const FeatureExperience = () => {
  return (
    <section id="features" className="lp-section-gap lp-container">
      <div className="lp-feature-row lp-reverse">
        <div className="lp-feature-body">
          <span className="lp-eyebrow">
            <ShieldCheck size={14} /> Reducing friction to maximize fun
          </span>
          <h2 className="lp-title-h2">
            Features designed for <span className="lp-accent-gold">smoother gameplay</span>
          </h2>
          <p style={{ color: 'var(--lp-text-soft)', fontSize: '0.95rem' }}>
            Everything you need to enjoy respectful, committed, and memorable campaigns without the usual tabletop friction.
          </p>

          <ul className="lp-feature-list">
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>Instant karma :</strong> Tabletop manners and attendance impact your profile's reliability
              </div>
            </li>
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>Play safe :</strong> Filter games and set your Lines &amp; Veils to only play games you feel comfortable with.
              </div>
            </li>
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>Shared Quest Log :</strong> Keep all your campaign recaps, epic moments, and table notes in one place.
              </div>
            </li>
          </ul>
        </div>

        {/* 3D Realistic Phone Screenshot: Unified 3-in-1 Feature Card */}
        <div className="lp-phone-container">
          <div className="lp-phone-mockup" style={{ transform: 'rotateY(-6deg) rotateX(2deg)' }}>
            <div className="lp-phone-screen" style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ borderBottom: '1.5px solid var(--lp-border)', paddingBottom: '6px' }}>
                <span style={{ fontSize: '0.64rem', color: '#F4D068', fontWeight: '800', textTransform: 'uppercase' }}>Player Trust &amp; Table Hub</span>
                <h4 style={{ fontFamily: 'Cinzel', fontSize: '0.9rem', margin: '2px 0 0 0', color: '#FFF8E7' }}>Campaign Essentials</h4>
              </div>

              {/* Widget 1: Reliability Karma */}
              <div style={{
                background: 'var(--lp-surface)',
                border: '1.5px solid rgba(74, 222, 128, 0.4)',
                borderRadius: '10px',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(34, 197, 94, 0.15)',
                    border: '1.5px solid #22C55E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{ fontSize: '16px' }}>☸️</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.76rem', fontWeight: '800', color: '#4ADE80' }}>100% Karma Score</div>
                    <div style={{ fontSize: '0.62rem', color: '#9DA8C3' }}>Certified on-time attendance</div>
                  </div>
                </div>
                <span style={{ fontSize: '0.6rem', color: '#4ADE80', background: 'rgba(34, 197, 94, 0.15)', padding: '2px 6px', borderRadius: '4px', fontWeight: '700' }}>
                  Flawless
                </span>
              </div>

              {/* Widget 2: Table Safety & Consent */}
              <div style={{
                background: 'var(--lp-surface)',
                border: '1.5px solid rgba(244, 208, 104, 0.3)',
                borderRadius: '10px',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Lock size={13} color="#F4D068" />
                    <span style={{ fontSize: '0.74rem', fontWeight: '800', color: '#FFF8E7' }}>Safety Matrix</span>
                  </div>
                  <span style={{ fontSize: '0.6rem', color: '#F4D068', background: 'rgba(244, 208, 104, 0.15)', padding: '1px 6px', borderRadius: '4px', fontWeight: '700' }}>
                    GM Confirmed
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <span style={{ fontSize: '0.6rem', background: 'rgba(239, 68, 68, 0.2)', color: '#FCA5A5', padding: '2px 6px', borderRadius: '4px', fontWeight: '700' }}>
                    🚫 Lines Respected
                  </span>
                  <span style={{ fontSize: '0.6rem', background: 'rgba(245, 158, 11, 0.2)', color: '#FDE68A', padding: '2px 6px', borderRadius: '4px', fontWeight: '700' }}>
                    🌫️ Veils Active
                  </span>
                </div>
              </div>

              {/* Widget 3: Shared Quest Log & Recap */}
              <div style={{
                background: 'var(--lp-surface)',
                border: '1.5px solid var(--lp-border)',
                borderRadius: '10px',
                padding: '10px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Feather size={13} color="#F4D068" />
                    <span style={{ fontSize: '0.74rem', fontWeight: '800', color: '#F4D068' }}>Shared Quest Log</span>
                  </div>
                  <span style={{ fontSize: '0.6rem', color: '#9DA8C3' }}>Session #6</span>
                </div>
                <p style={{ fontSize: '0.66rem', color: 'var(--lp-text-soft)', margin: 0, lineHeight: 1.45 }}>
                  The party rested at the Blue Water Inn after retrieving the silver amulet...
                </p>
                <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '4px', fontSize: '0.6rem', color: '#9DA8C3', display: 'flex', justifyContent: 'space-between' }}>
                  <span>✍️ Group Notes</span>
                  <span style={{ color: '#F4D068', fontWeight: '700' }}>🗿 Sealed Lore</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
