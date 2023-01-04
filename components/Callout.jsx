/* eslint-disable max-len */
import React from 'react';
import Button from './Button';
import useMediaQuery from '../hooks/useMediaQuery';

export default function Hero() {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  return (

    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
      <div style={{
        backgroundColor: '#00BCAA', padding: '40px 20vw', width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}
      >
        <p style={{ color: 'white', lineHeight: isDesktop ? '4em' : null }}>Want to make an upgrade to your trash collection?</p>
        <h3 style={{ color: 'white' }}>Find out about bespoke junk delivery to save time and money.</h3>
        <div>
          <Button buttonText="Learn More" isLight url="/contact/" />
        </div>
      </div>
    </div>
  );
}
