import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

export default function Header({ home = true, name = 'Aaron' }) {
  return (
    <header
      className={styles.header}
      style={{
        width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
      }}
    >

      <div style={{
        width: '10vw', height: '5vw', position: 'fixed', overflow: 'contain',
      }}
      >
        <Image
    //   priority
          src="/images/logo.png"
          responsive
          fill
    //   layout="fill"
    //   width='100%'
    //   height='100%'
    //   className={utilStyles.borderCircle}
    //   height={676}
    //   width={2242}
          objectFit="cover"
    // sizes='100vw'
          alt="Ridwell Logo"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <div>
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </div>

    </header>
  );
}
