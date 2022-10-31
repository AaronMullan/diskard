import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';

export default function HeaderLinks() {
  const headerLinkData = [
    { text: 'How it works', link: '/#how-it-works' },
    { text: 'What we take', link: '/categories' },
    { text: 'Pricing', link: 'pricing' },
    { text: 'Transparency', link: 'transparency' },
    { text: 'Questions?', link: 'questions' }];

  return (
    <div className={styles.headerlinks}>
      {headerLinkData.map((element) => (
        <Link href={element.link}>
          {element.text}
        </Link>
      ))}
    </div>
  );
}
