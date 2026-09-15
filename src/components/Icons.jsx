import React from 'react';

// Lucide outlines (stroke 2, 24-grid) — same set the app uses.
const PATHS = {
  calendar: (
    <>
      <path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 4.99-5.54 10.22-7.4 11.85a1 1 0 0 1-1.2 0C9.54 20.22 4 14.99 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" />
    </>
  ),
  shield: (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" />
    </>
  ),
  eye: (
    <>
      <path d="M2.06 12.35a1 1 0 0 1 0-.7C3.42 8.02 7.32 5 12 5s8.58 3.02 9.94 6.65a1 1 0 0 1 0 .7C20.58 15.98 16.68 19 12 19s-8.58-3.02-9.94-6.65" /><circle cx="12" cy="12" r="3" />
    </>
  ),
  dice: (
    <>
      <rect width="12" height="12" x="2" y="10" rx="2" ry="2" /><path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" /><path d="M6 18h.01" /><path d="M10 14h.01" /><path d="M15 6h.01" /><path d="M18 9h.01" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  play: <path d="M6 3v18l15-9z" />,
};

export function Icon({ name, size = 20, color = 'currentColor', style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0, ...style }}
    >
      {PATHS[name]}
    </svg>
  );
}
