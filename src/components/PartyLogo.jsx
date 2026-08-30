import React, { useState } from 'react';
import { Shield } from 'lucide-react';

export const PartyLogo = ({ size = 40, style = {}, className = '' }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #1C140E, #3D2612)',
          border: '2px solid #F4D068',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 16px rgba(244, 208, 104, 0.4)',
          flexShrink: 0,
          ...style
        }}
        className={className}
      >
        <Shield size={size * 0.55} color="#F4D068" />
      </div>
    );
  }

  return (
    <img
      src="/party_logo.jpg"
      alt="Party App Logo"
      onError={() => setHasError(true)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        objectFit: 'cover',
        border: '2px solid #F4D068',
        boxShadow: '0 0 16px rgba(244, 208, 104, 0.45)',
        flexShrink: 0,
        ...style
      }}
      className={className}
    />
  );
};
