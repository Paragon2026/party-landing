import React from 'react';
import { Icon } from '../components/Icons';

// The app's frame around every screen (party-app TopHeader, Explorer's toolbar,
// NavigationSwipeBar, the table chat header), as of the two-mode app: Player
// and GM; a community is run from its own page.

const MODE_IDS = ['player', 'gm'];
const NAV_ICONS = {
  player: ['compass', 'dice', 'message'],
  gm: ['plusCircle', 'scroll', 'message'],
};

/** Logo · mode switch · bell · Friends · avatar. `onMode` makes the switch clickable. */
export function AppHeader({ mode, labels, aria, onMode }) {
  const idx = Math.max(0, MODE_IDS.indexOf(mode));
  return (
    <div className="ph-header">
      <img className="ph-logo" src={`${import.meta.env.BASE_URL}logo-128.png`} alt="" width="28" height="28" />
      <div className="ph-header__right">
        <div className="ph-switch" role="group" aria-label={aria.mode}>
          <span className="ph-switch__thumb" aria-hidden="true"
            style={{ width: `calc((100% - 4px) / ${MODE_IDS.length})`, left: `calc(2px + ${idx} * (100% - 4px) / ${MODE_IDS.length})` }} />
          {MODE_IDS.map((id, i) => (
            <button key={id} type="button" className="ph-switch__opt" aria-pressed={id === mode}
              tabIndex={onMode ? 0 : -1} onClick={onMode ? () => onMode(id) : undefined}
              style={onMode ? undefined : { cursor: 'default' }}>
              {labels[i]}
            </button>
          ))}
        </div>
        <span className="ph-pill" role="img" aria-label={aria.notifications}><Icon name="bell" size={18} /></span>
        <span className="ph-pill" role="img" aria-label={aria.friends}><Icon name="users" size={18} /></span>
        <span className="ph-pill ph-pill--avatar" role="img" aria-label={aria.me}>L</span>
      </div>
    </div>
  );
}

/** Explorer's toolbar: search, Games | Communities, place · Last minute · Filters, then count · sort · alerts. */
export function ExplorerBar({ tab, onTab, c }) {
  const games = tab === 'games';
  return (
    <div className="ph-toolbar">
      <div className="ph-search"><Icon name="search" size={15} />{c.search[tab]}</div>
      <div className="p-segmented" role="tablist" aria-label={c.aria.browse}>
        {['games', 'communities'].map((id) => (
          <button key={id} type="button" role="tab" className="p-segmented__item" aria-selected={id === tab}
            onClick={() => onTab(id)}>
            <span>{c.tabs[id]}</span>
          </button>
        ))}
      </div>
      <div className="p-chip-row">
        <span className="p-chip"><Icon name="pin" size={15} />{c.place}</span>
        {games && <span className="p-chip"><Icon name="userPlus" size={15} />{c.lastMinute}</span>}
        <span className="p-chip"><Icon name="sliders" size={15} />{c.filters}</span>
      </div>
      {!games && (
        <div className="p-chip-row" style={{ justifyContent: 'flex-end' }}>
          <span className="p-chip"><Icon name="plus" size={15} />{c.addCommunity}</span>
        </div>
      )}
      <div className="ph-results">
        <span>{c.results[tab]}</span>
        <span className="ph-sort-btn"><Icon name="arrowUpDown" size={15} />{c.sort[tab]}<Icon name="chevronDown" size={14} /></span>
        {games && <span className="ph-bell" role="img" aria-label={c.aria.alerts}><Icon name="bell" size={17} /></span>}
      </div>
    </div>
  );
}

/** The bottom bar of a mode, `active` = index of the current tab; `badges` by index. */
export function BottomNav({ mode, labels, active, badges = {} }) {
  return (
    <div className="ph-nav">
      {labels.map((label, i) => (
        <span key={label} className={`ph-tab${i === active ? ' ph-tab--on' : ''}`}>
          <span className="p-badge-host">
            <Icon name={NAV_ICONS[mode][i]} size={20} />
            {badges[i] > 0 && <span className="p-badge-count">{badges[i]}</span>}
          </span>
          {label}
        </span>
      ))}
    </div>
  );
}

/** A table's conversation: back · title · Table · Map, the info strip and the three tabs. */
export function ChatHeader({ ch, tab }) {
  return (
    <>
      <div className="ph-chat-head">
        <span className="ph-chip-btn"><Icon name="arrowLeft" size={15} />{ch.back}</span>
        <div className="ph-chat-head__title">
          <b>{ch.title}</b>
          <small><Icon name="shield" size={12} color="var(--party-amber)" />{ch.gm}</small>
        </div>
        <span className="ph-chip-btn"><Icon name="users" size={14} />{ch.table}</span>
        <span className="ph-chip-btn"><Icon name="pin" size={14} />{ch.map}</span>
      </div>
      <div className="ph-chat-info">
        <span><Icon name="info" size={14} />{ch.info}</span>
        <span><Icon name="calendar" size={14} />{ch.date}<Icon name="chevronDown" size={14} /></span>
      </div>
      <div className="ph-chat-tabs">
        <div className="p-segmented">
          {ch.tabs.map((label, i) => (
            <span key={label} className="p-segmented__item" aria-selected={i === tab}><span>{label}</span></span>
          ))}
        </div>
      </div>
    </>
  );
}
