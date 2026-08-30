import React from 'react';

export const ReviewsCarousel = () => {
  const reviews = [
    {
      author: 'Alexander R.',
      role: 'D&D 5e Player (London)',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      comment: "Found an in-person campaign 10 minutes from my apartment with super reliable players. Zero cancellations over 6 straight months."
    },
    {
      author: 'Clara "Laurinette"',
      role: 'Vampire GM (New York)',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      comment: "The built-in Lines & Veils safety matrix let us explore deep, gothic horror themes with complete confidence and player comfort."
    },
    {
      author: 'Thomas G.',
      role: 'Call of Cthulhu GM (Chicago)',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80',
      comment: "Automated Stripe escrow and anti-ghosting karma saved me countless hours of administrative headache."
    },
    {
      author: 'Sophie M.',
      role: 'Beginner Adventurer (Seattle)',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      comment: "The 'Beginner Friendly' filter and step-by-step onboarding made finding my first table effortless."
    },
    {
      author: 'Marcus B.',
      role: 'Pathfinder 2e Player (Boston)',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      comment: "The fair meeting point calculator on the map ended 3-hour Discord scheduling debates."
    }
  ];

  return (
    <section id="reviews" className="lp-section-gap lp-container">
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span className="lp-eyebrow">⭐ Community Reviews</span>
        <h2 className="lp-title-h2">
          Loved by <span className="lp-accent-gold">Game Masters &amp; Players</span>
        </h2>
      </div>

      <div className="lp-reviews-track">
        {reviews.map((rev, i) => (
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
