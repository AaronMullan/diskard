import React from 'react'
import Image from 'next/image';

export default function Card ({title, image}) {
    return(
        <div style={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            height: '325px',
            boxShadow: '0 2px 5px 0 rgb(0 0 0 / 46%)',
            minWidth: '280px',
            maxWidth: '400px'
            }}>
            <h3>{title}</h3>
            <Image
              src={image}
              height={200}
              width={200}
              alt={title}
      
            />
        </div>
    )
}