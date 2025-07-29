import HeroSection from "@/component/home/HeroSection";
import Section1 from "@/component/home/Section1";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Section1 />
    </div>
  );
};

export default HomePage;
