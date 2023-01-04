/* eslint-disable max-len */
import React from 'react';
import Image from 'next/image';
import useMediaQuery from '../hooks/useMediaQuery';

export default function Hero({ image, headline, text }) {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  console.log(image);
  return (
    <div style={{
      display: 'flex', flexDirection: isDesktop ? 'row' : 'column', width: '100%', color: '#525254',
    }}
    >
      <div style={{
        backgroundColor: '#ffeada', padding: '40px', height: isDesktop ? '500px' : '400px', width: isDesktop ? '50%' : '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}
      >
        <h1>{headline}</h1>
        <p>{text}</p>
      </div>
      <div style={{
        height: '500px', width: isDesktop ? '50%' : '100%', position: 'relative',
      }}
      >
        <Image
          src={image}
          fill
          style={{ padding: '10px', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% ' }}
        />
      </div>
    </div>

  );
}
