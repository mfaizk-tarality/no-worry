import HeroSection from "@/component/home/HeroSection";
import Section1 from "@/component/home/Section1";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section2 from "@/component/home/Section2";
import Section3 from "@/component/home/Section3";
import Section4 from "@/component/home/Section4";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default HomePage;
