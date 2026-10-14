import React, { useLayoutEffect, useRef, useState } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Bullets } from './Feature';
import { Icon } from './Icons';
import { PHONE } from '../phone/content';
import { AppHeader, BottomNav, ExplorerBar } from '../phone/Chrome';
import { AgendaBody, CommunitiesBody, CommunityBody, GamesBody, GmBody } from '../phone/screens';

// The clickable phone: the mode switch and the Explorer segments are real
// buttons; each mode shows its first bottom tab (Explorer · Host · Sheet).
const PLAYER_BODIES = { games: GamesBody, agenda: AgendaBody, communities: CommunitiesBody };
const GM_BADGES = { 1: 3 }; // "My campaigns": three requests to answer

const OUTER_W = 418;
const SCREEN_H = 780;

/** The clickable phone: its own state, scaled to fit its column like PhoneFrame. */
function ExplorerPhone({ mode, tab, onMode, onTab, c }) {
  const ref = useRef(null);
  const [scale, setScale] = useState(1);
  useLayoutEffect(() => {
    const parent = ref.current?.parentElement;
    if (!parent) return undefined;
    const update = () => setScale(Math.min(1, parent.clientWidth / OUTER_W || 1));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(parent);
    return () => ro.disconnect();
  }, []);
  const key = mode === 'player' ? tab : mode;
  const Body = mode === 'player' ? PLAYER_BODIES[tab] : null;
  return (
    <div ref={ref} className="phone-scaler" style={{ width: Math.round(OUTER_W * scale), height: Math.round((SCREEN_H + 28) * scale) }}>
      <div className="phone" style={{ height: SCREEN_H + 28, transform: `scale(${scale})` }}>
        <div className="phone-screen" style={{ height: SCREEN_H }}>
          <div className={`ph ph--${mode}`}>
            <AppHeader mode={mode} onMode={onMode} labels={c.modes} aria={c.aria} />
            {mode === 'player' && <ExplorerBar tab={tab} onTab={onTab} c={c} />}
            <div key={key} className="xp-fade" style={{ flex: '1 1 auto', minHeight: 0, display: 'flex', flexDirection: 'column' }}>
              {Body && <Body c={c} />}
              {mode === 'gm' && <GmBody c={c} hours={c.hours} />}
              {mode === 'community' && <CommunityBody c={c} />}
            </div>
            <BottomNav mode={mode} labels={c.nav[mode]} active={0} badges={mode === 'gm' ? GM_BADGES : undefined} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Explorer() {
  const { loc, lang } = useTranslation();
  const [mode, setMode] = useState('player');
  const [tab, setTab] = useState('games');
  const t = loc.explorer;
  const copy = mode === 'player' ? t.player[tab] : t[mode];
  const key = mode === 'player' ? tab : mode;
  return (
    <section id="explorer" className="container explorer split">
      <div className="explorer-visual">
        <div className="explorer-hint"><Icon name="pointer" size={16} color="#B85C00" />{t.hint}</div>
        <ExplorerPhone mode={mode} tab={tab} onMode={setMode} onTab={setTab} c={PHONE[lang]} />
      </div>
      <div className="explorer-copy" aria-live="polite">
        <div key={key} className="stack stack--copy xp-fade">
          <div className="eyebrow">{copy.eyebrow}</div>
          <h2 className="h2">{copy.title}</h2>
          <p className="lead">{copy.lead}</p>
          <Bullets items={copy.bullets} />
        </div>
      </div>
    </section>
  );
}
