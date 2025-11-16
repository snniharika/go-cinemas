import React from "react";
import HeroSection from "../Components/HeroSection";
import Carousel from "../Components/Carousel";
import FeaturedSection from "../Components/FeaturedSection";
import BigPosters from "../Components/BigPosters";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <BigPosters />
      <Carousel />
      <FeaturedSection />
    </>
  );
};

export default LandingPage;
