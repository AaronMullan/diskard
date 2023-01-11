/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
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
          headline="Recyclable and reusable stuff, delivered right to your front porch."
          text="More to recycle, to make the world a better place."
          image="/images/premium2.png"
          altText="A white box which seems unopenable and has illegible text next to an orange cloth bag, also with illegible text. A creepy hand direct from the uncanny valley is pulling some white paper or fabric or something out of the bag. Strong how_do_you_do_fellow_kids.jpg vibes. Like, complete obvious fakeout."
          heroImageStyles={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
        />
      </div>
      <Blade
        image="/images/clothesPile2.png"
        altText="AI-generated pile of debris, including a t-shirt, some like rags or bags I guess, maybe like some headphones or something, and a pair of shoes."
        headline="We show up with just piles of refuse"
        text="No need to worry about procuring your own waste. Diskârd shows up, again and again. Worn-out T-shirts, CD's of favorite albums from your teens, first paperback editions of popular non-fiction books: We deliver every week."
        reverse
      />
      <Blade
        image="/images/carryingBag3.png"
        altText="Sorta creepy AI-generated image of a handsome dude with an illegible t-shirt on. Like what is wrong with his mouth?  It's so weird."
        headline="Decluttering: Unlocked"
        text="Other garbage collection services actually REMOVE your collection. We respect your collection, and every week we have a featured category of bespoke additions. Recent highlights: 30 years of National Geographic magazines, multiple incomplete Monopoly games. "
      />
      <Blade
        image="/images/walkingAway2.png"
        altText="Three people wearing backpacks walking away from the camera. It seems like the metanarrative is that this family has, by outsourcing their garbage acquisition, enabled more free time for themselves and have with the same stroke helped preserve the beauty of nature."
        headline="Big Chunky ones, too"
        text="Our exclusive network of junksmiths is able to accommodate the largest of collectables. With 5 business days notice, we can deliver a palette of broken, incompatable Lionel and American Flyer trains and tracks to your porch. Within 4 weeks we can have a '68 Porsche on blocks in front of your house."
        reverse
      />
    </Layout>
  );
}
