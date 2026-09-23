import React from 'react';

/** The app's three-position mode selector, as an illustration (not a control). */
export function ModeSwitch({ labels, active, tone = 'host' }) {
  return (
    <div className={`mode-switch mode-switch--${tone}`} aria-hidden="true">
      {labels.map((label, i) => (
        <span key={label} className={i === active ? 'is-on' : undefined}>{label}</span>
      ))}
    </div>
  );
}
