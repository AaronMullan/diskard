/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from './layout';

export default function FAQ({ title, headline, text }) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{
          padding: '66px', color: '#525254', maxWidth: '847px', boxShadow: 'rgba(149, 157, 165, 0.05) 0px 8px 24px',
        }}
        >
          <h1>{title}</h1>
          <h2>{headline}</h2>
          <div style={{ padding: '30px 0', strong: { lineHeight: '4em' } }}>
            {text}
          </div>
          <h2>
            <Link href="/questions">
              Back to Questions
            </Link>
          </h2>
        </div>
      </div>
    </Layout>
  );
}
