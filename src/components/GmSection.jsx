import React from 'react';
import { useTranslation } from '../context/LanguageContext';
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
        </div>
      </div>
    </section>
  );
}
