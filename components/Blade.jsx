/* eslint-disable max-len */
import React from 'react';
import Image from 'next/image';
import useMediaQuery from '../hooks/useMediaQuery';

export default function Hero({
  image, headline, text, reverse, bladeStyles,
}) {
  const shouldReverse = reverse ? 'row-reverse' : 'row';
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const flexDirection = isDesktop ? shouldReverse : 'column';
  const desktopJustification = reverse ? 'right' : 'left';
  return (
    <div style={{
      color: '#525254',
      display: 'flex',
      justifyContent: 'center',
      flexDirection,
      width: '100%',
      margin: '2rem 0 0',
      padding: '2rem',
      boxShadow: 'rgba(149, 157, 165, 0.05) 0px 8px 24px',
      ...bladeStyles,
    }}
    >
      <div style={{
        maxWidth: '1200px',
        display: 'flex',
        flexDirection,
      }}
      >
        <div style={{
          width: isDesktop ? '50%' : 'auto',
          position: 'relative',
          display: 'flex',
          justifyContent: isDesktop ? desktopJustification : 'center',
          alignItems: 'center',
          borderRadius: '.15rem',
          padding: '48px',
        }}
        >
          <Image
            src={image}
            width={350}
            height={350}
            alt="test"
          />
        </div>
        <div style={{
          padding: isDesktop ? '48px' : '16px',
          width: isDesktop ? '50%' : 'auto',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        >
          <h3>{headline}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>

  );
}
