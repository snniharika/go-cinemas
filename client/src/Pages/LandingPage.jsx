import React from "react";
import HeroSection from "../Components/HeroSection";
import FeaturedSection from "../Components/FeaturedSection";
import Carousel from "../Components/Carousel";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <Carousel />
      <FeaturedSection />
    </>
  );
};

export default LandingPage;
