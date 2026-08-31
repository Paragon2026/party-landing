import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Download, 
  Globe
} from 'lucide-react';

export const Hero = () => {
  const [inviteData, setInviteData] = useState(null);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.location.search) {
        const params = new URLSearchParams(window.location.search);
        const camp = params.get('campaign') || params.get('c');
        const inviter = params.get('inviter') || params.get('inv');
        if (camp || inviter) {
          setInviteData({
            inviterName: inviter ? decodeURIComponent(inviter) : 'A Fellow Adventurer',
            campaignTitle: 'Curse of Strahd: Barovia'
          });
        }
      }
    } catch (e) {}
  }, []);

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
                  Invitation from <span style={{ color: '#F4D068', textDecoration: 'underline' }}>{inviteData.inviterName}</span> !
                </div>
                <div style={{ fontSize: '0.75rem', color: '#D6DCE8' }}>
                  You were invited to join <strong>{inviteData.campaignTitle}</strong>. Download the app to claim your seat!
                </div>
              </div>
            </div>
            <a 
              href="#download"
              className="lp-cta-primary"
              style={{ padding: '8px 16px', fontSize: '0.78rem', whiteSpace: 'nowrap' }}
            >
              Claim Seat
            </a>
          </div>
        )}

        <h1 className="lp-title-display">
          Find your <br />
          <span className="lp-accent-gold">Party.</span>
        </h1>

        <p style={{ fontSize: 'clamp(1rem, 1.2vw, 1.18rem)', color: 'var(--lp-text-soft)', maxWidth: '520px', margin: 0, lineHeight: 1.55 }}>
          Discover in-person and virtual TTRPG tables with reliable players who actually show up.
        </p>

        {/* Action Button */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '6px' }}>
          <a href="#download" className="lp-cta-primary" style={{ padding: '14px 32px', fontSize: '1.02rem' }}>
            <Download size={18} />
            <span>Download</span>
          </a>
        </div>

        {/* Value Proposition Checklist */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem', color: 'var(--lp-text-muted)', marginTop: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#F4D068', fontWeight: '900' }}>✓</span>
            <span style={{ color: '#D6DCE8' }}>Free to download on iOS &amp; Android</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#F4D068', fontWeight: '900' }}>✓</span>
            <span style={{ color: '#D6DCE8' }}>In-person &amp; virtual (VTT) campaigns</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#F4D068', fontWeight: '900' }}>✓</span>
            <span style={{ color: '#D6DCE8' }}>Solves scheduling conflicts &amp; meeting venues automatically</span>
          </div>
        </div>
      </div>

      {/* 3D FLOATING PHONE MOCKUP (Actual App Discovery Feed) */}
      <div className="lp-phone-container">
        <div className="lp-phone-mockup">
          <div className="lp-phone-screen">
            {/* Top Bar inside Phone */}
            <div style={{
              background: 'linear-gradient(180deg, #1E253E 0%, #151A2C 100%)',
              padding: '12px 14px',
              borderBottom: '1.5px solid rgba(244, 208, 104, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '10px'
            }}>
              <img src="/party_logo.jpg" alt="Party" style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid #F4D068' }} />
              <span style={{ fontFamily: 'Cinzel', fontSize: '0.92rem', fontWeight: '900', color: '#F4D068', letterSpacing: '0.5px' }}>PARTY</span>
            </div>

            {/* Campaign Cards Feed */}
            <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '10px', overflowY: 'hidden' }}>
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
                      D&amp;D 5e • Ongoing Campaign
                    </span>
                    <h4 style={{ fontFamily: 'Cinzel', fontSize: '0.92rem', margin: '2px 0 0 0', color: '#FFF8E7', fontWeight: '800' }}>
                      Curse of Strahd: Barovia
                    </h4>
                  </div>
                  <span style={{ fontSize: '0.65rem', background: 'rgba(217, 119, 36, 0.2)', border: '1px solid #D97724', color: '#F4D068', padding: '2px 6px', borderRadius: '6px', fontWeight: '800' }}>
                    4/5 Seats Filled
                  </span>
                </div>

                <p style={{ fontSize: '0.72rem', color: 'var(--lp-text-soft)', margin: 0, lineHeight: 1.45 }}>
                  Under raging storm clouds, Count Strahd von Zarovich stands silhouetted against the ancient walls of Castle Ravenloft...
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '8px', fontSize: '0.68rem', color: 'var(--lp-text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={11} color="#F4D068" /> Downtown / In-Person
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#F4D068', fontWeight: '800' }}>
                    $10 / seat
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
                      Call of Cthulhu 7e • One-Shot
                    </span>
                    <h4 style={{ fontFamily: 'Cinzel', fontSize: '0.88rem', margin: '2px 0 0 0', color: '#FFF8E7' }}>
                      The Haunting of Blackwood
                    </h4>
                  </div>
                  <span style={{ fontSize: '0.65rem', background: 'rgba(56, 193, 114, 0.15)', color: '#4ADE80', padding: '2px 6px', borderRadius: '6px', fontWeight: '800' }}>
                    2/4 Seats Filled
                  </span>
                </div>
                <p style={{ fontSize: '0.7rem', color: 'var(--lp-text-soft)', margin: 0, lineHeight: 1.4 }}>
                  An eerie silence hangs over the estate as the storm gathers outside...
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '6px', fontSize: '0.68rem', color: 'var(--lp-text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Globe size={11} color="#4ADE80" /> Online
                  </span>
                  <span style={{ color: '#4ADE80', fontWeight: '700' }}>Free Seat</span>
                </div>
              </div>

              {/* Feed Bottom Banner */}
              <div style={{
                background: 'linear-gradient(135deg, #8B1111 0%, #D97724 100%)',
                borderRadius: '12px',
                padding: '10px',
                color: '#FFF8E7',
                textAlign: 'center',
                fontSize: '0.78rem',
                fontWeight: '800',
                boxShadow: '0 4px 14px rgba(217, 119, 36, 0.4)',
                marginTop: '2px'
              }}>
                Match with Active Campaigns
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
