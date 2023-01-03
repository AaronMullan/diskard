/* eslint-disable max-len */
import React from 'react';
import Image from 'next/image';
import useMediaQuery from '../hooks/useMediaQuery';

export default function Hero() {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  return (
    <div style={{
      display: 'flex', flexDirection: isDesktop ? 'row' : 'column', width: '100%', color: '#525254',
    }}
    >
      <div style={{
        backgroundColor: '#ffeada', padding: '40px', height: isDesktop ? '640px' : '400px', width: isDesktop ? '50%' : '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}
      >
        <h1>Premium Waste, Personalized.</h1>
        <p>Diskârd is an innovative premium garbage arbitrage service providing our clients with exlusive access to top-tier rubbish.</p>
      </div>
      <div style={{
        height: '640px', width: isDesktop ? '50%' : '100%', position: 'relative',
      }}
      >
        <Image
          src="/images/premium.png"
          fill
        />
      </div>
    </div>

  );
}
