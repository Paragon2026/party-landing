import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { PhoneFrame } from './PhoneFrame';

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
          <div className="gm-col">
            <PhoneFrame screen="gm" height={720} flat />
            <div className="gm-caption">
              <h3 className="h3">{t.roleTitle}</h3>
              <p>{t.roleText}</p>
            </div>
          </div>
          <div className="gm-col">
            <PhoneFrame screen="payment" height={720} flat />
            <div className="gm-caption">
              <h3 className="h3">{t.payTitle}</h3>
              <p>{t.payText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
