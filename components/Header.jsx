import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import styles from './header.module.css';
import HeaderLinks from './HeaderLinkss';
import useMediaQuery from '../hooks/useMediaQuery';
import HeaderLinksMobile from './HeaderLinksMobile';

export default function Header() {
  const isDesktop = (useMediaQuery('(min-width: 960px)'));
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80px',
      margin: '0px 20px',
      h1: {
        fontWeight: 'bold',
      },
    }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Domine"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Sen"
      />
      <header
        className={styles.header}
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div>
            {!isDesktop && <HeaderLinksMobile isDesktop={isDesktop} /> }
          </div>
          <div style={{
            height: '2rem', width: '120px', display: 'inline-block', marginLeft: isDesktop ? null : '20px',
          }}
          >
            <Link href="/">
              <Image
                src="/images/DISKARD.png"
                height={32}
                width={120}
                minWidth={120}
                alt="Diskard Logo"
                priority
              />
            </Link>
          </div>
        </div>
        <HeaderLinks isDesktop={isDesktop} />
        <div>
          <Button buttonText="get started" />
        </div>
      </header>
    </div>
  );
}
