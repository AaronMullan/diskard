/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Form from '../components/Form';

export default function Categories() {
  return (
    <Layout categories>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <Form />
      </div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <p>Submissions from this form can be seen at: </p>
        <Link href="/contacts/" style={{ color: '#009AA8' }}>our Contacts page</Link>
        .
      </div>
    </Layout>
  );
}
