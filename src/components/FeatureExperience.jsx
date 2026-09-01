import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { PhoneVideoPlayer } from './PhoneVideoPlayer';

export const FeatureExperience = () => {
  const { loc } = useTranslation();

  return (
    <section id="features" className="lp-section-gap lp-container">
      <div className="lp-feature-row lp-reverse">
        <div className="lp-feature-body">
          <span className="lp-eyebrow">
            <ShieldCheck size={14} /> {loc.experience.eyebrow}
          </span>
          <h2 className="lp-title-h2">
            {loc.experience.title} <span className="lp-accent-gold">{loc.experience.titleAccent}</span>
          </h2>
          <p style={{ color: 'var(--lp-text-soft)', fontSize: '0.95rem' }}>
            {loc.experience.description}
          </p>

          <ul className="lp-feature-list">
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>{loc.experience.bullet1Title}</strong> {loc.experience.bullet1Desc}
              </div>
            </li>
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>{loc.experience.bullet2Title}</strong> {loc.experience.bullet2Desc}
              </div>
            </li>
            <li className="lp-feature-item">
              <span className="lp-feature-check">✓</span>
              <div>
                <strong>{loc.experience.bullet3Title}</strong> {loc.experience.bullet3Desc}
              </div>
            </li>
          </ul>
        </div>

        {/* 3D Phone Screen Mockup: Unified 3-in-1 Tabs */}
        <PhoneVideoPlayer type="experience" style={{ transform: 'rotateY(-6deg) rotateX(2deg)' }} />
      </div>
    </section>
  );
};
