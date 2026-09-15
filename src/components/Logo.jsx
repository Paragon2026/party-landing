import React from 'react';

/** The Party wax seal (public/party_logo.jpg cropped to the seal), shown round like the app's PartyLogo. */
export function Logo({ size = 40, wordmark = true, href = '#top' }) {
  return (
    <a className="logo" href={href} aria-label="Party">
      <img
        className="logo-mark"
        src="/logo-128.png"
        srcSet="/logo-128.png 128w, /logo-256.png 256w"
        sizes={`${size}px`}
        alt=""
        width={size}
        height={size}
        style={{ width: size, height: size }}
      />
      {wordmark && <span className="logo-word" style={{ fontSize: Math.round(size * 0.72) }}>PARTY</span>}
    </a>
  );
}
