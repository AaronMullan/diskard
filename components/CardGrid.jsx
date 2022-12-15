import React from 'react';
import Card from './Card';

export default function CardGrid() {
  const cardgridData = [
    { title: 'All about pickups', image: '/images/pickupArtist.png' },
    { title: 'Categories', image: '/images/pieChart.png' },
    { title: 'Your Account', image: '/images/login.png' },
    { title: 'Everything else', image: '/images/everythingElse.png' },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', margin: '40px', maxWidth: '1200px' }}>
        <div style={{ marginBottom: '25px' }}>
          <h2>Everything you need to know</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
          {cardgridData.map((element) => (<Card title={element.title} image={element.image} />))}
        </div>
      </div>
    </div>

  );
}
