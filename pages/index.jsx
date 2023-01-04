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
          text="Diskârd is an innovative premium garbage arbitrage service providing our clients with exlusive access to top-tier rubbish."
          image="/images/premium.png"
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
        headline="AI-driven Insights"
        text="Our proprietary AI provides Diskârd users with customized garbage deliveries on their own schedule.  Integrations with municipal and boutique garbage removal services ensure you're covered on trash day."
        reverse
      />
      <Blade
        image="/images/carryingBag.png"
        headline="Exclusive Vendors"
        text="We partner with best-in-class trash providers to source artisinal debris and detritus. Reduced, Re-used, and Upcycled packages are available."
      />
      <Blade
        image="/images/walkingAway.png"
        headline="Feel Good About Your Garbage Supply"
        text="Diskârd is flipping the trash collection industry on it's head, so you can feel great about where your garbage comes from."
        reverse
      />
      <Callout />
    </Layout>
  );
}
