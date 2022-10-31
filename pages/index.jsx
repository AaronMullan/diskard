import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div style={{ backgroundColor: '#ffeada', height: '1000px' }}>index</div>
      </section>
      <h2 id="how-it-works">How it Works</h2>
    </Layout>
  );
}
