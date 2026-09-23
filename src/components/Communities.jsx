import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Icon } from './Icons';

export const KIND_ICONS = { association: 'landmark', venue: 'store', event: 'ticket' };

// One small illustration per convention step, drawn with the app's parchment tokens.
function StepVisual({ index, v }) {
  switch (index) {
    case 0:
      return (
        <div className="sv-ticket">
          <Icon name="qrCode" size={34} color="#1A1008" />
          <div>
            <div className="sv-strong">{v.ticket}</div>
            <div className="sv-meta"><Icon name="camera" size={13} color="#4A3525" /> K7QD-4MRA</div>
          </div>
        </div>
      );
    case 1:
      return (
        <div className="sv-choice">
          <span className="is-on"><Icon name="check" size={13} color="#FFFFFF" />{v.whole}</span>
          <span><Icon name="clock" size={13} color="#4A3525" />{v.pick}</span>
        </div>
      );
    case 2:
      return (
        <div className="sv-table">
          <div className="sv-strong">{v.table}</div>
          <div className="sv-meta">{v.tableMeta}</div>
          <span className="sv-badge">{v.reserved}</span>
        </div>
      );
    default:
      return (
        <div className="sv-apply">
          <span className="sv-btn">{v.apply}</span>
          <div className="sv-meta">{v.applyMeta}</div>
        </div>
      );
  }
}

export function Communities() {
  const { loc } = useTranslation();
  const t = loc.communities;
  return (
    <section id="communautes" className="band">
      <div className="container">
        <div className="stack section-head">
          <div className="eyebrow">{t.eyebrow}</div>
          <h2 className="h2">{t.title}</h2>
          <p className="lead">{t.lead}</p>
        </div>

        <div className="kinds">
          {Object.entries(t.kinds).map(([id, k]) => (
            <div key={id} className="kind-card">
              <div className="seal"><Icon name={KIND_ICONS[id]} size={22} color="#FFF8E7" /></div>
              <h3 className="h3">{k.label}</h3>
              <p>{k.text}</p>
            </div>
          ))}
        </div>

        <h3 className="h3 steps-title">{t.stepsTitle}</h3>
        <ol className="steps">
          {t.steps.map((s, i) => (
            <li key={s.title} className="step">
              <div className="step-visual"><StepVisual index={i} v={t.visuals} /></div>
              <div className="step-num">{i + 1}</div>
              <div className="step-title">{s.title}</div>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="notes">
          <p>{t.noteTicket}</p>
          <p>{t.noteAge}</p>
          <a className="more-link" href="#organisateurs">
            <span>{t.toOrganizers}</span>
            <Icon name="arrowRight" size={18} color="currentColor" />
          </a>
        </div>
      </div>
    </section>
  );
}
