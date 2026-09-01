import React, { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Sparkles, ChevronRight, ChevronLeft, Sliders, Shield, Crown } from 'lucide-react';

export const InteractivePhoneHero = () => {
  const { loc, lang } = useTranslation();

  // Interactive in-screen states
  const [role, setRole] = useState('player'); // 'player' | 'gm'
  const [viewMode, setViewMode] = useState('book'); // 'book' | 'grid'
  const [questIndex, setQuestIndex] = useState(0); // 0: Cthulhu, 1: Strahd, 2: Pathfinder
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Quest images array
  const questScreens = [
    '/screenshots/screen-hero-quest-1.png',
    '/screenshots/screen-hero-quest-2.png',
    '/screenshots/screen-hero-quest-3.png'
  ];

  // Resolve current active screenshot
  let currentScreenshot = questScreens[questIndex];
  if (role === 'gm') {
    currentScreenshot = '/screenshots/screen-hero-gm.png';
  } else if (filtersOpen) {
    currentScreenshot = '/screenshots/screen-hero-filters.png';
  } else if (viewMode === 'grid') {
    currentScreenshot = '/screenshots/screen-hero-grid.png';
  }

  const handleRoleToggle = () => {
    setHasInteracted(true);
    setFiltersOpen(false);
    setRole(prev => prev === 'player' ? 'gm' : 'player');
  };

  const handleViewModeToggle = () => {
    setHasInteracted(true);
    setFiltersOpen(false);
    setViewMode(prev => prev === 'book' ? 'grid' : 'book');
  };

  const handleNextQuest = (e) => {
    e.stopPropagation();
    setHasInteracted(true);
    setFiltersOpen(false);
    setQuestIndex(prev => (prev + 1) % 3);
  };

  const handlePrevQuest = (e) => {
    e.stopPropagation();
    setHasInteracted(true);
    setFiltersOpen(false);
    setQuestIndex(prev => (prev - 1 + 3) % 3);
  };

  const handleFiltersToggle = () => {
    setHasInteracted(true);
    setFiltersOpen(prev => !prev);
  };

  return (
    <div className="lp-phone-container">
      <div className="lp-phone-mockup">
        {/* Interactive Floating Hint Badge */}
        <div style={{
          position: 'absolute',
          top: '-46px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(15, 20, 35, 0.95)',
          padding: '6px 14px',
          borderRadius: '20px',
          border: '1.5px solid var(--lp-gold)',
          backdropFilter: 'blur(12px)',
          zIndex: 20,
          whiteSpace: 'nowrap',
          boxShadow: '0 8px 24px rgba(244, 208, 104, 0.25)',
          animation: 'pulse-border 2.5s infinite alternate'
        }}>
          <Sparkles size={14} color="#F4D068" />
          <span style={{ fontSize: '0.74rem', fontWeight: '800', color: '#FFF8E7' }}>
            {lang === 'fr' ? '👆 Écran interactif : Clique sur les boutons et flèches' : '👆 Interactive screen : Tap toggles & arrows to test'}
          </span>
        </div>

        <div className="lp-phone-screen" style={{ position: 'relative', cursor: 'default', userSelect: 'none' }}>
          {/* Real App Screenshot Image */}
          <img
            src={currentScreenshot}
            alt="Party App Real Screenshot"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'top center',
              display: 'block',
              transition: 'opacity 0.2s ease-in-out'
            }}
          />

          {/* ========================================================= */}
          {/* IN-SCREEN INTERACTIVE CLICKABLE HITBOXES & HINTS           */}
          {/* ========================================================= */}

          {/* 1. Top Header Role Toggle Pill (Player ↔ GM) */}
          <div
            onClick={handleRoleToggle}
            title={role === 'player' ? (lang === 'fr' ? 'Passer en mode Maître du Jeu (MJ)' : 'Switch to Game Master (GM) Mode') : (lang === 'fr' ? 'Passer en mode Joueur' : 'Switch to Player Mode')}
            style={{
              position: 'absolute',
              top: '1.2%',
              left: '32%',
              width: '45%',
              height: '5.8%',
              cursor: 'pointer',
              borderRadius: '24px',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="lp-interactive-hotspot"
          >
            {!hasInteracted && (
              <span className="lp-hotspot-pulse" style={{ width: '28px', height: '28px' }} />
            )}
          </div>

          {/* 2. Sub-Header Book / Grid Toggle Pill (only in Player mode) */}
          {role === 'player' && !filtersOpen && (
            <div
              onClick={handleViewModeToggle}
              title={viewMode === 'book' ? (lang === 'fr' ? 'Passer en Vue Grille' : 'Switch to Grid View') : (lang === 'fr' ? 'Passer en Vue Livre' : 'Switch to Book View')}
              style={{
                position: 'absolute',
                top: '13.2%',
                left: '34%',
                width: '32%',
                height: '5.2%',
                cursor: 'pointer',
                borderRadius: '16px',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              className="lp-interactive-hotspot"
            >
              {!hasInteracted && (
                <span className="lp-hotspot-pulse" style={{ width: '22px', height: '22px' }} />
              )}
            </div>
          )}

          {/* 3. Sub-Header Filters Pill */}
          {role === 'player' && (
            <div
              onClick={handleFiltersToggle}
              title={filtersOpen ? (lang === 'fr' ? 'Fermer les filtres' : 'Close Filters') : (lang === 'fr' ? 'Ouvrir les filtres' : 'Open Filters')}
              style={{
                position: 'absolute',
                top: '13.2%',
                left: '4%',
                width: '28%',
                height: '5.2%',
                cursor: 'pointer',
                borderRadius: '16px',
                zIndex: 10
              }}
              className="lp-interactive-hotspot"
            />
          )}

          {/* 4. Carousel Next Arrow Button (>) in Book View */}
          {role === 'player' && viewMode === 'book' && !filtersOpen && (
            <div
              onClick={handleNextQuest}
              title={lang === 'fr' ? 'Quête suivante' : 'Next Quest'}
              style={{
                position: 'absolute',
                top: '50.5%',
                right: '4.5%',
                width: '14%',
                height: '8%',
                cursor: 'pointer',
                borderRadius: '50%',
                zIndex: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              className="lp-interactive-hotspot"
            >
              {!hasInteracted && (
                <span className="lp-hotspot-pulse" style={{ width: '24px', height: '24px' }} />
              )}
            </div>
          )}

          {/* 5. Carousel Prev Arrow Button (<) in Book View */}
          {role === 'player' && viewMode === 'book' && !filtersOpen && (
            <div
              onClick={handlePrevQuest}
              title={lang === 'fr' ? 'Quête précédente' : 'Previous Quest'}
              style={{
                position: 'absolute',
                top: '50.5%',
                left: '4.5%',
                width: '14%',
                height: '8%',
                cursor: 'pointer',
                borderRadius: '50%',
                zIndex: 12
              }}
              className="lp-interactive-hotspot"
            />
          )}

          {/* 6. In-Screen Toast feedback */}
          {hasInteracted && (
            <div style={{
              position: 'absolute',
              bottom: '12%',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(15, 20, 35, 0.92)',
              border: '1px solid var(--lp-gold)',
              color: '#F4D068',
              padding: '4px 10px',
              borderRadius: '12px',
              fontSize: '0.66rem',
              fontWeight: '800',
              pointerEvents: 'none',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.6)',
              animation: 'fadeIn 0.2s ease'
            }}>
              {role === 'gm' ? '👑 Mode Maître du Jeu' : (viewMode === 'grid' ? '📑 Vue Grille' : `📖 Quête ${questIndex + 1}/3`)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
