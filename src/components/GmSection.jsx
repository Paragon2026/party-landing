import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Icon } from './Icons';
import { ModeSwitch } from './ModeSwitch';

// Players present per hour, Friday 14:00 → 23:00 (fictional game night).
const PRESENCE = [2, 4, 6, 9, 12, 14, 13, 10, 6, 3];
const PEAK = Math.max(...PRESENCE);

function PresenceBars({ label }) {
  return (
    <figure className="presence" aria-label={label}>
      <figcaption>{label}</figcaption>
      <div className="presence-bars">
        {PRESENCE.map((n, i) => (
          <div key={i} className="presence-col">
            <span className="presence-n">{n}</span>
            <span className="presence-bar" style={{ height: `${Math.round((n / PEAK) * 100)}%`, opacity: 0.35 + (0.65 * n) / PEAK }} />
            <span className="presence-h">{14 + i}h</span>
          </div>
        ))}
      </div>
    </figure>
  );
}

/** A GM's member page, as other members see it (fictional GM). */
function GmPageCard({ p }) {
  return (
    <div className="gm-page" aria-hidden="true">
      <div className="gm-page-head">
        <span className="gm-page-avatar">{p.name[0]}</span>
        <div>
          <div className="gm-page-name">{p.name}</div>
          <div className="gm-page-role">{p.role}</div>
        </div>
      </div>
      <div className="gm-page-rating"><Icon name="star" size={15} color="#F4C430" style={{ fill: '#F4C430' }} />{p.rating}</div>
      <div className="gm-page-meta">{p.stats}</div>
      <div className="gm-page-tags">{p.systems.map((s) => <span key={s}>{s}</span>)}</div>
    </div>
  );
}

export function GmSection() {
  const { loc } = useTranslation();
  const t = loc.gm;
  return (
    <section id="mj" className="dark">
      <div className="container">
        <div className="stack" style={{ gap: 20, maxWidth: 760 }}>
          <div className="eyebrow">{t.eyebrow}</div>
          <h2 className="h2 h2--lg">{t.title}</h2>
          <p className="lead">{t.lead}</p>
        </div>
        <div className="gm-grid">
          <div className="gm-card">
            <div className="gm-visual"><ModeSwitch labels={t.modes} active={1} /></div>
            <h3 className="h3">{t.modesTitle}</h3>
            <p>{t.modesText}</p>
          </div>
          <div className="gm-card">
            <div className="gm-visual"><PresenceBars label={t.presenceLabel} /></div>
            <h3 className="h3">{t.tablesTitle}</h3>
            <p>{t.tablesText}</p>
          </div>
          <div className="gm-card">
            <div className="gm-visual"><GmPageCard p={t.pageCard} /></div>
            <h3 className="h3">{t.pageTitle}</h3>
            <p>{t.pageText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
