import React from 'react';
import Head from 'next/head';
import styles from './layout.module.css';
import Header from './Header';
import Footer from './Footer';

export const siteTitle = 'Diskard';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Domine"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Sen"
        /> */}
        <meta
          name="description"
          content="Learn how to clone another website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          // eslint-disable-next-line max-len
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
