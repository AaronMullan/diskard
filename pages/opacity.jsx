/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Blade from '../components/Blade';

export default function Categories() {
  return (
    <Layout categories>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Blade
        image="/images/clothesPile.png"
        headline="Our ways are deliberately opaque."
        text="We are occult overlords, esotericism is our lifeblood. Initiation into our ranks involves a Byzantine sequence of rituals and incantations."
        reverse
      />
      <Blade
        image="/images/carryingBag.png"
        headline="No, seriously where is this stuff coming from?"
        text="Look man, don't ask questions you don't wanna know the answers to, OK? Arbitrage is a complicated business model and we paid the fines and in our settlement we did not admit to any wrongdoing."
      />
    </Layout>
  );
}
