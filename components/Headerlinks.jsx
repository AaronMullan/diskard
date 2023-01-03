import React from 'react';
import Link from 'next/link';
import headerLinksData from '../data/headerLinksData';

export default function HeaderLinks({ isFooter, isDesktop }) {
  // const headerLinkData = [
  //   { text: 'How it works', link: '/#how-it-works' },
  //   { text: 'What we bring', link: '/categories' },
  //   { text: 'Pricing', link: 'pricing' },
  //   { text: 'Opacity', link: 'opacity' },
  //   { text: 'Questions?', link: 'questions' }];

  const color = isFooter ? 'white' : '#525254';
  return (
    <div
      style={{
        color: isFooter ? 'white' : '#00bcaa',
        display: isDesktop || isFooter ? 'flex' : 'none',
        flexDirection: isFooter ? 'column' : 'row',
        width: '100%',
        minWidth: !isFooter ? '450px' : null,
        padding: isDesktop ? '40px' : null,
        justifyContent: 'space-between',
        margin: '10px',
        lineHeight: '2em',
      }}
    >
      {headerLinksData.map((element) => (
        <Link href={element.link} style={{ color }} key={element.link}>
          {element.text}
        </Link>
      ))}
    </div>
  );
}
