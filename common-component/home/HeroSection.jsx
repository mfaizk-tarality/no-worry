"use client";

import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ExternalLink, Star } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useMemo, useRef } from "react";
import WrapButton from "@/components/ui/wrap-button";
import TextType from "@/component/TextType/TextType";
import Header from "../header";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const HeroSection = () => {
  const { setTheme } = useTheme();
  // const { setTheme } = useTheme();
  // useEffect(() => {
  //   setTheme("light");
  // }, []);
  const imageRef = useRef();
  const boxRef = useRef();
  const { md, lg, sm, xl } = useBreakpoint();
  const textBoxRef = useRef();

  useEffect(() => {
    setTheme("light");
  }, []);

  const yAxisvalue = useMemo(() => {
    if (xl) {
      return 80;
    }
    if (lg) {
      return 50;
    }
    if (md) {
      return 0;
    }
    if (sm) {
      return 0;
    }
  }, [md, lg, sm, xl]);

  const xAxisvalue = useMemo(() => {
    if (xl) {
      return -400;
    }
    if (lg) {
      return -300;
    }
    if (md) {
      return 0;
    }
    if (sm) {
      return 0;
    }
  }, [md, lg, sm, xl]);

  useGSAP(() => {
    gsap.to(imageRef?.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        start: "200px 50%",
        end: "200px 20%",
        scrub: 0.5,
        duration: 0.5,
        ease: "expoScale(1,7,none)",
      },
      x: xAxisvalue,
      y: yAxisvalue,
      willChange: "transform",
      opacity: 1,
      transform: "perspective(1200px)",
      height: "500px",
      rotateX: 0,
    });
  }, [yAxisvalue]);

  useGSAP(() => {
    gsap.to(textBoxRef?.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        start: "200px 50%",
        end: "100px 100px",
        scrub: 0.5,
      },
      opacity: 1,
      scale: 1,
    });
  }, []);

  return (
    <div className=" w-full flex justify-center flex-col mb-24 2xl:mb-0">
      <Header />
      <div className="h-full w-full flex flex-col justify-center items-center py-20 gap-4">
        <h1 className="text-xl md:text-7xl font-bold w-full md:w-[80%] text-center text-brand">
          India का Smartest Crypto Trading App
        </h1>

        <TextType
          text={[
            "Trade crypto effortlessly with zero fees and instant withdrawals.",
            "Trade crypto effortlessly with zero fees and instant withdrawals.",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className=" text-center text-xl font-semibold"
        />
      </div>

      <div className="relative w-full z-50  overflow-x-clip">
        <div
          className="w-full flex items-center justify-start  flex-col gap-4 overflow-hidden  min-h-[80vh]"
          ref={boxRef}
        >
          <img
            src="/assets/hero.avif"
            ref={imageRef}
            className=" -translate-y-[220px] md:-translate-y-[420px] object-contain w-[900px] absolute z-[200] transform-[perspective(1200px)_rotateX(40deg)]"
          />
        </div>
        <div
          ref={textBoxRef}
          className="hidden lg:flex items-center md:justify-end md:absolute md:top-1/2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10 w-full h-full opacity-0"
        >
          <div className="md:w-[50%] w-full ">
            <RightBox />
          </div>
        </div>
      </div>
      <div className=" lg:hidden flex items-center  z-10 w-full h-full overflow-hidden scale-100">
        <div className="w-full  text-center">
          <RightBox />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

const RightBox = () => {
  return (
    <div className="lg:w-[70%] flex flex-col text-center gap-2 items-center justify-center mt-20 sm:mt-0 opacity-100 ">
      <p className="text-2xl md:text-4xl text-sub-text font-semibold">
        Launch Bonus: Get ₹250 worth of Bitcoin FREE,
      </p>

      <div className="flex items-center justify-center mt-4 gap-4 flex-col md:flex-row">
        <div className="flex ring ring-gray-500/60  active:ring-customPurple active:bg-customPurple  active:text-white  hover:ring-customPurple hover:bg-customPurple hover:text-white w-64 justify-center p-2 px-4 rounded-4xl items-center transition-all delay-100 duration-100 ease-linear ">
          <p>Limited to first 29,999 users</p>
        </div>
        <div className="flex ring ring-gray-500/60 active:ring-customPurple active:bg-customPurple  hover:ring-customPurple hover:bg-customPurple hover:text-white w-64 justify-center p-2 px-4 rounded-4xl items-center transition-all delay-100 duration-100 ease-linear ">
          <p>27,152 spots remaining</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <WrapButton className="mt-10" href="/docs/components/card-carousel">
          <ExternalLink />
          Get Notified
        </WrapButton>
      </div>
    </div>
  );
};
