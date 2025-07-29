"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const HeroSection = () => {
  const imageRef = useRef();
  const boxRef = useRef();

  useGSAP(() => {
    gsap.to(imageRef?.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        markers: true,
        start: "500px 50%",
        end: "500px 100px",
        scrub: 0.5,
      },
      x: -400,
      y: 100,
      willChange: "transform",
      opacity: 1,
      transform: "perspective(1200px)",
      height: "800px",
      rotateX: 0,
    });
  }, []);
  return (
    <div className="bg-gradient-to-b from-[rgba(252,252,252,0)] to-[rgb(252,252,252)] w-full flex justify-center min-h-[200vh]">
      <div
        className="w-full flex items-center justify-start  flex-col gap-4 overflow-hidden  min-h-[100vh]"
        ref={boxRef}
      >
        <h1 className="text-8xl font-bold w-full md:w-[80%] text-center ">
          Payments and transfers. <br /> Fast and safe.
        </h1>
        <p className="text-gray-500 ">
          Local and international transfers, 1000+ types of <br /> payments, up
          to 3% of cashbacks and a lot more
        </p>
        <img
          src="/assets/hero.avif"
          alt=""
          ref={imageRef}
          style={{
            transform: "perspective(1200px) translateY(-60px) rotateX(20deg)",
            position: "relative",
            zIndex: 200,
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
