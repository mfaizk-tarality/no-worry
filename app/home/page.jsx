import HeroSection from "@/common-component/home/HeroSection";
import Section1 from "@/common-component/home/Section1";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section2 from "@/common-component/home/Section2";
import Section3 from "@/common-component/home/Section3";
import Section4 from "@/common-component/home/Section4";

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
