import React, { useLayoutEffect, useRef, useState } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Bullets } from './Feature';
import { Icon } from './Icons';

// Bodies of the five phone states: 390 px HTML, inline styles, same format as
// src/screens/*.html. The header (mode switch) and the directory bar (tabs) are
// real React buttons below, so the phone can be clicked.
import games from '../screens/explorer/games.html?raw';
import communities from '../screens/explorer/communities.html?raw';
import agenda from '../screens/explorer/agenda.html?raw';
import gm from '../screens/explorer/gm.html?raw';
import community from '../screens/explorer/community.html?raw';

const BODIES = { games, communities, agenda, gm, community };

const SANS = "'Plus Jakarta Sans', system-ui, sans-serif";
const SERIF = "'Cinzel', Georgia, serif";

// One look per mode: parchment (Player), obsidian (GM), theme-steward (Community).
const THEME = {
  player: {
    screen: '#F4ECE0', text: '#1A1008',
    header: 'linear-gradient(180deg, #EAD8B8 0%, #DFCAAA 100%)', line: '#B8860B', word: '#6E1212',
    box: { background: 'linear-gradient(180deg, #DFCAAA 0%, #CEB592 100%)', border: '1.5px solid #B8860B', boxShadow: 'inset 0 2px 5px rgba(74, 53, 37, 0.35)' },
    on: { background: 'linear-gradient(135deg, #8B1111 0%, #630808 100%)', border: '1.5px solid #B8860B', color: '#FFFFFF', textShadow: '0 1px 3px rgba(0,0,0,0.7)' },
    off: '#4A3525',
  },
  gm: {
    screen: '#18110B', text: '#FFF8E7',
    header: 'linear-gradient(180deg, #2A1C12 0%, #1A110A 100%)', line: 'rgba(244, 196, 48, 0.45)', word: '#F4C430',
    box: { background: 'linear-gradient(180deg, #18110B 0%, #0D0804 100%)', border: '1.5px solid rgba(244, 196, 48, 0.45)', boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.85)' },
    on: { background: 'linear-gradient(135deg, #B85C00 0%, #8C4000 100%)', border: '1.5px solid #F4C430', color: '#FFF8E7', textShadow: '0 1px 4px rgba(0,0,0,0.9)' },
    off: '#D4C5B3',
  },
  community: {
    screen: '#241209', text: '#F6EBDC',
    header: 'linear-gradient(180deg, #43291B 0%, #2A1710 100%)', line: 'rgba(228, 205, 149, 0.45)', word: '#E4CD95',
    box: { background: 'linear-gradient(180deg, #241209 0%, #140A05 100%)', border: '1.5px solid rgba(228, 205, 149, 0.45)', boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.85)' },
    on: { background: 'rgba(185, 134, 46, 0.18)', border: '1.5px solid rgba(228, 205, 149, 0.45)', color: '#E4CD95' },
    off: '#B89A7D',
  },
};

const MODES = [['player', 'Joueur'], ['gm', 'MJ'], ['community', 'Comm.']];
const TABS = [['games', 'Parties', 'scroll'], ['communities', 'Communautés', 'landmark'], ['agenda', 'Agenda', 'calendarDays']];
const PLACEHOLDER = { games: 'Rechercher une partie ou un MJ…', communities: 'Rechercher une communauté, une ville ou un lieu…', agenda: 'Rechercher une communauté, une ville ou un lieu…' };
const RESET = { margin: 0, padding: 0, cursor: 'pointer', appearance: 'none', WebkitAppearance: 'none', font: 'inherit' };

function AppHeader({ mode, onMode }) {
  const th = THEME[mode];
  return (
    <div style={{ padding: '14px 18px 10px', background: th.header, borderBottom: `1.5px solid ${th.line}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 6 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <img src="/logo-128.png" alt="" width="28" height="28" style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover', border: `1.5px solid ${th.line}` }} />
        <div style={{ fontFamily: SERIF, fontSize: '1.05rem', fontWeight: 900, color: th.word, letterSpacing: 1 }}>PARTY</div>
      </div>
      <div role="group" aria-label="Mode" style={{ display: 'flex', width: 136, height: 36, boxSizing: 'border-box', padding: 2, borderRadius: 20, ...th.box }}>
        {MODES.map(([id, label]) => {
          const on = id === mode;
          return (
            <button key={id} type="button" aria-pressed={on} onClick={() => onMode(id)}
              style={{ ...RESET, flex: 1, height: '100%', borderRadius: 18, fontFamily: SANS, fontSize: '0.6875rem', fontWeight: 600, letterSpacing: 0.2,
                transition: 'background 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                ...(on ? th.on : { background: 'transparent', border: '1.5px solid transparent', color: th.off }) }}>
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DirectoryBar({ tab, onTab }) {
  return (
    <div style={{ padding: '10px 12px', background: '#EADCBF', borderBottom: '1.5px solid #B8860B', display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <span style={{ position: 'absolute', left: 12, display: 'flex' }}><Icon name="search" size={15} color="#B85C00" /></span>
        <div style={{ width: '100%', background: '#FFFFFF', color: '#4A3525', border: '1.5px solid #B8860B', borderRadius: 20, padding: '7px 32px 7px 34px', fontFamily: SANS, fontSize: '0.82rem', fontWeight: 600 }}>{PLACEHOLDER[tab]}</div>
      </div>
      <div role="tablist" aria-label="Parcourir" style={{ display: 'flex', gap: 3, background: '#FFFFFF', border: '1.5px solid #B8860B', borderRadius: 12, padding: 3 }}>
        {TABS.map(([id, label, icon]) => {
          const on = id === tab;
          const fg = on ? '#FFFFFF' : '#4A3525';
          return (
            <button key={id} type="button" role="tab" aria-selected={on} onClick={() => onTab(id)}
              style={{ ...RESET, flex: 1, minHeight: 44, borderRadius: 9, border: 'none', padding: '6px 4px', background: on ? '#B85C00' : 'transparent', color: fg,
                fontFamily: SANS, fontSize: '0.8125rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
              <Icon name={icon} size={14} color={fg} /><span>{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

const OUTER_W = 418;
const SCREEN_H = 780;

/** The clickable phone: its own state, scaled to fit its column like PhoneFrame. */
function ExplorerPhone({ mode, tab, onMode, onTab }) {
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
  const th = THEME[mode];
  return (
    <div ref={ref} className="phone-scaler" style={{ width: Math.round(OUTER_W * scale), height: Math.round((SCREEN_H + 28) * scale) }}>
      <div className="phone" style={{ height: SCREEN_H + 28, transform: `scale(${scale})` }}>
        <div className="phone-screen" style={{ height: SCREEN_H, background: th.screen, color: th.text }}>
          <AppHeader mode={mode} onMode={onMode} />
          {mode === 'player' && <DirectoryBar tab={tab} onTab={onTab} />}
          <div key={key} className="xp-fade" dangerouslySetInnerHTML={{ __html: BODIES[key] }} />
        </div>
      </div>
    </div>
  );
}

export function Explorer() {
  const { loc } = useTranslation();
  const [mode, setMode] = useState('player');
  const [tab, setTab] = useState('games');
  const t = loc.explorer;
  const copy = mode === 'player' ? t.player[tab] : t[mode];
  const key = mode === 'player' ? tab : mode;
  return (
    <section id="explorer" className="container explorer split">
      <div className="explorer-visual">
        <div className="explorer-hint"><Icon name="pointer" size={16} color="#B85C00" />{t.hint}</div>
        <ExplorerPhone mode={mode} tab={tab} onMode={setMode} onTab={setTab} />
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
