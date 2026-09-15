import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { PLAY_STORE_URL } from '../links';
import { Icon } from './Icons';
import { Logo } from './Logo';

export function FinalCta() {
  const { loc } = useTranslation();
  const t = loc.final;
  return (
    <section id="telecharger" className="container final">
      <div className="final-card">
        <Logo size={56} wordmark={false} />
        <h2 className="h2">{t.title}</h2>
        <p className="lead">{t.lead}</p>
        <a className="btn btn--gold" href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
          <Icon name="play" size={20} color="#1C140E" />
          <span>{t.cta}</span>
        </a>
      </div>
    </section>
  );
}
