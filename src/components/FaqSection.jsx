import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "Is the Party app free to download and use?",
      a: "Yes! Account creation, game discovery, group chat, reliability karma, and player safety tools are 100% free for all adventurers and Game Masters."
    },
    {
      q: "How does the Anti-Ghosting Karma system work?",
      a: "Every player starts with 100% Karma. Following every session, the Game Master logs attendance. Showing up on time maintains a pristine score, while unexcused absences lower your reputation score visible to prospective tables."
    },
    {
      q: "Which tabletop RPG game systems are supported?",
      a: "All of them! From mainstream titles (Dungeons & Dragons 5e, Call of Cthulhu, Pathfinder, Vampire, Cyberpunk RED) to indie rulesets, OSR, and homebrew games."
    },
    {
      q: "How do table safety tools (Lines & Veils) protect players?",
      a: "Before joining any session, you can discreetly share your safety preferences. The Game Master reviews them and lets you know whether they will include them or not. From there, you can decide to play or if you'd rather pass on the seat."
    },
    {
      q: "How does seat fee escrow work for paid sessions?",
      a: "For paid campaigns or tables with shared venue costs, player contributions are held in secure escrow via Stripe until the session concludes. In the event of a verified GM cancellation, full refunds are issued automatically."
    }
  ];

  return (
    <section id="faq" className="lp-section-gap lp-container" style={{ maxWidth: '840px' }}>
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <span className="lp-eyebrow">❓ FAQ</span>
        <h2 className="lp-title-h2">
          Frequently Asked <span className="lp-accent-gold">Questions</span>
        </h2>
      </div>

      <div>
        {faqs.map((faq, idx) => (
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
