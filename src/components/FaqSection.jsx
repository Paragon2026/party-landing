import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "Is the Party app free to download and use?",
      a: "Yes ! Party lives off 10% commissions on tips and paid seats but offers the rest of the app for free"
    },
    {
      q: "How do you handle ghosting or no-shows ?",
      a: "A Karma system tracks attendance. Following every session, the Game Master logs attendance and table manners ; showing up on time maintains a pristine score, contributing to a good atmosphere can even boost it while unexcused absences lower your reputation score visible to prospective tables."
    },
    {
      q: "Which tabletop RPG game systems are supported?",
      a: "All of them! From mainstream titles (Dungeons & Dragons 5e, Call of Cthulhu, Pathfinder, Vampire, Cyberpunk RED) to indie rulesets, OSR, and homebrew games."
    },
    {
      q: "What are Lines & Veils ?",
      a: "Lines are hard \"do not wish to see in a game\" limits whereas Veils are what you can tolerate as long as it's \"faded to black\" by the GM. You can filter games based on this and also request for more but GMs remain free to refuse"
    },
    {
      q: "How does seat fee escrow work for paid sessions?",
      a: "In a chat group, players are asked to pay their seat 6 days prior to the next game and they money is held in Stripe Escrow until the game is done at which point the money is transfered to GMs accounts. No shows pay their seats but GM cancellation triggers a full refund."
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
