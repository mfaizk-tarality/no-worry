import React from "react";
import WrapButton from "@/components/ui/wrap-button";

const Header = () => {
  return (
    <div className="min-w-full   flex flex-row justify-between items-center px-2 md:px-10 bg-[#fbf1f0]  py-4  z-[9999]">
      <div className="text-black flex  dark:hidden">
        <img
          src="/assets/logo.svg"
          alt=""
          className="object-contain h-6 md:h-10"
        />
      </div>
      <div className="text-black hidden dark:flex">
        <img
          src="/assets/logo-light.svg"
          alt=""
          className="object-contain h-6 md:h-10"
        />
      </div>
      <div className="flex flex-row gap-4">
        <WrapButton className="" href="/docs/components/card-carousel">
          <img
            src="/assets/playstore.svg"
            alt=""
            className=" object-contain  h-6"
          />
          Get started
        </WrapButton>
      </div>
    </div>
  );
};

export default Header;
