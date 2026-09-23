import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { PLAY_STORE_URL } from '../links';
import { Icon } from './Icons';

const PROOF_ICONS = ['pin', 'shield', 'calendarDays'];

/** Centred, without a phone: the interactive phone right below is the hero's visual. */
export function Hero() {
  const { loc } = useTranslation();
  const t = loc.hero;
  return (
    <section id="trouver" className="container hero hero--center">
      <div className="stack hero-copy">
        <div className="eyebrow">{t.eyebrow}</div>
        <h1 className="h1">{t.title}</h1>
        <p className="lead lead--lg">{t.lead}</p>
        <div className="hero-actions">
          <a className="btn btn--gold" href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
            <Icon name="play" size={20} color="#1C140E" />
            <span>{t.cta}</span>
          </a>
        </div>
        <div className="proof">
          {t.proof.map((line, i) => (
            <div key={line} className="proof-item">
              <Icon name={PROOF_ICONS[i]} size={18} color="#B85C00" />
              <span>{line}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
