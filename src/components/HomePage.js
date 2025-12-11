import React from "react";
import Hero from "./Hero";
import WhyChoose from "./WhyChoose";
import HowWorks from "./HowWorks";
import Newsletter from "./Newsletter";
import TestimonialCarousel from "./TestimonialCarousel";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <WhyChoose />
      <HowWorks />
      <Newsletter /> <TestimonialCarousel />
    </div>
  );
};

export default HomePage;
