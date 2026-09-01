import React, { useState, useEffect } from 'react';
import { Sparkles, Download } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { InteractivePhoneHero } from './InteractivePhoneHero';

export const Hero = () => {
  const { loc, lang } = useTranslation();
  const [inviteData, setInviteData] = useState(null);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.location.search) {
        const params = new URLSearchParams(window.location.search);
        const camp = params.get('campaign') || params.get('c');
        const inviter = params.get('inviter') || params.get('inv');
        if (camp || inviter) {
          setInviteData({
            inviterName: inviter ? decodeURIComponent(inviter) : (lang === 'fr' ? 'Un Compagnon de Jeu' : 'A Fellow Adventurer'),
            campaignTitle: 'Curse of Strahd: Barovia'
          });
        }
      }
    } catch (e) {}
  }, [lang]);

  return (
    <section className="lp-hero lp-container">
      <div className="lp-hero-copy">
        {/* Dynamic Invite Banner if coming from a referral link */}
        {inviteData && (
          <div className="lp-invite-banner">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Sparkles size={22} color="#F4D068" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.86rem', fontWeight: '800', color: '#FFF8E7' }}>
                  {loc.hero.inviteFrom} <span style={{ color: '#F4D068', textDecoration: 'underline' }}>{inviteData.inviterName}</span> !
                </div>
                <div style={{ fontSize: '0.75rem', color: '#D6DCE8' }}>
                  {loc.hero.invitedToJoin} <strong>{inviteData.campaignTitle}</strong>. {loc.hero.downloadAppToClaim}
                </div>
              </div>
            </div>
            <a 
              href="#download"
              className="lp-cta-primary"
              style={{ padding: '8px 16px', fontSize: '0.78rem', whiteSpace: 'nowrap' }}
            >
              {loc.hero.claimSeat}
            </a>
          </div>
        )}

        <h1 className="lp-title-display">
          {loc.hero.titlePrefix} <br />
          <span className="lp-accent-gold">{loc.hero.titleSuffix}</span>
        </h1>

        <p style={{ fontSize: 'clamp(1rem, 1.2vw, 1.18rem)', color: 'var(--lp-text-soft)', maxWidth: '520px', margin: 0, lineHeight: 1.55 }}>
          {loc.hero.subtitle}
        </p>

        {/* Action Button */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '6px' }}>
          <a href="#download" className="lp-cta-primary" style={{ padding: '14px 32px', fontSize: '1.02rem' }}>
            <Download size={18} />
            <span>{loc.hero.ctaDownload}</span>
          </a>
        </div>

        {/* Value Proposition Checklist */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem', color: 'var(--lp-text-muted)', marginTop: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#F4D068', fontWeight: '900' }}>✓</span>
            <span style={{ color: '#D6DCE8' }}>{loc.hero.badgeFree}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#F4D068', fontWeight: '900' }}>✓</span>
            <span style={{ color: '#D6DCE8' }}>{loc.hero.badgeModes}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#F4D068', fontWeight: '900' }}>✓</span>
            <span style={{ color: '#D6DCE8' }}>{loc.hero.badgeVenues}</span>
          </div>
        </div>
      </div>

      {/* Real In-Screen Interactive Phone Mockup */}
      <InteractivePhoneHero />
    </section>
  );
};
