import HeroSection from "@/common-component/home/HeroSection";
import Section1 from "@/common-component/home/Section1";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section2 from "@/common-component/home/Section2";
import Section3 from "@/common-component/home/Section3";
import Section4 from "@/common-component/home/Section4";
import Section5 from "@/common-component/home/Section5";
import Section6 from "@/common-component/home/Section6";
import FallingTextComponent from "@/common-component/home/FallingText";
import QuickStartGuide from "@/common-component/home/QuickStartGuide";
import SignupReferal from "@/common-component/home/SignupReferal";
import FAQSection from "@/common-component/home/FAQSection";
import PriceMarquee from "@/common-component/home/PriceMarquee";
const HomePage = () => {
  return (
    <div>
      <div className="bg-[linear-gradient(to_bottom,rgba(252,252,252,0.5),rgba(252,252,252)),url('/assets/hero-bg.svg')] bg-no-repeat bg-cover bg-center">
        {/* <div className=""> */}
        <HeroSection />
        {/* <Section1 /> */}
        {/* <FallingTextComponent /> */}
        <PriceMarquee />
        <Section2 />
        <QuickStartGuide />
        <Section3 />
        <SignupReferal />
      </div>
      <Section4 />
      <Section5 />
      <FAQSection />
    </div>
  );
};

export default HomePage;
