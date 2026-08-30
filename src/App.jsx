import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureMatchmaking } from './components/FeatureMatchmaking';
import { FeatureKarma } from './components/FeatureKarma';
import { FeatureSafety } from './components/FeatureSafety';
import { FeatureTableHub } from './components/FeatureTableHub';
import { FeatureGMPro } from './components/FeatureGMPro';
import { ReviewsCarousel } from './components/ReviewsCarousel';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', background: 'var(--lp-bg)' }}>
      {/* Ambient Lighting Background Elements */}
      <div className="lp-glow-ambient lp-glow-gold" style={{ top: '-80px', left: '-100px' }} />
      <div className="lp-glow-ambient lp-glow-crimson" style={{ top: '600px', right: '-120px' }} />
      <div className="lp-glow-ambient lp-glow-gold" style={{ top: '1800px', left: '15%' }} />
      <div className="lp-glow-ambient lp-glow-crimson" style={{ top: '3200px', right: '10%' }} />

      <Header />
      <main>
        <Hero />
        <FeatureMatchmaking />
        <FeatureKarma />
        <FeatureSafety />
        <FeatureTableHub />
        <FeatureGMPro />
        <ReviewsCarousel />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
}
