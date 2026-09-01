import React from 'react';
import { useTranslation } from '../context/LanguageContext';

export const ReviewsCarousel = () => {
  const { loc } = useTranslation();

  return (
    <section id="reviews" className="lp-section-gap lp-container">
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span className="lp-eyebrow">⭐ {loc.reviews.eyebrow}</span>
        <h2 className="lp-title-h2">
          {loc.reviews.title} <span className="lp-accent-gold">{loc.reviews.titleAccent}</span>
        </h2>
      </div>

      <div className="lp-reviews-track">
        {loc.reviews.items.map((rev, i) => (
          <div key={i} className="lp-review-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img 
                src={rev.avatar} 
                alt={rev.author} 
                style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--lp-gold)' }}
              />
              <div style={{ minWidth: 0 }}>
                <strong style={{ fontSize: '0.88rem', color: '#FFF8E7', display: 'inline', whiteSpace: 'nowrap' }}>
                  {rev.author}
                </strong>
                <span style={{ fontSize: '0.72rem', color: 'var(--lp-text-muted)', marginLeft: '6px', whiteSpace: 'nowrap' }}>
                  • {rev.role}
                </span>
              </div>
            </div>
            <div style={{ color: 'var(--lp-gold)', fontSize: '0.82rem', letterSpacing: '2px' }}>
              {'★'.repeat(rev.rating)}
            </div>
            <p style={{ fontSize: '0.84rem', color: 'var(--lp-text-soft)', margin: 0, lineHeight: 1.5 }}>
              "{rev.comment}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
