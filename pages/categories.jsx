/* eslint-disable max-len */
import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import { gsap } from 'gsap';
import Layout, { siteTitle } from '../components/layout';
import Hero from '../components/Hero';
import Blade from '../components/Blade';
import Callout from '../components/Callout';

export default function Categories() {
  return (
    <Layout categories>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="box">
        <Hero />
      </div>

      <Blade
        image="/images/clothesPile.png"
        headline="We show up with just piles of refuse"
        text="No need to worry about procuring your own waste. Diskârd shows up, again and again. Worn-out T-shirts, CD's of favorite albums from your teens, first paperback editions of mass-market non-fiction books: We deliver every week."
        reverse
      />
      <Blade
        image="/images/carryingBag.png"
        headline="Decluttering: Unlocked"
        text="Other garbage collection services actually REMOVE your collection. We respect your collection, and every week we have a featured category of bespoke additions. Recent highlights: 30 years of National Geographic magazines, multiple incomplete Monopoly games. "
      />
      <Blade
        image="/images/walkingAway.png"
        headline="Big Chunky ones, too"
        text="Our exclusive network of junksmiths is able to accomodate the largest of collectables. With 5 business days notice, we can have a '68 Peugeot on blocks in front of your house. Within 4 weeks we can deliver a palette of broken, incompatable Lionel and American Flyer trains and tracks to your porch."
        reverse
      />

    </Layout>
  );
}
