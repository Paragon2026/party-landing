import React from 'react';
import { ShieldCheck, UserCheck, AlertTriangle } from 'lucide-react';

export const FeatureKarma = () => {
  return (
    <section id="karma" className="lp-section-gap lp-container">
      <div className="lp-feature-row lp-reverse">
        <div className="lp-feature-body">
          <span className="lp-eyebrow">
            <ShieldCheck size={14} /> Anti-Ghosting &amp; Accountability
          </span>
          <h2 className="lp-title-h2">
            Never play with <span className="lp-accent-gold">ghost players</span> again
          </h2>
          <p style={{ color: 'var(--lp-text-soft)', fontSize: '0.95rem' }}>
            Unannounced absences destroy tabletop campaigns. Our Dharmachakra Reliability Karma system rewards dependable adventurers and protects parties against last-minute dropouts.
          </p>

          <ul className="lp-feature-list">
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>Transparent 0 – 100% Karma Score :</strong> Powered by actual session attendance certified by the Dungeon Master at the end of each game.
              </div>
            </li>
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>Automatic Ghosting Penalties :</strong> Unexcused no-shows immediately deduct karma, ensuring only committed players join high-stakes tables.
              </div>
            </li>
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>Attendance Breakdown Ledger :</strong> Detailed session history (100% On-Time, 90% Excused Notice, 70% Late, 0% No-Show).
              </div>
            </li>
          </ul>
        </div>

        {/* 3D Realistic Phone Screenshot: Karma Modal */}
        <div className="lp-phone-container">
          <div className="lp-phone-mockup" style={{ transform: 'rotateY(-6deg) rotateX(2deg)' }}>
            <div className="lp-phone-screen" style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(34, 197, 94, 0.15)',
                border: '2px solid #22C55E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '6px auto 0 auto',
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)'
              }}>
                <span style={{ fontSize: '28px' }}>☸️</span>
              </div>

              <div>
                <h4 style={{ fontFamily: 'Cinzel', fontSize: '1.15rem', margin: 0, color: '#4ADE80', fontWeight: '800' }}>
                  100% Reliability Karma
                </h4>
                <span style={{ fontSize: '0.72rem', color: '#9DA8C3' }}>
                  Tier : Legendary Party Companion
                </span>
              </div>

              {/* Attendance Breakdown Matrix */}
              <div style={{ background: 'var(--lp-surface)', borderRadius: '12px', padding: '12px', border: '1px solid var(--lp-border)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem' }}>
                  <span style={{ color: '#9DA8C3' }}>Total Sessions Logged :</span>
                  <strong style={{ color: '#FFF' }}>18 Sessions</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem' }}>
                  <span style={{ color: '#9DA8C3' }}>Certified Attendance :</span>
                  <strong style={{ color: '#4ADE80' }}>100% (Present)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem' }}>
                  <span style={{ color: '#9DA8C3' }}>Excused Absences :</span>
                  <strong style={{ color: '#F4D068' }}>1 (24h Notice)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem' }}>
                  <span style={{ color: '#9DA8C3' }}>Unannounced No-Shows :</span>
                  <strong style={{ color: '#22C55E' }}>0 (Flawless)</strong>
                </div>
              </div>

              <div style={{ fontSize: '0.7rem', color: '#D6DCE8', fontStyle: 'italic', background: 'var(--lp-surface-card)', padding: '10px', borderRadius: '8px', border: '1px solid var(--lp-border)' }}>
                "Always punctual and highly reliable in character roleplay!" — DM Thomas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
