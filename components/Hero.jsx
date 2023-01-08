/* eslint-disable max-len */
import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

export default function Hero({
  image, headline, text,
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
        backgroundRepeat: 'no-repeat',
      }}
      >
        <div style={{
          backgroundColor: isDesktop ? null : 'hsla(0,0%,0%, .5)',
        }}
        >
          <h1>{headline}</h1>
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
        backgroundSize: 'cover',
      }}
      />
    </div>
  );
}
