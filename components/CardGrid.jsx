import React from 'react';
import Card from './Card';

export default function CardGrid() {
  const cardgridData = [
    { title: 'All about pickups', image: 'https://placekitten.com/200/200' },
    { title: 'Categories and Add-ons', image: 'https://placekitten.com/200/200' },
    { title: 'Your Account', image: 'https://placekitten.com/200/200' },
    { title: 'Everything else', image: 'https://placekitten.com/200/200' },
  ];

  return (
    <div style={{ textAlign: 'center', margin: '40px' }}>
      <div>
        <h2>Everything you need to know</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
        {cardgridData.map((element) => (<Card title={element.title} image={element.image} />))}
      </div>
    </div>

  );
}
