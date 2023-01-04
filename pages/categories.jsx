/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
// import { gsap } from 'gsap';
import Layout, { siteTitle } from '../components/layout';
import Hero from '../components/Hero';
import Blade from '../components/Blade';

export default function Categories() {
  return (
    <Layout categories>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="box">
        <Hero
          headline="Recylable and reusable stuff, delivered right to your front porch."
          text="More to recyle, to make the world a better place."
          image="/images/premium2.png"
        />
      </div>

      <Blade
        image="/images/clothesPile2.png"
        headline="We show up with just piles of refuse"
        text="No need to worry about procuring your own waste. Diskârd shows up, again and again. Worn-out T-shirts, CD's of favorite albums from your teens, first paperback editions of popular non-fiction books: We deliver every week."
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
        text="Our exclusive network of junksmiths is able to accomodate the largest of collectables. With 5 business days notice, we can deliver a palette of broken, incompatable Lionel and American Flyer trains and tracks to your porch. Within 4 weeks we have a '68 Porsche on blocks in front of your house."
        reverse
      />

    </Layout>
  );
}
