/* eslint-disable max-len */
import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import { gsap } from 'gsap';
import Layout, { siteTitle } from '../components/layout';
import Hero from '../components/Hero';
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
        text="What are a few measly dollars compared to the status of the Diskârd box on your porch? You gotta spend money to make money, right?"
        reverse
      />
      <Blade
        image="/images/carryingBag.png"
        headline="Diskârd membership includes:"
        text="Other garbage collection services actually REMOVE your collection. We respect your collection, and every week we have a featured category of bespoke additions. Recent highlights: 30 years of National Geographic magazines, multiple incomplete Monopoly games. "
      />
    </Layout>
  );
}
