import React from 'react';
import Link from 'next/link';
import headerLinksData from '../data/headerLinksData';

export default function HeaderLinks({ isFooter, isDesktop }) {
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
