import React from 'react';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';
import headerLinkData from '../data/headerLinksData';

export default function HeaderLinksMobile() {
  return (
    <Menu styles={{
      bmBurgerButton: {
        position: 'relative',
        width: '36px',
        height: '30px',
        top: '3px',
      },
      bmBurgerBars: {
        background: '#373a47',
      },
      bmBurgerBarsHover: {
        background: '#a90000',
      },
      bmMenu: {
        background: '#373a47',
        position: 'fixed',
        fontSize: '1.15em',
        width: '260px',
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, .3)',
      },
      bmItemList: {
        color: '#ffffff',
        padding: '0.8em',
      },
    }}
    >
      {headerLinkData.map((element) => (
        <Link href={element.link} style={{ color: 'white' }} key={element.link}>
          {element.text}
        </Link>
      ))}
    </Menu>
  );
}
