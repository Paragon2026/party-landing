import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Icon } from './Icons';
import { Bullets } from './Feature';

export function Safety() {
  const { loc } = useTranslation();
  const t = loc.safety;
  return (
    <section id="securite" className="band">
      <div className="container split">
        <div className="stack stack--copy">
          <div className="eyebrow">{t.eyebrow}</div>
          <h2 className="h2">{t.title}</h2>
          <p className="lead">{t.lead}</p>
          <Bullets items={t.bullets} />
        </div>
        <div className="center">
          <div className="safety-card">
            <div className="safety-card-title">{t.cardTitle}</div>
            <div className="safety-list">
              <div className="safety-label"><Icon name="eye" size={18} color="#6E1212" />{t.flagsLabel}</div>
              <div className="chips">
                {t.flags.map((f) => <span key={f} className="chip chip--flag">{f}</span>)}
              </div>
            </div>
            <div className="safety-list">
              <div className="safety-label"><Icon name="shield" size={18} color="#6E1212" />{t.linesLabel}</div>
              <div className="chips">
                {t.lines.map((l) => <span key={l} className="chip chip--line">{l}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
