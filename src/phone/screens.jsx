import React from 'react';
import { Icon } from '../components/Icons';
import { AppHeader, BottomNav, ChatHeader } from './Chrome';

// Screen bodies, rebuilt from the app's components: Explorer lists one line
// per table (it unfolds), a rendez-vous groups its tables under its date,
// segments are raised tiles, Cinzel only for screen titles.

/* ---- Player · Explorer ▸ Parties ------------------------------------------- */

function TableLine({ title, sub, seats }) {
  return (
    <div className="ph-line">
      <span className="ph-line__icon"><Icon name="scroll" size={18} /></span>
      <span className="ph-line__main"><b>{title}</b><small>{sub}</small></span>
      <span className="ph-line__seats">{seats}</span>
    </div>
  );
}

export function GamesBody({ c }) {
  const { open: o, group: g } = c.games;
  return (
    <div className="ph-body ph-body--list">
      <article className="p-card ph-open">
        <div className="ph-line">
          <span className="ph-line__icon"><Icon name="scroll" size={18} /></span>
          <span className="ph-line__main"><b>{o.title}</b><small>{o.sub}</small></span>
          <span className="ph-line__seats">{o.seats}</span>
        </div>
        <div className="ph-fit"><i />{o.fit}</div>
        <div className="ph-facts">
          <div><Icon name="shield" size={13} /><strong>{o.gm}</strong><Icon name="star" size={12} color="var(--party-amber)" style={{ fill: 'var(--party-amber)' }} />{o.rating}</div>
          <div><Icon name="calendar" size={13} />{o.when}</div>
          <div><Icon name="users" size={13} />{o.level}</div>
        </div>
        <div className="ph-label"><Icon name="eye" size={13} />{o.mayFeature}</div>
        <div className="ph-tags" style={{ marginTop: 4 }}>{o.flags.map((f) => <span key={f} className="ph-tag ph-tag--info">{f}</span>)}</div>
        <span className="ph-btn ph-btn--gold" style={{ marginTop: 12 }}>{o.apply}</span>
      </article>

      <section className="ph-group">
        <header className="ph-group__head">
          <span className="ph-date"><small>{g.dow}</small>{g.day}</span>
          <span className="ph-line__main"><b className="ph-group__title">{g.title}</b><small>{g.meta}</small></span>
          <Icon name="chevronDown" size={18} style={{ transform: 'rotate(180deg)' }} />
        </header>
        <div className="ph-group__rows">
          {g.rows.map(([title, sub, seats]) => (
            <div key={title} className="p-card ph-line-card"><TableLine title={title} sub={sub} seats={seats} /></div>
          ))}
          <div className="ph-propose-here">{g.propose}<Icon name="plus" size={16} /></div>
        </div>
      </section>
    </div>
  );
}

/* ---- Player · Explorer ▸ Communautés ---------------------------------------- */

function CommunityLine({ icon, name, sub, badge, tone, extra }) {
  return (
    <div className="p-card p-card--row ph-community">
      <span className="p-card__avatar"><Icon name={icon} size={19} /></span>
      <div className="p-card__body">
        <div className="p-card__title">{name}</div>
        <div className="p-card__sub">{sub}</div>
        {extra && <div className="p-card__sub" style={{ color: 'var(--party-title-color)' }}>{extra}</div>}
      </div>
      {badge && <span className={`ph-tag${tone ? ` ph-tag--${tone}` : ''}`}>{badge}</span>}
      <Icon name="chevronRight" size={18} color="var(--party-amber)" />
    </div>
  );
}

export function CommunitiesBody({ c }) {
  const m = c.communities;
  return (
    <div className="ph-body ph-body--list">
      <h3 className="ph-list-title">{m.mineTitle}</h3>
      {m.mine.map(([icon, name, sub, badge]) => (
        <CommunityLine key={name} icon={icon} name={name} sub={sub} badge={badge} />
      ))}
      <h3 className="ph-list-title">{m.discoverTitle}</h3>
      {m.discover.map(([icon, name, sub, verified, next]) => (
        <CommunityLine key={name} icon={icon} name={name} sub={sub} badge={verified} tone="success" extra={next} />
      ))}
    </div>
  );
}

/* ---- GM · Propose ▸ « Où jouerez-vous ? » ------------------------------------ */

function Choice({ on, title, sub }) {
  return (
    <div className={`ph-radio${on ? ' ph-radio--on' : ''}`}>
      <span className="ph-radio__dot" />
      <span><strong>{title}</strong>{sub && <small>{sub}</small>}</span>
    </div>
  );
}

export function WhereBody({ c }) {
  const w = c.where;
  return (
    <div className="ph-body">
      <h2 className="ph-screen-title"><Icon name="plusCircle" size={20} />{w.title}</h2>
      <Choice title={w.free[0]} sub={w.free[1]} />
      <Choice on title={w.community[0]} sub={w.community[1]} />
      <div className="ph-label" style={{ color: 'var(--party-text)' }}>{w.mineTitle}</div>
      {w.mine.map(([name, sub], i) => <Choice key={name} on={i === 0} title={name} sub={sub} />)}
      <div className="ph-search ph-search--field"><Icon name="search" size={15} />{w.search}</div>
      <div className="ph-label" style={{ color: 'var(--party-text)' }}>{w.gatheringsTitle}</div>
      <div className="ph-chips">
        {w.chips.map((label, i) => <span key={label} className={`ph-chip-pick${i === 0 ? ' is-on' : ''}`}>{label}</span>)}
      </div>
      <p className="ph-note">{w.info}</p>
    </div>
  );
}

/* ---- A community's page, owner view (Gérer) ---------------------------------- */

export function CommunityPageScreen({ c }) {
  const p = c.page;
  return (
    <div className="ph ph--player">
      <AppHeader mode="player" labels={c.modes} aria={c.aria} />
      <div className="ph-backdrop">
        <div className="ph-sheet">
          <div className="ph-sheet__head">
            <h2 className="ph-sheet__title">{p.name}</h2>
            <span className="ph-close"><Icon name="x" size={16} /></span>
          </div>
          <div className="p-card__sub">{p.meta}</div>
          <div className="ph-tags" style={{ marginTop: 8 }}>
            <span className="ph-tag ph-tag--success" style={{ borderColor: 'transparent' }}>{p.active}</span>
            <span className="ph-tag ph-tag--success" style={{ background: 'transparent' }}><Icon name="badgeCheck" size={12} />{p.verified}</span>
          </div>
          <div className="ph-owner"><Icon name="crown" size={16} />{p.owner}</div>
          <div className="ph-underline-tabs">
            {p.tabs.map((label, i) => <span key={label} className={i === p.tabs.length - 1 ? 'is-on' : undefined}>{label}</span>)}
          </div>
          <div className="p-row-group">
            {p.rows.map(([icon, title, sub], i) => (
              <div key={title} className="p-row">
                <Icon name={icon} size={20} />
                <span className="p-row__label" style={{ color: 'var(--party-title-color)' }}>{title}<span className="p-row__detail">{sub}</span></span>
                {i === 0 && <span className="p-badge-count p-badge-count--inline">3</span>}
                <Icon name="chevronRight" size={16} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Player · a table's conversation (feature rows) ------------------------ */

function TableScreen({ c, tab, sheet = false, children }) {
  return (
    <div className="ph ph--player">
      <AppHeader mode="player" labels={c.modes} aria={c.aria} />
      {!sheet && <ChatHeader ch={c.chat} tab={tab} />}
      {children}
      <BottomNav mode="player" labels={c.nav.player} active={2} />
    </div>
  );
}

export function ChatScreen({ c }) {
  const ch = c.chat;
  return (
    <TableScreen c={c} tab={0}>
      <div className="ph-msgs">
        <span className="ph-session">{ch.session}</span>
        {ch.messages.map(([who, time, text, mine]) => (
          <div key={time} className={`ph-msg${mine ? ' ph-msg--mine' : ''}`}>
            <header>{who}<span>{time}</span></header>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <div className="ph-compose"><div>{ch.compose}</div><span><Icon name="send" size={18} /></span></div>
    </TableScreen>
  );
}

export function PlanningScreen({ c }) {
  const p = c.poll;
  return (
    <TableScreen c={c} tab={2}>
      <div className="ph-body">
        <h3 className="ph-day" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '1rem', margin: 0 }}>
          <Icon name="calendar" size={18} color="var(--party-amber)" />{p.title}
        </h3>
        <div className="p-card" style={{ gap: 10 }}>
          <div className="ph-sort">{p.sort}
            <span className="p-chip" style={{ background: 'var(--select-bg)', borderColor: 'var(--select-border)', boxShadow: 'inset 0 0 0 1px var(--select-border)', color: 'var(--select-text)' }}><Icon name="vote" size={14} />{p.votes}</span>
            <span className="p-chip"><Icon name="calendar" size={14} />{p.chrono}</span>
          </div>
          <p className="p-card__text">{p.question}</p>
          {p.slots.map(([label, free, votes, kind, mine]) => (
            <div key={label} className={`ph-slot${mine ? ' ph-slot--top' : ''}`}>
              <div>
                <b>{label}</b>
                <small>{free} · {votes}
                  <span className={`ph-tag ${kind === 'common' ? 'ph-tag--success' : 'ph-tag--info'}`}>{kind === 'common' ? p.common : p.manual}</span>
                </small>
              </div>
              {mine
                ? <span className="ph-btn ph-btn--gold" style={{ minHeight: 36 }}><Icon name="check" size={14} />{p.voted}</span>
                : <span className="ph-btn ph-btn--line" style={{ minHeight: 36 }}>{p.vote}</span>}
            </div>
          ))}
        </div>
      </div>
    </TableScreen>
  );
}

/** Scheduling ▸ the next dates: each player answers, the GM moved one. */
export function SessionsScreen({ c }) {
  const s = c.sessions;
  return (
    <TableScreen c={c} tab={2}>
      <div className="ph-body">
        <h3 className="ph-day" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '1rem', margin: 0 }}>
          <Icon name="calendarClock" size={18} color="var(--party-amber)" />{s.label}
        </h3>
        {s.dates.map((d) => (
          <div key={d.day} className="p-card" style={{ gap: 6 }}>
            <div className="ph-session-when">
              <b>{d.day} · {d.time}</b>
              {d.moved && <span className="ph-tag">{d.moved}</span>}
            </div>
            {d.was && <div className="p-card__sub">{d.was}</div>}
            {d.note && <div className="ph-session-note">{d.note}</div>}
            <div className="ph-rsvp">
              <span className={d.mine === 'yes' ? 'is-yes' : undefined}><Icon name="check" size={14} />{s.yes}</span>
              <span className={d.mine === 'no' ? 'is-no' : undefined}><Icon name="x" size={14} />{s.no}</span>
            </div>
            <div className="p-card__sub"><Icon name="users" size={13} color="var(--party-amber)" style={{ verticalAlign: '-2px', marginRight: 6 }} />{d.summary}</div>
          </div>
        ))}
        <span className="ph-btn ph-btn--line" style={{ alignSelf: 'center' }}>{s.more}</span>
      </div>
    </TableScreen>
  );
}

export function MeetingScreen({ c }) {
  const m = c.meeting;
  return (
    <TableScreen c={c} sheet>
      <div className="ph-map-head"><Icon name="pin" size={15} />{m.head}</div>
      <MeetingMap label={m.midpoint} />
      <div className="ph-body" style={{ paddingTop: 10 }}>
        <div className="p-card" style={{ padding: '12px 16px' }}>
          <div className="p-section__title" style={{ fontSize: '0.9rem' }}><Icon name="vote" size={16} />{m.vote}</div>
          <ul className="p-card__list" style={{ marginTop: 8, marginBottom: -12 }}>
            {m.venues.map(([icon, name, sub, votes, mine]) => (
              <li key={name} style={{ paddingRight: 12 }}>
                <span className="ph-venue-icon"><Icon name={icon} size={17} /></span>
                <span className="p-card__item-main" style={{ lineHeight: 1.3 }}>
                  <span style={{ display: 'block', fontSize: '0.875rem' }}>{name}</span>
                  <span className="p-card__item-meta">{sub}</span>
                </span>
                <span className="p-card__item-meta" style={{ color: 'var(--party-amber)', fontWeight: 600 }}>{votes}</span>
                {mine
                  ? <span className="ph-btn ph-btn--gold" style={{ minHeight: 32, padding: '0 10px' }}><Icon name="check" size={13} />{m.voted}</span>
                  : <span className="ph-btn ph-btn--line" style={{ minHeight: 32, padding: '0 10px' }}>{m.voteBtn}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TableScreen>
  );
}

const PIN = 'M0-22c-7 0-12 5-12 12 0 9 12 22 12 22s12-13 12-22c0-7-5-12-12-12z';
const ROADS = ['M-10 80 C 80 60, 150 110, 240 90 S 360 60, 400 70', 'M120-10 C 130 80, 100 160, 140 260', 'M-10 190 C 90 170, 180 210, 400 180'];

function MeetingMap({ label }) {
  return (
    <svg viewBox="0 0 390 230" width="390" height="230" style={{ display: 'block', flex: 'none', borderBottom: '1px solid var(--border-gold)' }} aria-hidden="true">
      <rect width="390" height="230" fill="#EFE6D3" />
      <g stroke="#DCCFB2" strokeWidth="14" fill="none" strokeLinecap="round">{ROADS.map((d) => <path key={d} d={d} />)}</g>
      <g stroke="#FFFFFF" strokeWidth="6" fill="none" strokeLinecap="round">{ROADS.map((d) => <path key={d} d={d} />)}</g>
      <g fill="#D9CDB0" opacity="0.6"><rect x="40" y="105" width="34" height="24" rx="2" /><rect x="220" y="120" width="40" height="22" rx="2" /><rect x="300" y="196" width="30" height="20" rx="2" /><rect x="60" y="200" width="26" height="18" rx="2" /></g>
      <circle cx="196" cy="122" r="34" fill="#B85C00" opacity="0.14" /><circle cx="196" cy="122" r="18" fill="#B85C00" opacity="0.22" />
      <g transform="translate(196 122)"><path d={PIN} fill="#B85C00" stroke="#FFF8E7" strokeWidth="2" /><circle cx="0" cy="-10" r="4.5" fill="#FFF8E7" /></g>
      {[[100, 88], [276, 160], [324, 92]].map(([x, y]) => (
        <g key={x} transform={`translate(${x} ${y})`}><path d={PIN} fill="#8B1111" stroke="#FFF8E7" strokeWidth="2" /><circle cx="0" cy="-10" r="4.5" fill="#FFF8E7" /></g>
      ))}
      <rect x="156" y="139" width="80" height="18" rx="9" fill="#1A1008" opacity="0.85" />
      <text x="196" y="151.5" textAnchor="middle" fontFamily="Plus Jakarta Sans, system-ui, sans-serif" fontSize="9.5" fontWeight="700" fill="#FFF8E7">{label}</text>
    </svg>
  );
}
