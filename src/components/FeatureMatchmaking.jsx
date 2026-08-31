import React from 'react';
import { Dice5, MapPin, Navigation, Star } from 'lucide-react';

export const FeatureMatchmaking = () => {
  return (
    <section id="scheduling" className="lp-section-gap lp-container">
      <div className="lp-feature-row">
        <div className="lp-feature-body">
          <span className="lp-eyebrow">
            <Dice5 size={14} /> Smart Matchmaking
          </span>
          <h2 className="lp-title-h2">
            Find games that match your <span className="lp-accent-gold">exact schedule</span>
          </h2>
          <p style={{ color: 'var(--lp-text-soft)', fontSize: '0.95rem' }}>
            Never waste hours digging through crowded Discord servers. Filter local in-person sessions and virtual tabletop games by game systems, experience level, and verified availability.
          </p>

          <ul className="lp-feature-list">
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>Find any game you want :</strong> Play your favorites like D&amp;D 5e, Call of Cthulhu, Pathfinder 2e or discover new ones like Cyberpunk RED, OSR, and other indie titles.
              </div>
            </li>
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>Smart scheduling :</strong> Map your preferred playtime in 30s and let the app find the optimal time for everyone to meet !
              </div>
            </li>
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>Meeting Venues :</strong> Find venues you can all meet at with minimal travel distance.
              </div>
            </li>
          </ul>
        </div>

        {/* 3D Realistic Phone Screenshot: Heatmap & Colored Pins Map Mockup */}
        <div className="lp-phone-container">
          <div className="lp-phone-mockup" style={{ transform: 'rotateY(6deg) rotateX(2deg)' }}>
            <div className="lp-phone-screen" style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ borderBottom: '1.5px solid var(--lp-border)', paddingBottom: '6px' }}>
                <span style={{ fontSize: '0.64rem', color: '#F4D068', fontWeight: '800', textTransform: 'uppercase' }}>Schedule &amp; Location Match</span>
                <h4 style={{ fontFamily: 'Cinzel', fontSize: '0.9rem', margin: '2px 0 0 0', color: '#FFF8E7' }}>Party Heatmap &amp; Map Pins</h4>
              </div>

              {/* Heatmap UI Screenshot Mockup */}
              <div style={{ background: 'var(--lp-surface-card)', padding: '10px', borderRadius: '10px', border: '1px solid var(--lp-border)' }}>
                <div style={{ fontSize: '0.68rem', color: '#F4D068', marginBottom: '6px', fontWeight: '800', display: 'flex', justifyContent: 'space-between' }}>
                  <span>🕒 Optimal Time Found</span>
                  <span style={{ color: '#4ADE80' }}>Fri 8PM (4/4 Players)</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '3px' }}>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                    <div key={idx} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '0.55rem', color: '#9DA8C3', fontWeight: '700' }}>{day}</div>
                      <div style={{
                        height: '24px',
                        borderRadius: '4px',
                        background: idx === 4 ? '#22C55E' : (idx === 5 ? '#22C55E' : (idx === 6 ? '#EAB308' : '#EF4444')),
                        marginTop: '3px',
                        opacity: 0.9,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '8px',
                        fontWeight: '900',
                        color: '#FFF'
                      }}>
                        {idx === 4 ? '✓' : ''}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leaflet Map Mockup Representation with Colored Player Pins & Centroid Venue */}
              <div style={{
                flex: 1,
                background: 'radial-gradient(circle at 50% 50%, #1D243B 0%, #101423 100%)',
                borderRadius: '12px',
                border: '1.5px solid var(--lp-border)',
                padding: '10px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                {/* Simulated Map Grid / Roads */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'radial-gradient(rgba(244, 208, 104, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                  pointerEvents: 'none'
                }} />

                {/* Map Colored Pins */}
                {/* Player 1 Pin (Blue) */}
                <div style={{ position: 'absolute', top: '24%', left: '20%', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#3B82F6', border: '2px solid #FFF', boxShadow: '0 0 8px #3B82F6' }} />
                  <span style={{ fontSize: '0.55rem', color: '#93C5FD', fontWeight: '800', background: 'rgba(0,0,0,0.6)', padding: '1px 4px', borderRadius: '4px' }}>Alex</span>
                </div>

                {/* Player 2 Pin (Purple) */}
                <div style={{ position: 'absolute', top: '22%', right: '22%', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#A855F7', border: '2px solid #FFF', boxShadow: '0 0 8px #A855F7' }} />
                  <span style={{ fontSize: '0.55rem', color: '#D8B4FE', fontWeight: '800', background: 'rgba(0,0,0,0.6)', padding: '1px 4px', borderRadius: '4px' }}>Clara</span>
                </div>

                {/* Player 3 Pin (Green) */}
                <div style={{ position: 'absolute', bottom: '38%', left: '28%', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#10B981', border: '2px solid #FFF', boxShadow: '0 0 8px #10B981' }} />
                  <span style={{ fontSize: '0.55rem', color: '#6EE7B7', fontWeight: '800', background: 'rgba(0,0,0,0.6)', padding: '1px 4px', borderRadius: '4px' }}>Marc</span>
                </div>

                {/* Central Venue Golden Star Pin */}
                <div style={{ position: 'absolute', top: '46%', left: '46%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #F4D068, #D97724)',
                    border: '2px solid #FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 16px rgba(244, 208, 104, 0.8)',
                    animation: 'pulse 2s infinite'
                  }}>
                    <Star size={14} color="#000" fill="#000" />
                  </div>
                  <span style={{ fontSize: '0.58rem', color: '#F4D068', fontWeight: '900', background: 'rgba(15,18,30,0.9)', border: '1px solid #F4D068', padding: '1px 6px', borderRadius: '6px', marginTop: '2px', whiteSpace: 'nowrap' }}>
                    Optimal Venue
                  </span>
                </div>

                {/* Venue Detail Card */}
                <div style={{
                  marginTop: 'auto',
                  background: 'rgba(15, 20, 34, 0.92)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid var(--lp-border-active)',
                  borderRadius: '8px',
                  padding: '8px',
                  zIndex: 2
                }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: '800', color: '#FFF8E7', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={11} color="#F4D068" /> The Gilded Dragon Boardgame Café
                  </div>
                  <div style={{ fontSize: '0.6rem', color: '#4ADE80', marginTop: '2px', fontWeight: '700' }}>
                    ✓ Minimal travel distance • 12 min avg. travel time for all players
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
