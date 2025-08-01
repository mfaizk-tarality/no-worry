"use client";
import { createAnimation } from "@/components/ui/theme-animations";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTheme } from "next-themes";
import React, { useMemo, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Section4 = () => {
  const boxRef = useRef();
  const buttonRef = useRef();
  const imageRef = useRef();
  const parentRef = useRef();
  const { sm, lg, md, xl } = useBreakpoint();
  const { theme, setTheme } = useTheme();

  const variant = "circle-blur";
  const start = "center-top";

  const styleId = "theme-transition-styles";

  const updateStyles = React.useCallback((css, name) => {
    if (typeof window === "undefined") return;

    let styleElement = document.getElementById(styleId);

    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = css;
  }, []);

  const toggleTheme = React.useCallback(
    (themeValue) => {
      const animation = createAnimation(variant, start);

      updateStyles(animation.css, animation.name);

      if (typeof window === "undefined") return;

      const switchTheme = () => {
        setTheme(themeValue);
      };

      if (!document.startViewTransition) {
        switchTheme();
        return;
      }

      document.startViewTransition(switchTheme);
    },
    [theme, setTheme]
  );

  const scalevalue = useMemo(() => {
    return sm ? 1.2 : 1.6;
  }, [sm, lg, md, xl]);

  useGSAP(() => {
    gsap.to(imageRef?.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        // markers: true,
        start: "200px 50%",
        end: "400px 100px",
        scrub: 0.5,
      },

      y: -400,
      scale: scalevalue,
    });
  }, [scalevalue]);

  useGSAP(() => {
    gsap.to(imageRef?.current, {
      scrollTrigger: {
        trigger: parentRef.current,
        // markers: true,
        start: "top",
        end: "top",
        scrub: 0.5,
        onEnter: () => {
          toggleTheme("dark");
        },
        onLeaveBack: () => {
          toggleTheme("light");
        },
      },
    });
  }, []);

  return (
    <div className="overflow-hidden" ref={parentRef}>
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
              Consistency <br /> The Nowory Way
            </p>
            <p className="text-xs text-center text-gray-600">
              What’s yours stays yours — safe, intact, and always accessible.
              <br />
              <span className="text-white">
                From login to trade, every step is shielded with layered
                security and proactive fraud detection.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
