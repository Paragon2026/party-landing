import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { LEGAL_URLS } from '../links';
import { Logo } from './Logo';

export function Footer() {
  const { loc } = useTranslation();
  const t = loc.footer;
  const links = [
    [LEGAL_URLS.terms, t.terms],
    [LEGAL_URLS.privacy, t.privacy],
    [LEGAL_URLS.guidelines, t.guidelines],
    [LEGAL_URLS.deletion, t.deletion],
  ];
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Logo size={32} />
        <nav className="footer-links" aria-label="Legal">
          {links.map(([href, label]) => (
            <a key={href} href={href} target="_blank" rel="noreferrer">{label}</a>
          ))}
        </nav>
        <div className="footer-copy">{t.copyright}</div>
      </div>
    </footer>
  );
}
