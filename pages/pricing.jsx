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
        headline="Your neighbors already signed up"
        text="What are a few measly dollars compared to the status of the Diskârd box on your porch? You gotta spend money to make money, let's not bicker and argue over who's fleecing who."
        reverse
      />
      <Blade
        image="/images/garbodor.jpg"
        headline="Diskârd membership includes:"
        text="Our exclusive license of Trashalanche&trade; technology from Garbodor Enterprises unleashes powerful detritusportunities. Who knows what you'll create!"
        bladeStyles={{ backgroundColor: '#FFEADA' }}
      />
    </Layout>
  );
}
