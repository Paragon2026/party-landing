import React, { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';

export const PhoneVideoPlayer = ({ type = 'quests', style = {} }) => {
  const { loc, lang } = useTranslation();
  const [selectedSubView, setSelectedSubView] = useState(0);

  // Define screenshots configuration per section type
  const screenConfigs = {
    discovery: {
      tabs: [
        { label: lang === 'fr' ? '📖 Livre Quêtes' : '📖 Quests Book', src: '/screenshots/screen-hero-quests.png', alt: 'Quests Tab' },
        { label: lang === 'fr' ? '📑 Vue Grille' : '📑 Grid View', src: '/screenshots/screen-quests-grid.png', alt: 'Quests Grid' }
      ]
    },
    quests: {
      tabs: [
        { label: lang === 'fr' ? '📖 Livre Quêtes' : '📖 Quests Book', src: '/screenshots/screen-hero-quests.png', alt: 'Quests Tab' },
        { label: lang === 'fr' ? '📑 Vue Grille' : '📑 Grid View', src: '/screenshots/screen-quests-grid.png', alt: 'Quests Grid' }
      ]
    },
    scheduling: {
      tabs: [
        { label: lang === 'fr' ? '🗺️ Tables & Lieux' : '🗺️ Tables & Venues', src: '/screenshots/screen-social-campaigns.png', alt: 'Campaign Social Tab' },
        { label: lang === 'fr' ? '⚙️ Profil & Zones' : '⚙️ Profile & Areas', src: '/screenshots/screen-profile-settings.png', alt: 'Profile Settings' }
      ]
    },
    experience: {
      tabs: [
        { label: lang === 'fr' ? '☸️ Roue Karma' : '☸️ Karma Wheel', src: '/screenshots/screen-karma-modal.png', alt: 'Karma Modal' },
        { label: lang === 'fr' ? '👤 Profil Aventurier' : '👤 Profile Settings', src: '/screenshots/screen-profile-settings.png', alt: 'Profile Tab' }
      ]
    },
    gm: {
      tabs: [
        { label: lang === 'fr' ? '📜 Quest Log MJ' : '📜 GM Quest Log', src: '/screenshots/screen-gm-manager.png', alt: 'GM Manager' }
      ]
    }
  };

  const currentConfig = screenConfigs[type] || screenConfigs.discovery;
  const currentTab = currentConfig.tabs[selectedSubView] || currentConfig.tabs[0];

  return (
    <div className="lp-phone-container" style={style}>
      <div className="lp-phone-mockup">
        {/* Sub-tab pills to toggle between real app screenshots */}
        {currentConfig.tabs.length > 1 && (
          <div style={{
            position: 'absolute',
            top: '-42px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '6px',
            background: 'rgba(15, 20, 35, 0.92)',
            padding: '4px',
            borderRadius: '20px',
            border: '1.5px solid var(--lp-border)',
            backdropFilter: 'blur(10px)',
            zIndex: 10,
            whiteSpace: 'nowrap',
            boxShadow: '0 8px 24px rgba(0,0,0,0.6)'
          }}>
            {currentConfig.tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedSubView(idx)}
                style={{
                  background: selectedSubView === idx ? 'linear-gradient(135deg, #F4D068, #D97724)' : 'transparent',
                  color: selectedSubView === idx ? '#111' : '#D6DCE8',
                  border: 'none',
                  borderRadius: '14px',
                  padding: '4px 10px',
                  fontSize: '0.72rem',
                  fontWeight: '800',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        <div className="lp-phone-screen">
          <img
            src={currentTab.src}
            alt={currentTab.alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
              transition: 'opacity 0.25s ease-in-out'
            }}
          />
        </div>
      </div>
    </div>
  );
};
