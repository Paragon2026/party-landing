import React, { useEffect } from 'react';
import { LanguageProvider, useTranslation } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Explorer } from './components/Explorer';
import { Communities } from './components/Communities';
import { Feature } from './components/Feature';
import { Safety } from './components/Safety';
import { GmSection } from './components/GmSection';
import { Organizers } from './components/Organizers';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

function Page() {
  const { lang, loc } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = loc.meta.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', loc.meta.description);
  }, [lang, loc]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="page-glow" />
      <div style={{ position: 'relative' }}>
        <Header />
        <main>
          <Hero />
          <Explorer />
          <Communities />
          <Feature id="planning" screen="planning" copy={loc.planning} />
          <Feature id="rendezvous" screen="meeting" copy={loc.meeting} flip />
          <Feature id="salon" screen="chat" copy={loc.chat} />
          <Safety />
          <GmSection />
          <Organizers />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}
