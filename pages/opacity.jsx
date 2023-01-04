/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Blade from '../components/Blade';
import Callout from '../components/Callout';

export default function Categories() {
  return (
    <Layout categories>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Blade
        image="/images/unknowables.png"
        headline="Our ways are deliberately opaque."
        text="We are occult overlords, esotericism is our lifeblood. Initiation into our ranks involves a Byzantine sequence of rituals and incantations. Members who complete the 7th rite will enter the ranks of the Garbageri."
        reverse
      />
      <Blade
        image="/images/carryingBag2.png"
        headline="No, seriously where is this stuff coming from?"
        text="Look man, don't ask questions you don't wanna know the answers to, OK? Arbitrage is a complicated business model and we paid the fines and in our settlement we did not admit to any wrongdoing."
      />
      <Callout />
    </Layout>
  );
}
