import React, { useLayoutEffect, useRef, useState } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { PHONE } from '../phone/content';
import { ChatScreen, CommunityPageScreen, MeetingScreen, PlanningScreen, SessionsScreen } from '../phone/screens';

// A table's conversation in the app (Messages ▸ the table), on the player
// theme, and a community's page. The clickable phone is Explorer.jsx.
const SCREENS = { planning: PlanningScreen, sessions: SessionsScreen, meeting: MeetingScreen, chat: ChatScreen, community: CommunityPageScreen };

const OUTER_W = 418; // 390 screen + 12 padding + 2 border, each side

/**
 * Renders a screen at its native 390px inside a phone bezel, and scales the whole
 * frame down (never up) so it fits the column it sits in.
 */
export function PhoneFrame({ screen, height = 780, flat = false, maxScale = 1 }) {
  const { lang } = useTranslation();
  const Screen = SCREENS[screen];
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
        <div className="phone-screen" style={{ height }}>
          <Screen c={PHONE[lang]} />
        </div>
      </div>
    </div>
  );
}
