import React from "react";
import Navigation from "../../partials/Navigation";
import Footer from "../../partials/Footer";
import Hero from "./hero/Hero";
import Features from "./features/Features";
import Testimonials from "./testimonials/Testimonials";
import Pricing from "./pricing/Pricing";
import CTA from "./cta/CTA";

const Home = () => {
  return (
    <>
      {" "}
      <div className='min-h-screen bg-gray-100'>
        <Navigation />
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </>
  );
};

export default Home;
