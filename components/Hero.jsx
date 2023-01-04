/* eslint-disable max-len */
import React from 'react';
import Image from 'next/image';
import useMediaQuery from '../hooks/useMediaQuery';

export default function Hero({
  image, headline, text, heroImageStyles,
}) {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  return (
    <div style={{
      display: 'flex', flexDirection: isDesktop ? 'row' : 'column', width: '100%', color: '#525254',
    }}
    >
      <div style={{
        position: 'absolute',
        left: 0,
        height: isDesktop ? '80vh' : '400px',
        width: '100%',
        background: '#ffeada',
        zIndex: -1,
        borderRadius: '0% 0% 76% 56% / 0% 0% 74% 15% ',
      }}
      />

      <div style={{
        padding: '40px',
        height: isDesktop ? '80vh' : '400px',
        width: isDesktop ? '50%' : '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      >
        <h1>{headline}</h1>
        <p>{text}</p>
      </div>
      <div style={{
        width: isDesktop ? '50%' : '100%',
        position: 'relative',
        display: 'flex',
        alightItems: 'center',
      }}
      >
        <Image
          src={image}
          fill
          style={{ ...heroImageStyles }}
        />
      </div>
    </div>

  );
}
