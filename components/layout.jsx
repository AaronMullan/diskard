import React from 'react';
import Head from 'next/head';
import styles from './layout.module.css';
import Header from './Header';
import Footer from './Footer';

export const siteTitle = 'Diskard';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Diskârd is a boutique garbage arbitrage and collection service."
          />
          <meta
            property="og:image"
            content="/images/DISKARD.png"
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
