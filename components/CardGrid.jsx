import React from 'react';
import Card from './Card';
import useMediaQuery from '../hooks/useMediaQuery';

export default function CardGrid({ data }) {
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', margin: '40px', maxWidth: '1200px' }}>
        <div style={{ marginBottom: '25px' }}>
          <h2>Everything you need to know</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr', gap: '50px' }}>
          {data.map((element) => (<Card title={element.title} image={element.image} link={element.link} />))}
        </div>
      </div>
    </div>

  );
}
