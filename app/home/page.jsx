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
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      {/* <Section1 /> */}
      <FallingTextComponent />
      <Section2 />
      <QuickStartGuide />
      <Section3 />
      <SignupReferal />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
};

export default HomePage;
