import React, { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Sparkles, Calendar, MessageSquare, Clock } from 'lucide-react';

export const InteractivePhoneScheduling = () => {
  const { lang } = useTranslation();
  const [view, setView] = useState('heatmap'); // 'heatmap' | 'poll'

  return (
    <div className="lp-phone-container">
      <div className="lp-phone-mockup" style={{ transform: 'rotateY(6deg) rotateX(2deg)' }}>
        {/* In-screen Top Mode Switcher */}
        <div style={{
          position: 'absolute',
          top: '-46px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '6px',
          background: 'rgba(15, 20, 35, 0.95)',
          padding: '4px',
          borderRadius: '20px',
          border: '1.5px solid var(--lp-border)',
          backdropFilter: 'blur(12px)',
          zIndex: 20,
          whiteSpace: 'nowrap',
          boxShadow: '0 8px 24px rgba(0,0,0,0.6)'
        }}>
          <button
            onClick={() => setView('heatmap')}
            style={{
              background: view === 'heatmap' ? 'linear-gradient(135deg, #F4D068, #D97724)' : 'transparent',
              color: view === 'heatmap' ? '#111' : '#D6DCE8',
              border: 'none',
              borderRadius: '16px',
              padding: '5px 12px',
              fontSize: '0.74rem',
              fontWeight: '800',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'all 0.2s ease'
            }}
          >
            <Calendar size={13} />
            <span>{lang === 'fr' ? 'Grille Disponibilités' : 'Availability Heatmap'}</span>
          </button>

          <button
            onClick={() => setView('poll')}
            style={{
              background: view === 'poll' ? 'linear-gradient(135deg, #F4D068, #D97724)' : 'transparent',
              color: view === 'poll' ? '#111' : '#D6DCE8',
              border: 'none',
              borderRadius: '16px',
              padding: '5px 12px',
              fontSize: '0.74rem',
              fontWeight: '800',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              transition: 'all 0.2s ease'
            }}
          >
            <MessageSquare size={13} />
            <span>{lang === 'fr' ? 'Sondage Groupe' : 'Group Chat Poll'}</span>
          </button>
        </div>

        <div className="lp-phone-screen" style={{ position: 'relative', cursor: 'default' }}>
          <img
            src={view === 'heatmap' ? '/screenshots/screen-heatmap-matrix.png' : '/screenshots/screen-chat-scheduling-poll.png'}
            alt={view === 'heatmap' ? 'Onboarding Heatmap Matrix' : 'Group Chat Scheduling Poll'}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'top center',
              display: 'block',
              transition: 'opacity 0.25s ease-in-out'
            }}
          />

          {/* In-Screen Toast Helper */}
          <div style={{
            position: 'absolute',
            bottom: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(15, 20, 35, 0.92)',
            border: '1px solid var(--lp-gold)',
            color: '#F4D068',
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '0.68rem',
            fontWeight: '800',
            pointerEvents: 'none',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 14px rgba(0,0,0,0.6)',
            whiteSpace: 'nowrap'
          }}>
            {view === 'heatmap' 
              ? (lang === 'fr' ? '📅 Matrice 24/7 de l\'Onboarding' : '📅 Onboarding 24/7 Availability Matrix')
              : (lang === 'fr' ? '💬 Créneaux suggérés dans le groupe' : '💬 Suggested Time Slots in Chat')}
          </div>
        </div>
      </div>
    </div>
  );
};
