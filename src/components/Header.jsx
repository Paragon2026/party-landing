import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Logo } from './Logo';

function LanguageSwitcher() {
  const { lang, setLanguage } = useTranslation();
  return (
    <div className="lang" role="group" aria-label="Langue / Language">
      <button type="button" aria-pressed={lang === 'fr'} onClick={() => setLanguage('fr')} title="Français">FR</button>
      <button type="button" aria-pressed={lang === 'en'} onClick={() => setLanguage('en')} title="English">EN</button>
    </div>
  );
}

export function Header() {
  const { loc } = useTranslation();
  const links = [
    ['#explorer', loc.nav.explorer],
    ['#planning', loc.nav.planning],
    ['#rendezvous', loc.nav.meeting],
    ['#communautes', loc.nav.communities],
    ['#mj', loc.nav.gm],
    ['#faq', loc.nav.faq],
  ];
  return (
    <header className="container header" id="top">
      <Logo size={40} />
      <nav className="nav" aria-label="Sections">
        {links.map(([href, label]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
      <div className="header-right">
        <LanguageSwitcher />
        <a className="btn btn--gold btn--sm" href="#telecharger">{loc.nav.download}</a>
      </div>
    </header>
  );
}
