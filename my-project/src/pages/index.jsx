import React from 'react';
import SEOHead from "@/components/Head";
import Hero from "@/components/Hero.tsx";
import PrimaryFeatures from "@/components/PrimaryFeatures";
import SecondaryFeatures from "@/components/SecondaryFeatures";
import CallToAction from '@/components/CallToAction';
import Pricing from '@/components/Pricing.tsx';
import Testimonials from "@/components/Testimonials.tsx";

const Home = () => {
  return (
    <>
      <SEOHead title="TaxWeb" />
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <Testimonials />
      <Pricing />
    </>
  )
}

export default Home