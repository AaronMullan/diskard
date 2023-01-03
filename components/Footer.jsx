import React from 'react';
import HeaderLinks from './HeaderLinkss';

export default function Footer() {
  return (
    <div style={{
      padding: '5vh 15vw',
      backgroundColor: '#2c2323',
      color: 'white',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      // display: 'flex',
      // flexDirection: 'row',
    }}
    >
      <div style={{
        // width: '50%',
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
      </div>
    </div>
  );
}
