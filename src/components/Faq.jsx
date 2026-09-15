import React from 'react';
import { useTranslation } from '../context/LanguageContext';

export function Faq() {
  const { loc } = useTranslation();
  const t = loc.faq;
  return (
    <section id="faq" className="container faq">
      <div className="stack" style={{ gap: 14, maxWidth: 640 }}>
        <div className="eyebrow">{t.eyebrow}</div>
        <h2 className="h2">{t.title}</h2>
      </div>
      <div className="faq-grid">
        {t.items.map(({ q, a }) => (
          <div key={q} className="faq-item">
            <div className="faq-q">{q}</div>
            <p className="faq-a">{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
