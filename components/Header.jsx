import React from 'react';
import Image from 'next/image';
import Button from './Button';
import styles from './header.module.css';
import HeaderLinks from './Headerlinks';
import Burger from './Burger';

export default function Header() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80px',
      margin: '0px 20px',
    }}
    >
      <header
        className={styles.header}
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1140px',
        }}
      >
        <div className={styles.burgerLogo}>
          <div>
            <Burger />
          </div>
          <div style={{
            height: '2rem', display: 'inline-block',
          }}
          >
            <Image
              src="/images/logo.png"
              height={32}
              width={120}
              objectFit="cover"
              alt="Ridwell Logo"
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
        </div>
        <HeaderLinks />
        <div>
          <Button buttonText="get started" />
        </div>
      </header>
    </div>
  );
}
