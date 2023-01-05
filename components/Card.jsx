import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Card({ title, image, link }) {
  return (
    <Link href={link} style={{ color: '#525254' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 2px 5px 0 rgb(0 0 0 / 46%)',
        minWidth: '280px',
        maxWidth: '400px',
      }}
      >
        <div style={{
          padding: '48px 30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
        >
          <div>
            <h3>{title}</h3>
          </div>
          <Image
            src={image}
            width={300}
            height={300}
            alt={title}
          />
        </div>
      </div>
    </Link>
  );
}
