import React from 'react';
import HeaderLinks from './HeaderLinks';

export default function Footer() {
  return (
    <div style={{
      position: 'absolute',
      left: 0,
      padding: '5vh 15vw',
      width: '100%',
      backgroundColor: '#2c2323',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
    }}
    >
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'start',
          margin: '0px',
          backgroundColor: '#2c2323',

        }}
        >
          <HeaderLinks isFooter />
        </div>
        <div style={{ textAlign: 'end', lineHeight: '2em', margin: '10px' }}>
          <p>Hire Me!</p>
          <a
            href="https://www.linkedin.com/in/aaron-mullan/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#009AA8' }}
          >
            See profile
          </a>
          <br />
          <a
            href="https://aaronmullan.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#009AA8' }}
          >
            Visit Portfolio
          </a>
          <br />
          <a
            href="https://github.com/AaronMullan/diskard"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#009AA8' }}
          >
            Site Code
          </a>
          <br />
          Apologies to
          {' '}

          <a
            href="https://www.ridwell.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#f46323' }}
          >
            Ridwell
          </a>
        </div>
      </div>
    </div>
  );
}
