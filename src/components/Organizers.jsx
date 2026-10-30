import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { PLAY_STORE_URL } from '../links';
import { Icon } from './Icons';
import { KIND_ICONS } from './Communities';
import { PhoneFrame } from './PhoneFrame';

// One icon per row of the community page's Manage tab, in its order.
const TOOL_ICONS = ['userCheck', 'doorOpen', 'idCard', 'calendarDays', 'dice', 'users', 'handshake', 'flag'];

/** For the people who run a community: its page and its Manage tab, on the steward palette. */
export function Organizers() {
  const { loc } = useTranslation();
  const t = loc.organizers;
  return (
    <section id="organisateurs" className="steward">
      <div className="container">
        <div className="split org-head">
          <div className="stack section-head section-head--left">
            <div className="eyebrow">{t.eyebrow}</div>
            <h2 className="h2 h2--lg">{t.title}</h2>
            <p className="lead">{t.lead}</p>
          </div>
          <div className="center">
            <PhoneFrame screen="community" height={720} />
          </div>
        </div>

        <div className="kinds">
          {Object.entries(t.kinds).map(([id, k]) => (
            <div key={id} className="kind-card">
              <div className="seal"><Icon name={KIND_ICONS[id]} size={22} color="#FFF8E7" /></div>
              <div className="kind-label">{k.label}</div>
              <h3 className="h3">{k.title}</h3>
              <p>{k.text}</p>
            </div>
          ))}
        </div>

        <h3 className="h3 steps-title">{t.toolsTitle}</h3>
        <div className="tools">
          {t.tools.map(([title, text], i) => (
            <div key={title} className="tool">
              <Icon name={TOOL_ICONS[i]} size={22} color="#D9AE55" />
              <div>
                <div className="tool-title">{title}</div>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="org-cta">
          <div className="stack" style={{ gap: 8 }}>
            <h3 className="h3">{t.ctaTitle}</h3>
            <p className="org-cta-lead">{t.ctaText}</p>
          </div>
          <div className="org-cta-grid">
            <div className="org-cta-col">
              <p>{t.addText}</p>
              <a className="btn btn--gold btn--sm" href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
                <Icon name="play" size={16} color="#1C140E" />
                <span>{t.addCta}</span>
              </a>
            </div>
            <div className="org-cta-col">
              <p>{t.claimText}</p>
              <a className="btn btn--wax btn--sm" href={`mailto:${t.contact}`}>
                <Icon name="mail" size={16} color="#FFF8E7" />
                <span>{t.claimCta}</span>
              </a>
              <a className="org-mail" href={`mailto:${t.contact}`}>{t.contact}</a>
            </div>
          </div>
          <p className="org-cta-lead">{t.ageNote}</p>
        </div>
      </div>
    </section>
  );
}
