import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export const FaqSection = () => {
  const { loc } = useTranslation();
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq" className="lp-section-gap lp-container" style={{ maxWidth: '840px' }}>
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <span className="lp-eyebrow">❓ {loc.faq.eyebrow}</span>
        <h2 className="lp-title-h2">
          {loc.faq.title} <span className="lp-accent-gold">{loc.faq.titleAccent}</span>
        </h2>
      </div>

      <div>
        {loc.faq.items.map((faq, idx) => (
          <div key={idx} className="lp-faq-item">
            <button 
              onClick={() => setOpenIdx(prev => prev === idx ? null : idx)}
              className="lp-faq-question"
            >
              <span>{faq.q}</span>
              {openIdx === idx ? <ChevronUp size={18} color="#F4D068" /> : <ChevronDown size={18} color="#9DA8C3" />}
            </button>
            {openIdx === idx && (
              <div className="lp-faq-answer">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
