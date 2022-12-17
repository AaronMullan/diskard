/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
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
    </Layout>
  );
}
