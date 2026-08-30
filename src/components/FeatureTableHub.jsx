import React from 'react';
import { Feather, MessageSquare, Lock, Users } from 'lucide-react';

export const FeatureTableHub = () => {
  return (
    <section className="lp-section-gap lp-container">
      <div className="lp-feature-row lp-reverse">
        <div className="lp-feature-body">
          <span className="lp-eyebrow">
            <Feather size={14} /> Collaborative Campaign Chronicle
          </span>
          <h2 className="lp-title-h2">
            Shared quest log <span className="lp-accent-gold">carved into stone lore</span>
          </h2>
          <p style={{ color: 'var(--lp-text-soft)', fontSize: '0.95rem' }}>
            No more scattered Google Docs or forgotten plot hooks. Your entire party's lore, recap history, character rosters, and private encrypted communications live in one cohesive hub.
          </p>

          <ul className="lp-feature-list">
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>Live Collaborative Recap Editor :</strong> Every player at the table takes session notes together in real time.
              </div>
            </li>
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>Carve into Stone Lore :</strong> The Dungeon Master seals the official chronicle to preserve the campaign's permanent record.
              </div>
            </li>
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>Consent-First Table Messaging :</strong> Direct messages unlock only upon mutual friendship acceptance, safeguarding players' privacy.
              </div>
            </li>
          </ul>
        </div>

        {/* 3D Realistic Phone Screenshot: Table Hub & Recap */}
        <div className="lp-phone-container">
          <div className="lp-phone-mockup" style={{ transform: 'rotateY(-6deg) rotateX(2deg)' }}>
            <div className="lp-phone-screen" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ borderBottom: '1.5px solid var(--lp-border)', paddingBottom: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Feather size={15} color="#F4D068" />
                  <h4 style={{ fontFamily: 'Cinzel', fontSize: '0.9rem', margin: 0, color: '#FFF8E7' }}>Campaign Chronicle</h4>
                </div>
                <span style={{ fontSize: '0.62rem', background: 'rgba(217, 119, 36, 0.2)', color: '#F4D068', padding: '2px 6px', borderRadius: '6px', fontWeight: '800' }}>
                  Session #6
                </span>
              </div>

              {/* Shared Live Editor Card */}
              <div style={{ background: 'var(--lp-surface)', borderRadius: '10px', padding: '12px', border: '1px solid var(--lp-border)', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontSize: '0.74rem', color: '#F4D068', fontWeight: '800' }}>
                  ⚔️ Confrontation at the Old Windmill
                </div>
                <p style={{ fontSize: '0.7rem', color: 'var(--lp-text-soft)', margin: 0, lineHeight: 1.5 }}>
                  Having outsmarted the night hags of Vallaki, Thorin reclaimed the silver amulet. The party rests at the Blue Water Inn before venturing into the Shadowfell...
                </p>
                <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '8px', fontSize: '0.64rem', color: '#9DA8C3', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>✍️ Drafted by Party</span>
                  <span style={{ color: '#F4D068', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <Lock size={10} /> Sealed by DM
                  </span>
                </div>
              </div>

              {/* Table Chat Preview */}
              <div style={{ background: 'var(--lp-surface-card)', borderRadius: '10px', padding: '10px', border: '1px solid var(--lp-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MessageSquare size={14} color="#F4D068" />
                  <span style={{ fontSize: '0.74rem', fontWeight: '700', color: '#FFF8E7' }}>Party Group Chat (5)</span>
                </div>
                <span style={{ fontSize: '0.64rem', color: '#4ADE80', fontWeight: '700' }}>● Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
