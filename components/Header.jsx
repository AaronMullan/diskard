import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';
import Button from './Button';
import styles from './header.module.css';
import HeaderLinks from './Headerlinks';
import useMediaQuery from '../hooks/useMediaQuery';

export default function Header() {
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
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className={styles.bmBurgerButton}>
            <Menu>
              <a id="home" className="menu-item" href="/">Home</a>
              <a id="about" className="menu-item" href="/about">About</a>
              <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>
          </div>
          <div style={{
            height: '2rem', display: 'inline-block',
          }}
          >
            <Link href="/">
              <Image
                src="/images/DISKARD.png"
                height={32}
                width={120}
                alt="Diskard Logo"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </Link>
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
