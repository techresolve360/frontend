"use client";

import React from 'react'

import Home from './home/hero/page';
import HowWeHelp from './home/HowWeHelp/Page';
import WhyStandOut from './home/WhyStandout/page';
import Testimonials from './home/testimonial/page';
import Consultation from './home/consultation/page';


const page = () => {
  return (
    <>
     <Home />
      <HowWeHelp />
      <WhyStandOut />
      <Testimonials />
      <Consultation />

    </>
  )
}

export default page