/* eslint-disable max-len */
import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
      <div style={{
        backgroundColor: '#ffeada', padding: '40px', height: '640px', width: '50%', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}
      >
        <h1>Premium Waste, Personalized</h1>
        <p>Diskârd is an innovative premium garbage arbitage firm providing our clients with exlusive access to top-tier rubbish.</p>
      </div>
      <div style={{
        height: '640px', width: '50%', position: 'relative',
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
