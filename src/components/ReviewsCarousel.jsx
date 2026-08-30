import React from 'react';

export const ReviewsCarousel = () => {
  const reviews = [
    {
      author: 'Alexander R.',
      role: 'D&D 5e Player • London',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      comment: "Incredible app! Found an in-person campaign 10 minutes from my apartment with super reliable players. Zero cancellations over 6 straight months."
    },
    {
      author: 'Clara "Laurinette"',
      role: 'Vampire: The Masquerade DM • New York',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      comment: "The built-in Lines & Veils safety matrix let us explore deep, gothic horror themes with complete confidence and player comfort. Beautiful UI!"
    },
    {
      author: 'Thomas G.',
      role: 'Pro Dungeon Master (Call of Cthulhu)',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
      comment: "Automated Stripe escrow and anti-ghosting karma saved me countless hours of administrative headache. My players love the shared chronicle notes."
    },
    {
      author: 'Sophie M.',
      role: 'Beginner Adventurer • Seattle',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      comment: "I was always intimidated to start tabletop roleplaying. The 'Beginner Friendly' filter and step-by-step onboarding made finding my first table effortless."
    },
    {
      author: 'Marcus B.',
      role: 'Pathfinder 2e Veteran • Chicago',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      comment: "The fair meeting point calculator on the map ended 3-hour Discord scheduling debates. This is hands-down the gold standard app for tabletop gamers."
    }
  ];

  return (
    <section id="reviews" className="lp-section-gap lp-container">
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span className="lp-eyebrow">⭐ Tabletop Community Voice</span>
        <h2 className="lp-title-h2">
          Loved by <span className="lp-accent-gold">Dungeon Masters &amp; Players</span>
        </h2>
      </div>

      <div className="lp-reviews-track">
        {reviews.map((rev, i) => (
          <div key={i} className="lp-review-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img 
                src={rev.avatar} 
                alt={rev.author} 
                style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--lp-gold)' }}
              />
              <div>
                <strong style={{ fontSize: '0.92rem', color: '#FFF8E7', display: 'block' }}>{rev.author}</strong>
                <span style={{ fontSize: '0.72rem', color: 'var(--lp-text-muted)' }}>{rev.role}</span>
              </div>
            </div>
            <div style={{ color: 'var(--lp-gold)', fontSize: '0.85rem', letterSpacing: '2px' }}>
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
