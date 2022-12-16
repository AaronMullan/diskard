/* eslint-disable max-len */
import React from 'react';
import Image from 'next/image';

export default function Hero({
  image, headline, text, reverse,
}) {
  const flexDirection = reverse ? 'row-reverse' : 'row';

  return (
    <div style={{
      color: '#525254', display: 'flex', flexDirection, height: '400px', width: '100%', margin: '2rem', padding: '2rem', boxShadow: 'rgba(149, 157, 165, 0.05) 0px 8px 24px',
    }}
    >
      <div style={{
        width: '50%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '.15rem',
      }}
      >
        <Image
          src={image}
          width={350}
          height={350}
        />
      </div>
      <div style={{
        padding: '40px', width: '50%', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}
      >
        <h3>{headline}</h3>
        <p>{text}</p>
      </div>

    </div>

  );
}
