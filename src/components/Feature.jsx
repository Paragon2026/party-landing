import React from 'react';
import { Icon } from './Icons';
import { PhoneFrame } from './PhoneFrame';

export function Bullets({ items, checkColor = '#B85C00' }) {
  return (
    <div className="bullets">
      {items.map(([strong, rest]) => (
        <div key={strong} className="bullet">
          <div className="bullet-check"><Icon name="check" size={14} color={checkColor} /></div>
          <p><strong>{strong}</strong>{rest ? ` ${rest}` : ''}</p>
        </div>
      ))}
    </div>
  );
}

/** Copy on one side, a phone on the other; `flip` puts the phone first on desktop. */
export function Feature({ id, screen, copy, flip = false }) {
  return (
    <section id={id} className={`container feature split${flip ? ' split--flip' : ''}`}>
      <div className="stack stack--copy">
        <div className="eyebrow">{copy.eyebrow}</div>
        <h2 className="h2">{copy.title}</h2>
        <p className="lead">{copy.lead}</p>
        <Bullets items={copy.bullets} />
      </div>
      <div className="center">
        <PhoneFrame screen={screen} height={720} />
      </div>
    </section>
  );
}
