/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Hero from '../components/Hero';
import Blade from '../components/Blade';
import Callout from '../components/Callout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="box">
        <Hero
          headline="Premium Waste, Personalized."
          text="Diskârd is an innovative premium garbage arbitrage service providing our clients with exlusive access to top-tier trash."
          image="/images/premium.png"
          altText="Awkward photo of a box/bin and a matching bag.  The bag is being held by a person who is mostly out-of-frame but if it's one person either their hands or feet are on backwards and their left foot is like really frikkin weird."
        />
      </div>
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        font: 'system',
        textDecoration: 'underline',
        textDecorationColor: '#F5660040',
        textDecorationThickness: '.3rem',
        textUnderlineOffset: '1rem',
      }}
      >
        <h2 style={{ color: '#525254' }} id="how-it-works">HERE&apos;S HOW IT WORKS</h2>
      </div>
      <Blade
        image="/images/clothesPile.png"
        altText="AI-generated pile of fabric items, one is a t-shirt but the others are sorta unclear."
        headline="AI-driven Insights"
        text="Our proprietary AI provides Diskârd users with customized garbage deliveries on their own schedule.  Integrations with municipal and boutique garbage removal services ensure you're covered on trash day."
        reverse
      />
      <Blade
        image="/images/carryingBag.png"
        altText="AI man probably about 25, flush with the vigor of youth, easily transporting a bag of what we assume is a custom garbage delivery."
        headline="Exclusive Vendors"
        text="We partner with best-in-class trash providers to source artisinal debris and detritus. Reduced, Re-used, and Upcycled packages are available."
      />
      <Blade
        image="/images/walkingAway.png"
        altText="Three AI people, one wearing a backpack, walking away from the camera. They seem to be on a walk in the park."
        headline="Feel Good About Your Garbage Supply"
        text="Diskârd is flipping the trash collection industry on it's head, so you can feel great about where your garbage comes from."
        reverse
      />
      <Callout />
    </Layout>
  );
}
