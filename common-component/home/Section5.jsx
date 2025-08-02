"use client";

import { useInView } from "framer-motion";
import { useTheme } from "next-themes";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Section5 = () => {
  const { setTheme } = useTheme();
  const parentRef = useRef();
  const isInView = useInView(parentRef, {
    margin: "-1px 0px -99% 0px",
    once: false,
  });

  useEffect(() => {
    if (isInView) {
      setTheme("dark");
    }
  }, [isInView]);

  return (
    <motion.div className="grid grid-cols-12 gap-6" ref={parentRef}>
      <div className="col-span-12 w-full flex justify-center items-center container mx-auto md:mt-52 overflow-hidden h-[500px]">
        <div className="grid grid-cols-12  w-full xl:w-[70%]   gap-5   mx-10 md:mx-0 rounded-3xl h-[500px] bg-gradient-to-tl from-[#023768] to-[#14161f] inset-shadow-2xs shadow-[#0888ff]">
          <div className="col-span-12 md:col-span-6 flex items-center px-8">
            <p className="text-2xl md:text-6xl font-medium">
              Made for Mobile. Built for You.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 relative h-60 md:h-auto">
            <img
              src="/assets/sec5.svg"
              alt=""
              className=" md:h-[700px] object-contain absolute"
            />
          </div>
        </div>
      </div>
      <div className="col-span-12 w-full flex justify-center items-center container mx-auto overflow-hidden  md:h-[500px]">
        <div className="grid grid-cols-12 grid-rows-12  w-full xl:w-[70%]  mx-10 md:mx-0 rounded-3xl md:h-[500px]  gap-6">
          <div className="col-span-12 md:col-span-6 row-span-12 bg-gradient-to-tl from-[#023768] to-[#14161f] rounded-3xl flex justify-center items-center flex-col p-6 gap-8 ">
            <p className="text-2xl font-medium">
              Nowory{" "}
              <span className="text-white/40">
                is a fast, secure, and beginner-friendly crypto platform that
                lets you buy, sell, and own digital assets instantly - with zero
                trading fees and no hidden complexity.
              </span>
            </p>

            <img src="/assets/sec52.svg" alt="" />
          </div>
          <div className="col-span-12 md:col-span-6 row-span-12 md:row-span-8 bg-[#1c81fc] rounded-3xl flex items-center justify-center">
            <p className="text-3xl md:text-5xl font-medium text-center">
              Own More, Worry Less <br /> That’s Nowory.
            </p>
          </div>
          <div className=" col-span-12 md:col-span-6 row-span-12 md:row-span-4 bg-gradient-to-tl from-[#023768] to-[#14161f] rounded-3xl flex items-center justify-center">
            <p className="text-3xl font-medium text-center">
              Get real-time notifications <br />{" "}
              <span className="text-white/50">about all your transactions</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Section5;
