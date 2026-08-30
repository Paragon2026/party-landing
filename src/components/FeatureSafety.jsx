import React from 'react';
import { Lock, ShieldAlert, HeartHandshake } from 'lucide-react';

export const FeatureSafety = () => {
  return (
    <section id="safety" className="lp-section-gap lp-container">
      <div className="lp-feature-row">
        <div className="lp-feature-body">
          <span className="lp-eyebrow">
            <Lock size={14} /> Table Safety &amp; Consent
          </span>
          <h2 className="lp-title-h2">
            A safe, inclusive space with <span className="lp-accent-gold">Lines, Veils &amp; X-Card</span>
          </h2>
          <p style={{ color: 'var(--lp-text-soft)', fontSize: '0.95rem' }}>
            Tabletop roleplaying should always be an enjoyable and respectful experience. Communicate sensitive boundaries anonymously before Session Zero and enjoy peace of mind at the table.
          </p>

          <ul className="lp-feature-list">
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>Pre-Session Safety Matrix :</strong> Define hard Lines (off-limits topics) and soft Veils (fade-to-black) before joining the game.
              </div>
            </li>
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>Anonymous GM Requests :</strong> Submit sensitive topic boundaries discreetly to the Dungeon Master without public exposure.
              </div>
            </li>
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>Built-in X-Card Safety Signal :</strong> Instantly pause or pivot intense scenes with a single tap in the table chat.
              </div>
            </li>
          </ul>
        </div>

        {/* 3D Realistic Phone Screenshot: Safety Matrix */}
        <div className="lp-phone-container">
          <div className="lp-phone-mockup" style={{ transform: 'rotateY(6deg) rotateX(2deg)' }}>
            <div className="lp-phone-screen" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ borderBottom: '1.5px solid var(--lp-border)', paddingBottom: '8px' }}>
                <span style={{ fontSize: '0.66rem', color: '#FCA5A5', fontWeight: '800', textTransform: 'uppercase' }}>🛡️ Safety Checklist</span>
                <h4 style={{ fontFamily: 'Cinzel', fontSize: '0.92rem', margin: '2px 0 0 0', color: '#FFF8E7' }}>Campaign Boundaries</h4>
              </div>

              {/* Lines Section */}
              <div style={{ background: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.45)', borderRadius: '10px', padding: '10px' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: '800', color: '#FCA5A5', marginBottom: '6px' }}>
                  🚫 LINES (Strictly Prohibited)
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  <span style={{ fontSize: '0.65rem', background: 'rgba(239, 68, 68, 0.25)', color: '#FECACA', padding: '3px 8px', borderRadius: '6px', fontWeight: '700' }}>
                    Graphic Torture ✕
                  </span>
                  <span style={{ fontSize: '0.65rem', background: 'rgba(239, 68, 68, 0.25)', color: '#FECACA', padding: '3px 8px', borderRadius: '6px', fontWeight: '700' }}>
                    Severe Arachnophobia ✕
                  </span>
                </div>
              </div>

              {/* Veils Section */}
              <div style={{ background: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.45)', borderRadius: '10px', padding: '10px' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: '800', color: '#FDE68A', marginBottom: '6px' }}>
                  🌫️ VEILS (Fade to Black)
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  <span style={{ fontSize: '0.65rem', background: 'rgba(245, 158, 11, 0.25)', color: '#FEF3C7', padding: '3px 8px', borderRadius: '6px', fontWeight: '700' }}>
                    Intimate Romance 〰
                  </span>
                  <span style={{ fontSize: '0.65rem', background: 'rgba(245, 158, 11, 0.25)', color: '#FEF3C7', padding: '3px 8px', borderRadius: '6px', fontWeight: '700' }}>
                    Body Horror 〰
                  </span>
                </div>
              </div>

              {/* Live X-Card Signal in Chat */}
              <div style={{ background: 'var(--lp-surface-card)', borderRadius: '10px', padding: '10px', border: '1px solid var(--lp-border)', marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: '0.7rem', color: '#D6DCE8' }}>
                  🛑 <strong>X-Card Safety:</strong> Active in chat
                </div>
                <span style={{ fontSize: '0.65rem', background: '#EF4444', color: '#FFF', padding: '2px 8px', borderRadius: '6px', fontWeight: '800' }}>
                  One-Tap Signal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
