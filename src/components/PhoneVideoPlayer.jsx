import React, { useState, useEffect } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { 
  MapPin, 
  Globe, 
  Star, 
  Lock, 
  Feather, 
  ShieldCheck, 
  CreditCard, 
  Heart,
  Check,
  ChevronRight,
  Play,
  RotateCcw
} from 'lucide-react';

export const PhoneVideoPlayer = ({ type = 'discovery', videoSrc = null, style = {} }) => {
  const { loc, lang } = useTranslation();
  
  // Interactive states for live simulated mockups
  const [activeTab, setActiveTab] = useState(0);
  const [heatmapSelectedDay, setHeatmapSelectedDay] = useState(4); // Friday
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(2); // Evening
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // Auto-play interactive cycles
  useEffect(() => {
    if (type === 'experience') {
      const interval = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % 3);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [type]);

  // If an external video file is provided, render native video player inside the phone mockup
  if (videoSrc) {
    return (
      <div className="lp-phone-container" style={style}>
        <div className="lp-phone-mockup">
          <div className="lp-phone-screen" style={{ position: 'relative', background: '#000' }}>
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    );
  }

  // Real Component Renderers
  return (
    <div className="lp-phone-container" style={style}>
      <div className="lp-phone-mockup">
        <div className="lp-phone-screen">
          {/* Status Bar */}
          <div style={{
            background: 'linear-gradient(180deg, #1E253E 0%, #151A2C 100%)',
            padding: '10px 14px 8px 14px',
            borderBottom: '1.5px solid rgba(244, 208, 104, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img 
                src="/party_logo.jpg" 
                alt="Party" 
                style={{ width: '22px', height: '22px', borderRadius: '50%', border: '1px solid #F4D068' }} 
              />
              <span style={{ fontFamily: 'Cinzel', fontSize: '0.88rem', fontWeight: '900', color: '#F4D068', letterSpacing: '0.5px' }}>
                PARTY
              </span>
            </div>
            <span style={{ fontSize: '0.62rem', color: '#9DA8C3', fontWeight: '700' }}>
              20:45 • ● 5G
            </span>
          </div>

          {/* TYPE: DISCOVERY (Hero Screen) */}
          {type === 'discovery' && (
            <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '10px', overflowY: 'hidden', height: '100%' }}>
              {/* Campaign Card 1 */}
              <div style={{
                background: 'var(--lp-surface)',
                border: '1.5px solid var(--lp-border-active)',
                borderRadius: '14px',
                padding: '12px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <span style={{ fontSize: '0.62rem', color: '#F4D068', textTransform: 'uppercase', fontWeight: '800', letterSpacing: '0.5px' }}>
                      D&amp;D 5e • {loc.hero.mockup.ongoingCampaign}
                    </span>
                    <h4 style={{ fontFamily: 'Cinzel', fontSize: '0.92rem', margin: '2px 0 0 0', color: '#FFF8E7', fontWeight: '800' }}>
                      Curse of Strahd: Barovia
                    </h4>
                  </div>
                  <span style={{ fontSize: '0.65rem', background: 'rgba(217, 119, 36, 0.2)', border: '1px solid #D97724', color: '#F4D068', padding: '2px 6px', borderRadius: '6px', fontWeight: '800' }}>
                    4/5 {loc.hero.mockup.seatsFilled}
                  </span>
                </div>

                <p style={{ fontSize: '0.72rem', color: 'var(--lp-text-soft)', margin: 0, lineHeight: 1.45 }}>
                  {lang === 'fr' 
                    ? "Sous des nuages d'orage, le comte Strahd von Zarovich se dresse contre les remparts antiques de Ravenloft..." 
                    : "Under raging storm clouds, Count Strahd von Zarovich stands silhouetted against the ancient walls of Castle Ravenloft..."}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '8px', fontSize: '0.68rem', color: 'var(--lp-text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={11} color="#F4D068" /> {loc.hero.mockup.inPerson}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#F4D068', fontWeight: '800' }}>
                    {loc.hero.mockup.seatPrice}
                  </span>
                </div>
              </div>

              {/* Campaign Card 2 */}
              <div style={{
                background: 'var(--lp-surface)',
                border: '1px solid var(--lp-border)',
                borderRadius: '14px',
                padding: '12px',
                opacity: 0.95,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '0.62rem', color: '#9DA8C3', textTransform: 'uppercase', fontWeight: '800' }}>
                      Call of Cthulhu 7e • {loc.hero.mockup.oneShot}
                    </span>
                    <h4 style={{ fontFamily: 'Cinzel', fontSize: '0.88rem', margin: '2px 0 0 0', color: '#FFF8E7' }}>
                      The Haunting of Blackwood
                    </h4>
                  </div>
                  <span style={{ fontSize: '0.65rem', background: 'rgba(56, 193, 114, 0.15)', color: '#4ADE80', padding: '2px 6px', borderRadius: '6px', fontWeight: '800' }}>
                    2/4 {loc.hero.mockup.seatsFilled}
                  </span>
                </div>
                <p style={{ fontSize: '0.7rem', color: 'var(--lp-text-soft)', margin: 0, lineHeight: 1.4 }}>
                  {lang === 'fr' 
                    ? "Un silence pesant règne sur le manoir alors que la tempête approche..." 
                    : "An eerie silence hangs over the estate as the storm gathers outside..."}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '6px', fontSize: '0.68rem', color: 'var(--lp-text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Globe size={11} color="#4ADE80" /> {loc.hero.mockup.online}
                  </span>
                  <span style={{ color: '#4ADE80', fontWeight: '700' }}>{loc.hero.mockup.freeSeat}</span>
                </div>
              </div>

              {/* Action Banner */}
              <div style={{
                background: 'linear-gradient(135deg, #8B1111 0%, #D97724 100%)',
                borderRadius: '12px',
                padding: '10px',
                color: '#FFF8E7',
                textAlign: 'center',
                fontSize: '0.78rem',
                fontWeight: '800',
                boxShadow: '0 4px 14px rgba(217, 119, 36, 0.4)',
                marginTop: 'auto'
              }}>
                {loc.hero.mockup.matchActiveCampaigns}
              </div>
            </div>
          )}

          {/* TYPE: SCHEDULING (Heatmap & Leaflet Map Pins) */}
          {type === 'scheduling' && (
            <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px', height: '100%' }}>
              <div style={{ borderBottom: '1.5px solid var(--lp-border)', paddingBottom: '6px' }}>
                <span style={{ fontSize: '0.64rem', color: '#F4D068', fontWeight: '800', textTransform: 'uppercase' }}>
                  {loc.scheduling.mockup.header}
                </span>
                <h4 style={{ fontFamily: 'Cinzel', fontSize: '0.9rem', margin: '2px 0 0 0', color: '#FFF8E7' }}>
                  {loc.scheduling.mockup.subHeader}
                </h4>
              </div>

              {/* Interactive Heatmap */}
              <div style={{ background: 'var(--lp-surface-card)', padding: '10px', borderRadius: '10px', border: '1px solid var(--lp-border)' }}>
                <div style={{ fontSize: '0.68rem', color: '#F4D068', marginBottom: '6px', fontWeight: '800', display: 'flex', justifyContent: 'space-between' }}>
                  <span>🕒 {loc.scheduling.mockup.optimalTimeFound}</span>
                  <span style={{ color: '#4ADE80' }}>{loc.scheduling.mockup.optimalSlot}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '3px' }}>
                  {(lang === 'fr' ? ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'] : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']).map((day, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setHeatmapSelectedDay(idx)}
                      style={{ textAlign: 'center', cursor: 'pointer' }}
                    >
                      <div style={{ fontSize: '0.55rem', color: heatmapSelectedDay === idx ? '#F4D068' : '#9DA8C3', fontWeight: '700' }}>{day}</div>
                      <div style={{
                        height: '24px',
                        borderRadius: '4px',
                        background: idx === 4 ? '#22C55E' : (idx === 5 ? '#22C55E' : (idx === 6 ? '#EAB308' : '#EF4444')),
                        marginTop: '3px',
                        opacity: heatmapSelectedDay === idx ? 1 : 0.75,
                        border: heatmapSelectedDay === idx ? '1.5px solid #FFF' : 'none',
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

              {/* Leaflet Map Mockup Representation with Centroid Star */}
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
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'radial-gradient(rgba(244, 208, 104, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                  pointerEvents: 'none'
                }} />

                {/* Player Pins */}
                <div style={{ position: 'absolute', top: '24%', left: '20%', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#3B82F6', border: '2px solid #FFF', boxShadow: '0 0 8px #3B82F6' }} />
                  <span style={{ fontSize: '0.55rem', color: '#93C5FD', fontWeight: '800', background: 'rgba(0,0,0,0.6)', padding: '1px 4px', borderRadius: '4px' }}>Alex</span>
                </div>

                <div style={{ position: 'absolute', top: '22%', right: '22%', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#A855F7', border: '2px solid #FFF', boxShadow: '0 0 8px #A855F7' }} />
                  <span style={{ fontSize: '0.55rem', color: '#D8B4FE', fontWeight: '800', background: 'rgba(0,0,0,0.6)', padding: '1px 4px', borderRadius: '4px' }}>Clara</span>
                </div>

                <div style={{ position: 'absolute', bottom: '38%', left: '28%', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#10B981', border: '2px solid #FFF', boxShadow: '0 0 8px #10B981' }} />
                  <span style={{ fontSize: '0.55rem', color: '#6EE7B7', fontWeight: '800', background: 'rgba(0,0,0,0.6)', padding: '1px 4px', borderRadius: '4px' }}>Marc</span>
                </div>

                {/* Central Venue Star */}
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
                    boxShadow: '0 0 16px rgba(244, 208, 104, 0.8)'
                  }}>
                    <Star size={14} color="#000" fill="#000" />
                  </div>
                  <span style={{ fontSize: '0.58rem', color: '#F4D068', fontWeight: '900', background: 'rgba(15,18,30,0.9)', border: '1px solid #F4D068', padding: '1px 6px', borderRadius: '6px', marginTop: '2px', whiteSpace: 'nowrap' }}>
                    {loc.scheduling.mockup.optimalVenue}
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
                    <MapPin size={11} color="#F4D068" /> {loc.scheduling.mockup.venueName}
                  </div>
                  <div style={{ fontSize: '0.6rem', color: '#4ADE80', marginTop: '2px', fontWeight: '700' }}>
                    ✓ {loc.scheduling.mockup.venueBenefit}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TYPE: EXPERIENCE (Tabbed Real Screens: Karma, Safety, Quest Log) */}
          {type === 'experience' && (
            <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px', height: '100%' }}>
              {/* Interactive Tabs */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', background: 'var(--lp-surface-card)', padding: '3px', borderRadius: '8px' }}>
                {['☸️ Karma', '🛡️ Safety', '📜 Quest Log'].map((tabLabel, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    style={{
                      background: activeTab === idx ? 'linear-gradient(135deg, #F4D068, #D97724)' : 'transparent',
                      color: activeTab === idx ? '#000' : '#D6DCE8',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '5px 2px',
                      fontSize: '0.64rem',
                      fontWeight: '800',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {tabLabel}
                  </button>
                ))}
              </div>

              {/* Tab 0: Karma Reliability */}
              {activeTab === 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, animation: 'fadeIn 0.3s ease' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(34, 197, 94, 0.15)',
                    border: '2px solid #22C55E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '8px auto 0 auto',
                    boxShadow: '0 0 16px rgba(34, 197, 94, 0.3)'
                  }}>
                    <span style={{ fontSize: '26px' }}>☸️</span>
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Cinzel', fontSize: '1.05rem', fontWeight: '800', color: '#4ADE80' }}>
                      {loc.experience.mockup.karmaScore}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#9DA8C3' }}>
                      {loc.experience.mockup.karmaSubtitle}
                    </div>
                  </div>

                  <div style={{ background: 'var(--lp-surface)', borderRadius: '10px', padding: '10px', border: '1px solid var(--lp-border)', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.72rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#9DA8C3' }}>{lang === 'fr' ? 'Séances jouées :' : 'Sessions Logged :'}</span>
                      <strong>18</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#9DA8C3' }}>{lang === 'fr' ? 'Assiduité certifiée :' : 'Certified Attendance :'}</span>
                      <strong style={{ color: '#4ADE80' }}>100%</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#9DA8C3' }}>{lang === 'fr' ? 'Abandons :' : 'Unannounced No-Shows :'}</span>
                      <strong style={{ color: '#22C55E' }}>0</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 1: Safety Matrix */}
              {activeTab === 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, animation: 'fadeIn 0.3s ease' }}>
                  <div style={{ borderBottom: '1px solid var(--lp-border)', paddingBottom: '4px' }}>
                    <span style={{ fontSize: '0.64rem', color: '#FCA5A5', fontWeight: '800', textTransform: 'uppercase' }}>
                      {loc.experience.mockup.safetyMatrix}
                    </span>
                    <h4 style={{ fontFamily: 'Cinzel', fontSize: '0.86rem', margin: '2px 0 0 0', color: '#FFF8E7' }}>
                      {loc.experience.mockup.safetyGmConfirmed}
                    </h4>
                  </div>

                  <div style={{ background: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.4)', borderRadius: '8px', padding: '8px' }}>
                    <div style={{ fontSize: '0.68rem', fontWeight: '800', color: '#FCA5A5', marginBottom: '4px' }}>
                      🚫 LINES ({lang === 'fr' ? 'Interdits' : 'Strict Limits'})
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                      <span style={{ fontSize: '0.62rem', background: 'rgba(239, 68, 68, 0.25)', color: '#FECACA', padding: '2px 6px', borderRadius: '4px', fontWeight: '700' }}>
                        Graphic Torture ✕
                      </span>
                      <span style={{ fontSize: '0.62rem', background: 'rgba(239, 68, 68, 0.25)', color: '#FECACA', padding: '2px 6px', borderRadius: '4px', fontWeight: '700' }}>
                        Arachnophobia ✕
                      </span>
                    </div>
                  </div>

                  <div style={{ background: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.4)', borderRadius: '8px', padding: '8px' }}>
                    <div style={{ fontSize: '0.68rem', fontWeight: '800', color: '#FDE68A', marginBottom: '4px' }}>
                      🌫️ VEILS ({lang === 'fr' ? 'Fondu au noir' : 'Fade to Black'})
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                      <span style={{ fontSize: '0.62rem', background: 'rgba(245, 158, 11, 0.25)', color: '#FEF3C7', padding: '2px 6px', borderRadius: '4px', fontWeight: '700' }}>
                        Intimate Romance 〰
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Shared Quest Log */}
              {activeTab === 2 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, animation: 'fadeIn 0.3s ease' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Feather size={14} color="#F4D068" />
                      <span style={{ fontSize: '0.78rem', fontWeight: '800', color: '#F4D068' }}>
                        {loc.experience.mockup.questLogTitle}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.62rem', color: '#9DA8C3' }}>{loc.experience.mockup.questLogSession}</span>
                  </div>

                  <div style={{ background: 'var(--lp-surface)', borderRadius: '10px', padding: '10px', border: '1px solid var(--lp-border)', flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <p style={{ fontSize: '0.68rem', color: 'var(--lp-text-soft)', margin: 0, lineHeight: 1.45 }}>
                      {loc.experience.mockup.questLogText}
                    </p>
                    <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '6px', fontSize: '0.62rem', color: '#9DA8C3', display: 'flex', justifyContent: 'space-between' }}>
                      <span>{loc.experience.mockup.questLogGroupNotes}</span>
                      <span style={{ color: '#F4D068', fontWeight: '700' }}>{loc.experience.mockup.questLogSealedLore}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
