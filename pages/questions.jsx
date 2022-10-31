import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import CardGrid from '../components/CardGrid';

export default function Questions() {
  return (
    <Layout>
      <Head>
        <title>Midwell FAQ</title>
      </Head>
      <div>
        <div style={{
          backgroundColor: '#FDF4ED', height: '344px', color: '#525254', textAlign: 'center', paddingTop: '60px',
        }}
        >
          <div>
            <h1>Ask us Anything!</h1>
            <p style={{ fontSize: '24px' }}>Just saying hi? That’s great too!</p>
          </div>
        </div>
      </div>
      <CardGrid />
    </Layout>
  );
}
