import React from 'react';
import { Icon } from './Icons';

export function Logo({ size = 40, wordmark = true, href = '#top' }) {
  const mark = (
    <div className="logo-mark" style={{ width: size, height: size }}>
      <Icon name="dice" size={Math.round(size * 0.55)} color="#F4D068" />
    </div>
  );
  return (
    <a className="logo" href={href} aria-label="Party">
      {mark}
      {wordmark && <span className="logo-word" style={{ fontSize: Math.round(size * 0.72) }}>PARTY</span>}
    </a>
  );
}
