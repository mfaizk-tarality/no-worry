import HeroSection from "@/component/home/HeroSection";
import Section1 from "@/component/home/Section1";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section2 from "@/component/home/Section2";
import FeatureCards from "@/component/home/Section2";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Section1 />
      {/* <Section2 /> */}
      <FeatureCards />
    </div>
  );
};

export default HomePage;
