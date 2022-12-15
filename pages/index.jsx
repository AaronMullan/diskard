import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import { gsap } from 'gsap';
import Layout, { siteTitle } from '../components/layout';
import Hero from '../components/Hero';

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
        paddingTop: '2rem',
        font: 'system',
        textDecoration: 'underline',
        textDecorationColor: '#F5660040',
        textDecorationThickness: '.5rem',
      }}
      >
        <h2 id="how-it-works">HERE&apos;S HOW IT WORKS</h2>
      </div>
    </Layout>
  );
}
