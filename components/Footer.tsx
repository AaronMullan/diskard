import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';
import Button from './Button';
import styles from './header.module.css';
import HeaderLinks from './Headerlinks';

export default function Header() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    //   height: '80px',
      margin: '0px',
      backgroundColor: '#2c2323',
      color: 'white'
    }}
    >
        
<HeaderLinks isFooter/>
    </div>
  );
}
