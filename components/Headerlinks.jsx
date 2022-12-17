import React from 'react';
import Link from 'next/link';
// import styles from './header.module.css';

export default function HeaderLinks({ isFooter }) {
  const headerLinkData = [
    { text: 'How it works', link: '/#how-it-works' },
    { text: 'What we bring', link: '/categories' },
    { text: 'Pricing', link: 'pricing' },
    { text: 'Opacity', link: 'opacity' },
    { text: 'Questions?', link: 'questions' }];

  const color = isFooter ? 'white' : '#00bcaa';
  return (
    <div
      // className={styles.headerlinks}
      style={{
        color: isFooter ? 'white' : '#00bcaa',
        display: 'flex',
        flexDirection: isFooter ? 'column' : 'row',
        minWidth: !isFooter ? '450px' : null,
        justifyContent: 'space-between',
        margin: '10px',
        lineHeight: '2em',
      }}
    >
      {headerLinkData.map((element) => (
        <Link href={element.link} style={{ color }} key={element.link}>
          {element.text}
        </Link>
      ))}
    </div>
  );
}
