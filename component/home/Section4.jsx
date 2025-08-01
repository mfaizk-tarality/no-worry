"use client";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useMemo, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Section4 = () => {
  const boxRef = useRef();
  const imageRef = useRef();
  const { sm, lg, md, xl } = useBreakpoint();
  const scalevalue = useMemo(() => {
    return sm ? 1.2 : 1.6;
  }, [sm, lg, md, xl]);
  console.log(scalevalue, sm, "asdads");

  useGSAP(() => {
    gsap.to(imageRef?.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        markers: true,
        start: "200px 50%",
        end: "400px 100px",
        scrub: 0.5,
      },
      y: -400,
      scale: scalevalue,
    });
  }, [sm]);
  return (
    <div className="bg-black overflow-hidden">
      <div
        className="w-full flex justify-center items-center container mx-auto mt-52 min-h-screen lg:min-h-[140vh] relative"
        ref={boxRef}
      >
        <div
          className="flex justify-center items-start h-full w-full  relative"
          ref={imageRef}
        >
          <img
            src="/assets/lock.avif"
            alt=""
            className="w-[80%] lg:w-[400px] xl:w-[600px] object-contain absolute z-20"
          />
          <div className="flex flex-col justify-center items-center z-40 absolute  h-[700px]">
            <img
              src="/assets/shield.avif"
              alt=""
              className="h-24 object-contain"
            />
            <p className="bg-gradient-to-r from-[#60b2ff] to-[#60b3ff]/30 text-transparent bg-clip-text font-semibold lg:text-6xl text-center">
              Comprehensive security <br /> of anti-fraud
            </p>
            <p className="text-xs text-center text-gray-600">
              An extensive security system has been implemented <br />
              <span className="text-white">for privacy of your money.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
