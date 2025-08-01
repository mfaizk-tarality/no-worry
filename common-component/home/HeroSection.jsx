"use client";

import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTheme } from "next-themes";
import React, { useEffect, useMemo, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const HeroSection = () => {
  const { setTheme } = useTheme();

  const imageRef = useRef();
  const boxRef = useRef();
  const { md, lg, sm, xl } = useBreakpoint();

  useEffect(() => {
    setTheme("light");
  }, []);

  const yAxisvalue = useMemo(() => {
    if (xl) {
      return 100;
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
        // markers: true,
        start: "200px 50%",
        end: "100px 100px",
        scrub: 0.5,
      },
      // x: -400,
      x: xAxisvalue,
      y: yAxisvalue,
      willChange: "transform",
      opacity: 1,
      transform: "perspective(1200px)",
      height: "600px",
      rotateX: 0,
    });
  }, [yAxisvalue]);

  return (
    <div className="bg-gradient-to-r from-white to-customPurple/50 w-full flex justify-center flex-col">
      <div className="h-full w-full flex flex-col justify-center items-center py-20">
        <h1 className="text-xl md:text-8xl font-bold w-full md:w-[80%] text-center ">
          Payments and transfers. <br /> Fast and safe.
        </h1>
        <p className="text-gray-500 text-center">
          Local and international transfers, 1000+ types of
        </p>
      </div>
      <div className="relative  w-full">
        <div
          className="w-full flex items-center justify-start  flex-col gap-4 overflow-hidden  min-h-[80vh]"
          ref={boxRef}
        >
          <img
            src="/assets/hero.avif"
            ref={imageRef}
            className="transform lg:-translate-y-[220px] xl:-translate-y-[520px]"
            style={{
              transform: `perspective(1200px) rotateX(20deg)`,
              position: "relative",
              zIndex: 200,
            }}
          />
        </div>
        <div className="hidden lg:flex items-center md:justify-end md:absolute md:top-1/2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10 w-full h-full  ">
          <div className="md:w-[50%] w-full">
            <h2 className="text-5xl text-start font-bold">
              Launch Bonus: ₹250 Bitcoin FREE <br /> • Limited to first 29,999
              users <br />• 27,152 spots remaining
            </h2>
          </div>
        </div>
      </div>
      <div className=" lg:hidden flex items-center  z-10 w-full h-full  ">
        <div className="w-full">
          <h2 className="text-5xl text-start font-bold">
            Launch Bonus: ₹250 Bitcoin FREE <br /> • Limited to first 29,999
            users <br />• 27,152 spots remaining
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
