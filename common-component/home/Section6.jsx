"use client";
import clsx from "clsx";
import { useInView } from "framer-motion";
import moment from "moment";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const Section6 = () => {
  const { setTheme, theme } = useTheme();
  const parentRef = useRef();
  // const isInView = useInView(parentRef, {
  //   margin: "-1px 0px -99% 0px",
  //   once: false,
  // });

  // useEffect(() => {
  //   if (isInView) {
  //     setTheme("dark");
  //   }
  // }, [isInView]);
  return (
    <div className="overflow-hidden mx-10" ref={parentRef}>
      <div className="w-full flex justify-center 2xl:justify-between mt-24 md:mt-44">
        <img src="/assets/left-footer.svg" alt="" className="hidden 2xl:flex" />
        <div className="flex items-center justify-center flex-col gap-8">
          <p className="text-3xl md:text-7xl font-semibold text-center">
            See what you'll discover
          </p>
          <p>Scan the QR to download FinTap today on iOS and Android</p>
          <img
            src="/assets/qr.avif"
            alt=""
            className="object-contain h-56 w-full md:h-72"
          />
        </div>
        <img
          src="/assets/right-footer.svg"
          alt=""
          className="hidden 2xl:flex"
        />
      </div>
      <div className="mx-6 grid grid-cols-12 mt-10 md:mt-0">
        <div className="col-span-12 md:col-span-3">
          <img
            src={
              theme == "light" ? "/assets/logo.svg" : "/assets/logo-light.svg"
            }
            alt=""
            className="h-10 object-contain"
          />
          <p className="text-xs text-white/30 mt-2">
            Comprehensive security of anti-fraud An extensive security system
            has been implemented for privacy of your money. Fintap is a company
            specializing in financial technology, not a traditional bank. Its
            banking services are offered through Piermont Bank, which is an FDIC
            member. The mobile app screens used in this website is taken from
            open source behance. the original work
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 gap-3 flex items-center justify-center flex-wrap mt-10 md:mt-0">
          <Link href={"/terms/termsConditions"} className="cursor-pointer">
            Terms & Condition
          </Link>
          <Link href={"#"} className="cursor-pointer">
            AML Policy
          </Link>
          <Link href={"/terms/privacyPolicy"} className="cursor-pointer">
            Privacy Policy
          </Link>
          <Link href={"#"} className="cursor-pointer">
            Trading Policy
          </Link>
          <Link href={"#"} className="cursor-pointer">
            Cookie Policy
          </Link>
        </div>
        <div className="col-span-12 md:col-span-3 flex items-center gap-4 justify-center mt-10 md:mt-0">
          {socials?.map((item, idx) => {
            return (
              <div className="" key={idx}>
                <img
                  src={item?.icon}
                  alt=""
                  className={clsx(
                    "object-contain transition-all delay-200 duration-200 ease-linear hover:scale-125 cursor-pointer",
                    item?.className
                  )}
                />
              </div>
            );
          })}
        </div>
      </div>
      <hr className="my-2" />
      <div className="flex justify-center items-center mb-2">
        <p className="text-xs">
          COPYRIGHT © {moment().year()} nowory. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Section6;

const socials = [
  {
    icon: "/assets/insta.svg",
    href: () => {},
    className: "h-8",
  },
  {
    icon: "/assets/telegram.svg",
    href: () => {},
    className: "h-10",
  },
  {
    icon: "/assets/twitter.svg",
    href: () => {},
    className: "h-10",
  },
];
