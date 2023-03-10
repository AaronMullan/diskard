/* eslint-disable max-len */
import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

export default function Hero({
  image, headline, text, altText = 'need alt text',
}) {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  return (
    <div style={{
      display: 'flex',
      flexDirection: isDesktop ? 'row' : 'column',
      alignItems: 'center',
      width: '100%',
      color: isDesktop ? '#525254' : '#ffffff',
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
        backgroundImage: isDesktop ? null : `url(${image})`,
        'aria-label': isDesktop ? null : altText,
        backgroundRepeat: 'no-repeat',
      }}
      >
        <div style={{
          backgroundColor: isDesktop ? null : 'hsla(0,0%,0%, .25)',
        }}
        >
          <h1 style={{
            fontSize: isDesktop ? null : '32px',
          }}
          >
            {headline}

          </h1>
          <p>{text}</p>
        </div>
      </div>
      <div style={{
        height: isDesktop ? '80vh' : '50vw',
        width: '50%',
        position: 'relative',
        display: isDesktop ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: isDesktop ? `url(${image})` : null,
        'aria-label': isDesktop ? altText : null,
        backgroundSize: 'cover',
      }}
      />
    </div>
  );
}
