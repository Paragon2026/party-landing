import React from 'react';
import { Dice5 } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { PhoneVideoPlayer } from './PhoneVideoPlayer';

export const FeatureMatchmaking = () => {
  const { loc } = useTranslation();

  return (
    <section id="scheduling" className="lp-section-gap lp-container">
      <div className="lp-feature-row">
        <div className="lp-feature-body">
          <span className="lp-eyebrow">
            <Dice5 size={14} /> {loc.scheduling.eyebrow}
          </span>
          <h2 className="lp-title-h2">
            {loc.scheduling.title} <span className="lp-accent-gold">{loc.scheduling.titleAccent}</span>
          </h2>
          <p style={{ color: 'var(--lp-text-soft)', fontSize: '0.95rem' }}>
            {loc.scheduling.description}
          </p>

          <ul className="lp-feature-list">
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>{loc.scheduling.bullet1Title}</strong> {loc.scheduling.bullet1Desc}
              </div>
            </li>
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>{loc.scheduling.bullet2Title}</strong> {loc.scheduling.bullet2Desc}
              </div>
            </li>
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>{loc.scheduling.bullet3Title}</strong> {loc.scheduling.bullet3Desc}
              </div>
            </li>
          </ul>
        </div>

        {/* 3D Phone Screen Mockup: Heatmap & Colored Pins */}
        <PhoneVideoPlayer type="scheduling" style={{ transform: 'rotateY(6deg) rotateX(2deg)' }} />
      </div>
    </section>
  );
};
