/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Button from '../components/Button';

export default function Categories() {
  return (
    <Layout categories>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div style={{
        width: '100%', minHeight: '600px',
      }}
      >
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <input label="name" type="text" />
          <input label="email" type="text" />
          <input label="subject" type="text" />
          <input label="how can we help" type="textarea" />
          <Button type="submit" buttonText="send" />
        </form>
      </div>
    </Layout>
  );
}
