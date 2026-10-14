import React from 'react';
import { Icon } from '../components/Icons';
import { AppHeader, BottomNav, ChatHeader } from './Chrome';

// Screen bodies, rebuilt from the app's « épuré » components: one card per
// item, one visible action per card (the rest behind "⋯"), segments as raised
// tiles, Cinzel only for screen titles and the game card.

const More = () => <span className="ph-more" aria-hidden="true"><Icon name="more" size={20} /></span>;

/* ---- Player · Explorer ---------------------------------------------------- */

export function GamesBody({ c }) {
  const g = c.game;
  return (
    <div className="ph-body">
      <article className="p-card p-card--feature">
        <span className="ph-pager">3/12 <i /><i /><i /><i /></span>
        <div className="ph-media">
          <span className="ph-media__save"><Icon name="bookmark" size={14} /></span>
          <span className="ph-media__system">{g.system}</span>
        </div>
        <h3 className="ph-game-title">{g.title}</h3>
        <hr className="ph-rule" />
        <div className="ph-gm">
          <strong>{g.gm}</strong>
          <span className="ph-tag ph-tag--round"><Icon name="star" size={11} color="var(--party-amber)" style={{ fill: 'var(--party-amber)' }} />{g.rating} {g.reviews}</span>
        </div>
        <div className="ph-facts">
          <div><Icon name="calendar" size={13} />{g.when}</div>
          <div><Icon name="pin" size={13} />{g.where}</div>
          <div><Icon name="users" size={13} />{g.seats} <span className="ph-ok">{g.seatsLeft}</span></div>
          <div><Icon name="shield" size={13} />{g.level}</div>
        </div>
        <p className="ph-label" style={{ fontFamily: 'var(--font-title)', marginBottom: 4 }}>{g.about}</p>
        <p className="p-card__text" style={{ fontStyle: 'italic', fontSize: '0.82rem', marginBottom: 14 }}>{g.summary}</p>
        <div className="ph-safety">
          <div className="ph-label"><Icon name="eye" size={13} />{g.mayFeature}</div>
          <div className="ph-tags">{g.flags.map((f) => <span key={f} className="ph-tag ph-tag--info">{f}</span>)}</div>
          <div className="ph-label"><Icon name="shield" size={13} />{g.offTable}</div>
          <div className="ph-tags">{g.lines.map((l) => <span key={l} className="ph-tag ph-tag--line"><Icon name="ban" size={11} />{l}</span>)}</div>
        </div>
      </article>
    </div>
  );
}

export function AgendaBody({ c }) {
  return (
    <div className="ph-body">
      {c.agenda.map((day) => (
        <React.Fragment key={day.day}>
          <h3 className="ph-day">{day.day}</h3>
          {day.items.map((o) => (
            <article key={o.title} className="p-card">
              <div className="p-card__top">
                <span className="p-card__when">{o.when}</span>
                {o.repeat && <span><Icon name="repeat" size={11} />{o.repeat}</span>}
                <span className="p-card__far">{o.far}</span>
              </div>
              <h3 className="p-card__title">{o.title}</h3>
              <div className="p-card__meta">
                <span><Icon name={o.kind} size={14} />{o.community}</span>
                <span><Icon name="pin" size={14} />{o.place}</span>
                <span><Icon name="dice" size={14} />{o.tables}</span>
                <span><Icon name="users" size={14} />{o.people}</span>
              </div>
              {o.text && <p className="p-card__text">{o.text}</p>}
              {o.action && (
                <div className="p-card__actions">
                  {o.action === 'gold'
                    ? <span className="ph-btn ph-btn--gold"><Icon name="calendarCheck" size={16} />{c.attend}</span>
                    : <span className="ph-btn ph-btn--quiet" style={{ flex: 'none' }}><Icon name="check" size={16} />{c.attend}</span>}
                  <span style={{ marginLeft: 'auto' }}><More /></span>
                </div>
              )}
            </article>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export function CommunitiesBody({ c }) {
  return (
    <div className="ph-body">
      {c.communities.map((m) => (
        <article key={m.name} className="p-card" style={{ gap: 8, border: '1.5px solid var(--border-gold)' }}>
          <div className="p-card__top">
            <span className="ph-tag ph-tag--success"><Icon name="badgeCheck" size={12} />{m.verified}</span>
            <span className="ph-tag"><Icon name={m.icon} size={12} />{m.kind}</span>
            <span className="p-card__far">{m.far}</span>
          </div>
          <h3 className="ph-game-title" style={{ fontSize: '1.1rem' }}>{m.name}</h3>
          <div className="p-card__meta" style={{ flexDirection: 'column', alignItems: 'flex-start', color: 'var(--party-text)' }}>
            <span><Icon name="pin" size={14} />{m.place}</span>
            <span><Icon name="clock" size={14} />{m.hours}</span>
          </div>
          <div className="p-card__meta" style={{ color: 'var(--party-text)' }}>
            <span><Icon name="users" size={14} />{m.members}</span>
            <span><Icon name="doorOpen" size={14} />{m.join}</span>
            <span><Icon name="pin" size={14} />{m.mode}</span>
          </div>
          <p className="p-card__text">{m.text}</p>
          <div className="ph-tags"><Icon name="dice" size={14} color="var(--party-amber)" />{m.systems.map((s) => <span key={s} className="ph-tag">{s}</span>)}</div>
        </article>
      ))}
    </div>
  );
}

/* ---- GM · Host -------------------------------------------------------------- */

export function GmBody({ c, hours }) {
  const p = c.propose;
  const levels = [0.35, 0.6, 1, 0.95, 0.75, 0.45];
  return (
    <div className="ph-body">
      <h2 className="ph-screen-title"><Icon name="plusCircle" size={20} />{p.title}</h2>
      {[['globe', p.free], ['landmark', p.community]].map(([icon, [title, sub]]) => (
        <div key={title} className="p-card p-card--row">
          <span className="p-card__avatar"><Icon name={icon} size={20} /></span>
          <div className="p-card__body"><div className="p-card__title">{title}</div><div className="p-card__sub">{sub}</div></div>
          <Icon name="chevronRight" size={18} color="var(--party-amber)" />
        </div>
      ))}
      <h3 className="p-section__title" style={{ marginTop: 6 }}><Icon name="calendarDays" size={18} />{p.upcoming}</h3>
      <div className="p-row-group">
        {p.rows.map(([title, sub]) => (
          <div key={title} className="p-row">
            <span className="p-row__label">{title}<span className="p-row__detail">{sub}</span></span>
            <Icon name="plusCircle" size={20} />
          </div>
        ))}
      </div>
      <div className="p-card" style={{ gap: 10 }}>
        <div className="p-section__title"><Icon name="barChart" size={18} />{p.presence}</div>
        <div className="p-card__sub">{p.presenceSub}</div>
        <div className="ph-presence">
          {hours.map((h, i) => <div key={h}><b style={{ opacity: levels[i] }} />{h}</div>)}
        </div>
      </div>
    </div>
  );
}

/* ---- Community · Sheet ------------------------------------------------------ */

export function CommunityBody({ c }) {
  const s = c.steward;
  return (
    <>
      <div className="ph-shell-head">
        <Icon name="landmark" size={18} />
        <h2>{s.title}</h2>
        <span className="ph-select"><span>{s.pick}</span><Icon name="chevronDown" size={13} /></span>
      </div>
      <div className="ph-body">
        <div className="p-card" style={{ gap: 10 }}>
          <div className="p-card__top" style={{ justifyContent: 'space-between' }}>
            <span className="ph-label" style={{ color: 'var(--party-text)' }}>{s.sheet}</span>
            <span className="ph-label" style={{ color: 'var(--success)' }}><Icon name="badgeCheck" size={14} />{s.verified}</span>
          </div>
          {s.fields.map(([label, value]) => (
            <label key={label} className="ph-field"><span>{label}</span><div>{value}</div></label>
          ))}
        </div>
        <div className="p-card" style={{ gap: 8 }}>
          <div className="ph-label"><Icon name="userCheck" size={13} color="var(--party-amber)" />{s.join}</div>
          <div className="p-card__sub">{s.howLabel}</div>
          {s.policies.map(([title, hint], i) => (
            <div key={title} className={`ph-radio${i === 0 ? ' ph-radio--on' : ''}`}>
              <span className="ph-radio__dot" />
              <span><strong>{title}</strong><small>{hint}</small></span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ---- Player · a table's conversation (feature rows) ------------------------ */

function TableScreen({ c, tab, sheet = false, children }) {
  return (
    <div className="ph ph--player">
      <AppHeader mode="player" labels={c.modes} aria={c.aria} threeModes={false} />
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
