import React, { useLayoutEffect, useRef, useState } from 'react';

import discover from '../screens/discover.html?raw';
import planning from '../screens/planning.html?raw';
import meeting from '../screens/meeting.html?raw';
import chat from '../screens/chat.html?raw';
import gm from '../screens/gm.html?raw';
import payment from '../screens/payment.html?raw';

// Screens are 390px-wide HTML rebuilt from the app's components (same markup as the
// Play Store captures). Light ones sit on the player theme, dark ones on the host theme.
const SCREENS = {
  discover: { html: discover, bg: '#F4ECE0', fg: '#1A1008' },
  planning: { html: planning, bg: '#F4ECE0', fg: '#1A1008' },
  meeting: { html: meeting, bg: '#F4ECE0', fg: '#1A1008' },
  chat: { html: chat, bg: '#F4ECE0', fg: '#1A1008' },
  gm: { html: gm, bg: '#18110B', fg: '#FFF8E7' },
  payment: { html: payment, bg: '#18110B', fg: '#FFF8E7' },
};

const OUTER_W = 418; // 390 screen + 12 padding + 2 border, each side

/**
 * Renders a screen at its native 390px inside a phone bezel, and scales the whole
 * frame down (never up) so it fits the column it sits in.
 */
export function PhoneFrame({ screen, height = 780, flat = false, maxScale = 1 }) {
  const { html, bg, fg } = SCREENS[screen];
  const outerH = height + 28;
  const ref = useRef(null);
  const [scale, setScale] = useState(maxScale);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !el.parentElement) return undefined;
    const parent = el.parentElement;
    const update = () => {
      const w = parent.clientWidth;
      setScale(Math.min(maxScale, w > 0 ? w / OUTER_W : maxScale));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(parent);
    return () => ro.disconnect();
  }, [maxScale]);

  return (
    <div
      ref={ref}
      className="phone-scaler"
      style={{ width: Math.round(OUTER_W * scale), height: Math.round(outerH * scale) }}
    >
      <div className={`phone${flat ? ' phone--flat' : ''}`} style={{ height: outerH, transform: `scale(${scale})` }}>
        <div className="phone-screen" style={{ height, background: bg, color: fg }}>
          <div style={{ background: bg, color: fg }} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </div>
  );
}
