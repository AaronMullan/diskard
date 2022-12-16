import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import { gsap } from 'gsap';
import Layout, { siteTitle } from '../components/layout';
import Hero from '../components/Hero';
import Blade from '../components/Blade';
import Callout from '../components/Callout';

export default function Home() {
  const heroRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Our animations can use selector text like ".box"
      // this will only select '.box' elements that are children of the component
      gsap.to('.box', {
        delay: 0.8,
        top: '-100%',
        ease: 'expo.inOut',
      });
      // or we can use refs
      // gsap.to(circle.current, { rotation: 360 });
    }, heroRef); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="box">
        <Hero />
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
        text="Our proprietary AI provides Diskârd users with customized garbage deliveries on their own schedule."
        reverse
      />
      <Blade
        image="/images/carryingBag.png"
        headline="Exclusive Vendors"
        text="We partner with best-in-class trash providers to source artisinal debris and detritus."
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
