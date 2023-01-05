import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import CardGrid from '../components/CardGrid';
import ContactBar from '../components/ContactBar';
import faqCardData from '../data/faqCardData';

export default function Questions() {
  return (
    <Layout>
      <Head>
        <title>Diskard FAQ</title>
      </Head>
      <div>
        <div style={{
          backgroundColor: '#FDF4ED',
          height: '344px',
          color: '#525254',
          textAlign: 'center',
          paddingTop: '60px',
          display: 'flex',
          justifyContent: 'center',
        }}
        >
          <div style={{ maxWidth: '574px', width: '100%' }}>
            <h1>Ask us Anything!</h1>
            <p style={{ fontSize: '24px' }}>Just saying hi? That’s great too!</p>
            <ContactBar />
          </div>
        </div>
      </div>
      <CardGrid data={faqCardData} />
    </Layout>
  );
}
