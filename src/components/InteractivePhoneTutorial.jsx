import React, { useState, useEffect } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Sparkles, User, Shield, Dice5, CheckCircle, ArrowRight } from 'lucide-react';

export const InteractivePhoneTutorial = () => {
  const { lang } = useTranslation();
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: lang === 'fr' ? '1. Choix du Profil' : '1. Create Adventurer',
      badge: lang === 'fr' ? 'Tutoriel Guidé' : 'Guided Onboarding',
      desc: lang === 'fr' ? 'Sélectionne ton avatar et ton pseudonyme' : 'Choose your avatar and adventurer alias'
    },
    {
      title: lang === 'fr' ? '2. Rôle & Préférences' : '2. Role & Playstyle',
      badge: lang === 'fr' ? 'Joueur ou MJ' : 'Player or GM',
      desc: lang === 'fr' ? 'Choisis tes systèmes : D&D 5e, Cthulhu, OSR...' : 'Select your systems: D&D 5e, Cthulhu, OSR...'
    },
    {
      title: lang === 'fr' ? '3. Lignes & Voiles' : '3. Safety Boundaries',
      badge: lang === 'fr' ? 'Matrice de Sécurité' : 'Safety Matrix',
      desc: lang === 'fr' ? 'Définis tes limites pour jouer sereinement' : 'Set your boundaries for total peace of mind'
    },
    {
      title: lang === 'fr' ? '4. Prêt pour l\'Aventure' : '4. Roll for Initiative',
      badge: lang === 'fr' ? 'Hub de Quêtes' : 'Quest Log Ready',
      desc: lang === 'fr' ? 'Rejoins ta première table en 1 clic !' : 'Join your first campaign in 1 click!'
    }
  ];

  // Auto-play loop every 3.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setStep(prev => (prev + 1) % steps.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="lp-phone-container">
      <div className="lp-phone-mockup" style={{ transform: 'rotateY(-6deg) rotateX(2deg)' }}>
        {/* Step Progress Indicators */}
        <div style={{
          position: 'absolute',
          top: '-46px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          background: 'rgba(15, 20, 35, 0.95)',
          padding: '6px 14px',
          borderRadius: '20px',
          border: '1.5px solid var(--lp-border)',
          backdropFilter: 'blur(12px)',
          zIndex: 20,
          whiteSpace: 'nowrap',
          boxShadow: '0 8px 24px rgba(0,0,0,0.6)'
        }}>
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setStep(idx)}
              style={{
                width: step === idx ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: step === idx ? 'linear-gradient(135deg, #F4D068, #D97724)' : 'rgba(255,255,255,0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              title={s.title}
            />
          ))}
        </div>

        <div className="lp-phone-screen" style={{ position: 'relative', background: '#0D111E', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {/* Top Tutorial Header */}
          <div style={{ borderBottom: '1.5px solid var(--lp-border)', paddingBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.65rem', color: '#F4D068', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                ✨ {steps[step].badge}
              </span>
              <span style={{ fontSize: '0.65rem', background: 'rgba(244, 208, 104, 0.15)', border: '1px solid #F4D068', color: '#F4D068', padding: '2px 8px', borderRadius: '10px', fontWeight: '800' }}>
                {step + 1}/4
              </span>
            </div>
            <h3 style={{ fontFamily: 'Cinzel', fontSize: '1.05rem', margin: '4px 0 2px 0', color: '#FFF8E7', fontWeight: '900' }}>
              {steps[step].title}
            </h3>
            <p style={{ fontSize: '0.74rem', color: 'var(--lp-text-soft)', margin: 0 }}>
              {steps[step].desc}
            </p>
          </div>

          {/* Dynamic Interactive Tutorial Visual Frame */}
          <div style={{ flex: 1, margin: '14px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {step === 0 && (
              <div style={{ background: 'var(--lp-surface)', border: '1.5px solid var(--lp-border-active)', borderRadius: '14px', padding: '16px', textAlign: 'center', animation: 'fadeIn 0.3s ease' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', margin: '0 auto 10px auto', border: '2px solid #F4D068', overflow: 'hidden', boxShadow: '0 0 16px rgba(244, 208, 104, 0.4)' }}>
                  <img src="/party_logo.jpg" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ fontFamily: 'Cinzel', fontSize: '1rem', color: '#FFF8E7', fontWeight: '800' }}>Paragon</div>
                <div style={{ fontSize: '0.72rem', color: '#4ADE80', marginTop: '2px', fontWeight: '700' }}>✓ {lang === 'fr' ? 'Profil Vérifié' : 'Verified Adventurer'}</div>
              </div>
            )}

            {step === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', animation: 'fadeIn 0.3s ease' }}>
                <div style={{ background: 'linear-gradient(135deg, rgba(217, 119, 36, 0.2) 0%, rgba(139, 17, 17, 0.2) 100%)', border: '1.5px solid #F4D068', borderRadius: '10px', padding: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Shield size={20} color="#F4D068" />
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#FFF8E7' }}>Dungeons &amp; Dragons 5e</div>
                    <div style={{ fontSize: '0.68rem', color: '#9DA8C3' }}>{lang === 'fr' ? 'Niveau : Expérimenté' : 'Experience : Experienced'}</div>
                  </div>
                </div>
                <div style={{ background: 'var(--lp-surface)', border: '1px solid var(--lp-border)', borderRadius: '10px', padding: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Dice5 size={20} color="#4ADE80" />
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: '800', color: '#FFF8E7' }}>Call of Cthulhu 7e</div>
                    <div style={{ fontSize: '0.68rem', color: '#9DA8C3' }}>{lang === 'fr' ? 'Niveau : Tous niveaux' : 'Experience : Any Level'}</div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div style={{ background: 'var(--lp-surface)', border: '1.5px solid rgba(239, 68, 68, 0.5)', borderRadius: '12px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px', animation: 'fadeIn 0.3s ease' }}>
                <div style={{ fontSize: '0.74rem', fontWeight: '800', color: '#FCA5A5' }}>
                  🛡️ {lang === 'fr' ? 'Sécurité & Bienveillance' : 'Safety & Respect'}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  <span style={{ fontSize: '0.66rem', background: 'rgba(239, 68, 68, 0.2)', border: '1px solid #EF4444', color: '#FECACA', padding: '3px 8px', borderRadius: '6px', fontWeight: '700' }}>
                    🚫 No PVP ✕
                  </span>
                  <span style={{ fontSize: '0.66rem', background: 'rgba(245, 158, 11, 0.2)', border: '1px solid #F59E0B', color: '#FEF3C7', padding: '3px 8px', borderRadius: '6px', fontWeight: '700' }}>
                    🌫️ Romance (Veil) 〰
                  </span>
                </div>
              </div>
            )}

            {step === 3 && (
              <div style={{ background: 'linear-gradient(135deg, #8B1111 0%, #D97724 100%)', borderRadius: '14px', padding: '16px', textAlign: 'center', color: '#FFF8E7', boxShadow: '0 8px 24px rgba(217, 119, 36, 0.5)', animation: 'fadeIn 0.3s ease' }}>
                <CheckCircle size={32} color="#FFF" style={{ margin: '0 auto 8px auto' }} />
                <div style={{ fontFamily: 'Cinzel', fontSize: '1.1rem', fontWeight: '900' }}>
                  {lang === 'fr' ? 'Bienvenue à Table !' : 'Welcome to the Party!'}
                </div>
                <div style={{ fontSize: '0.74rem', color: '#FFF8E7', marginTop: '4px', opacity: 0.9 }}>
                  {lang === 'fr' ? 'Explore les quêtes et rejoins ton premier groupe.' : 'Browse active quests and find your dream group.'}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Step Controller */}
          <button
            onClick={() => setStep(prev => (prev + 1) % steps.length)}
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #F4D068 0%, #D97724 100%)',
              border: 'none',
              borderRadius: '12px',
              padding: '10px',
              color: '#111',
              fontWeight: '900',
              fontSize: '0.82rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: '0 4px 14px rgba(244, 208, 104, 0.3)'
            }}
          >
            <span>{step === 3 ? (lang === 'fr' ? 'Revoir le tutoriel' : 'Restart Tutorial') : (lang === 'fr' ? 'Étape suivante' : 'Next Step')}</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
