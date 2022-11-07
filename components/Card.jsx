import React from 'react';
import Image from 'next/image';

export default function Card({ title, image }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // height: '364px',
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
          width={296}
          height={200}
          alt={title}
        />
      </div>
    </div>
  );
}
