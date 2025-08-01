import clsx from "clsx";
import React from "react";

const Section6 = () => {
  return (
    <div className="overflow-hidden mx-10">
      <div className="w-full flex justify-between mt-52">
        <img src="/assets/left-footer.svg" alt="" className="hidden xl:flex" />
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
        <img src="/assets/right-footer.svg" alt="" className="hidden xl:flex" />
      </div>
      <div className="mx-6 flex justify-between flex-col md:flex-row mt-10 md:mt-0">
        <div className="w-full md:w-96">
          <p>Company Logo</p>
          <p className="text-xs text-white/30">
            Comprehensive security of anti-fraud An extensive security system
            has been implemented for privacy of your money. Fintap is a company
            specializing in financial technology, not a traditional bank. Its
            banking services are offered through Piermont Bank, which is an FDIC
            member. The mobile app screens used in this website is taken from
            open source behance. the original work
          </p>
        </div>
        <div className="flex items-center gap-4 justify-center">
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
