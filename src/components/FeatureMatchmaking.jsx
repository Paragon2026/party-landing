import React from 'react';
import { Dice5, Filter, Calendar, MapPin } from 'lucide-react';

export const FeatureMatchmaking = () => {
  return (
    <section id="matchmaking" className="lp-section-gap lp-container">
      <div className="lp-feature-row">
        <div className="lp-feature-body">
          <span className="lp-eyebrow">
            <Dice5 size={14} /> Smart Matchmaking &amp; Discovery
          </span>
          <h2 className="lp-title-h2">
            Find games that fit your <span className="lp-accent-gold">ruleset and exact schedule</span>
          </h2>
          <p style={{ color: 'var(--lp-text-soft)', fontSize: '0.95rem' }}>
            Never waste hours digging through crowded Discord servers. Filter local in-person sessions and virtual tabletop games by ruleset, experience level, and verified availability.
          </p>

          <ul className="lp-feature-list">
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>Granular TTRPG filters :</strong> D&amp;D 5e, Call of Cthulhu, Pathfinder 2e, Vampire: The Masquerade, Cyberpunk RED, OSR, and indie titles.
              </div>
            </li>
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>Smart Weekly Availability Heatmap :</strong> Map your preferred playtime in 30 seconds to get automatically matched without calendar clashes.
              </div>
            </li>
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>Fair Geographic Centroid Finder :</strong> Calculate the optimal equidistant venue on Leaflet maps so no player travels too far.
              </div>
            </li>
          </ul>
        </div>

        {/* 3D Realistic Phone Screenshot: Discovery & Heatmap */}
        <div className="lp-phone-container">
          <div className="lp-phone-mockup" style={{ transform: 'rotateY(6deg) rotateX(2deg)' }}>
            <div className="lp-phone-screen" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ borderBottom: '1.5px solid var(--lp-border)', paddingBottom: '8px' }}>
                <span style={{ fontSize: '0.66rem', color: '#F4D068', fontWeight: '800', textTransform: 'uppercase' }}>Campaign Discovery</span>
                <h4 style={{ fontFamily: 'Cinzel', fontSize: '0.94rem', margin: '2px 0 0 0', color: '#FFF8E7' }}>Filter Active Tables</h4>
              </div>

              {/* Filter Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['D&D 5e', 'Call of Cthulhu', 'Vampire', 'Pathfinder', 'In-Person', 'Virtual VTT'].map((tag, i) => (
                  <span key={tag} style={{
                    fontSize: '0.68rem',
                    padding: '4px 8px',
                    borderRadius: '8px',
                    background: i < 2 ? 'rgba(244, 208, 104, 0.2)' : 'var(--lp-surface-soft)',
                    border: i < 2 ? '1px solid #F4D068' : '1px solid rgba(255,255,255,0.1)',
                    color: i < 2 ? '#F4D068' : '#D6DCE8',
                    fontWeight: '700'
                  }}>
                    {tag} {i < 2 ? '✓' : ''}
                  </span>
                ))}
              </div>

              {/* Actual Heatmap UI Screenshot Mockup */}
              <div style={{ background: 'var(--lp-surface-card)', padding: '12px', borderRadius: '12px', border: '1px solid var(--lp-border)' }}>
                <div style={{ fontSize: '0.7rem', color: '#F4D068', marginBottom: '8px', fontWeight: '800', display: 'flex', justifyContent: 'space-between' }}>
                  <span>🕒 Weekly Availability</span>
                  <span style={{ color: '#4ADE80' }}>Fri &amp; Sat Nights</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                    <div key={idx} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '0.58rem', color: '#9DA8C3', fontWeight: '700' }}>{day}</div>
                      <div style={{
                        height: '28px',
                        borderRadius: '4px',
                        background: idx === 4 || idx === 5 ? '#22C55E' : (idx === 6 ? '#EAB308' : '#EF4444'),
                        marginTop: '4px',
                        opacity: 0.9,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '9px',
                        fontWeight: '900',
                        color: '#FFF'
                      }}>
                        {idx === 4 || idx === 5 ? '8PM' : ''}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results Preview */}
              <div style={{ background: 'var(--lp-surface)', padding: '10px', borderRadius: '10px', border: '1px solid var(--lp-border)' }}>
                <div style={{ fontSize: '0.74rem', fontWeight: '800', color: '#FFF8E7' }}>
                  ⚔️ 18 Matching Parties Found
                </div>
                <div style={{ fontSize: '0.66rem', color: '#9DA8C3', marginTop: '2px' }}>
                  Near your location • Friday &amp; Saturday evenings
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
