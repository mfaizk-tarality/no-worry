import React from "react";

const Section3 = () => {
  return (
    <div className="w-full flex justify-center items-center container mx-auto mt-52">
      <div className="grid grid-cols-12  w-full xl:w-[70%]   gap-5   mx-10 md:mx-0 ">
        <div className="col-span-12 flex flex-col items-center gap-4">
          <img src="/assets/section3.avif" className="object-contain h-14" />
          <p className="text-3xl lg:text-6xl text-center bg-gradient-to-r from-black to-black/20 text-transparent bg-clip-text font-light">
            Everything You Need.
            <br /> Nothing You Don’t.
          </p>
        </div>
        <div className="col-span-12 grid grid-cols-12 mt-16 gap-6">
          {items?.map((item, idx) => {
            return (
              <div
                className="col-span-12 sm:col-span-6  lg:col-span-4 flex flex-col p-4 gap-4 rounded-lg py-4"
                key={idx}
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                }}
              >
                <div className="flex gap-2 items-center">
                  <img src={item?.img} className="object-center h-8" />
                  <p className="text-xl text-sub-text• Limited to first 29,999 users">
                    {item?.label}
                  </p>
                </div>
                <p className="text-gray-700/90">{item?.sublabel}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section3;

const items = [
  {
    label: "Built for All Levels",
    sublabel: "Whether you’re new or pro, the app fits your crypto journey.",
    img: "/assets/section3.avif",
  },
  {
    label: "Own While You Pay",
    sublabel:
      "Track your nowory portfolio, manage your payments, and build liquidity.",
    img: "/assets/section3.avif",
  },
  {
    label: "Free Trading, Always",
    sublabel: "Enjoy commission-free trades with no surprise costs.",
    img: "/assets/section3.avif",
  },
  {
    label: "Secure by Design",
    sublabel:
      "Your assets are protected with multi-level encryption and biometrics.",
    img: "/assets/section3.avif",
  },
  {
    label: "Skip the P2P Drama",
    sublabel: "Avoid delays and disputes with a clean instant execution.",
    img: "/assets/section3.avif",
  },

  {
    label: "Super-Fast Trade",
    sublabel: "Execute trades in under 2 seconds",
    img: "/assets/section3.avif",
  },
  {
    label: "24/7 Support",
    sublabel: "Get expert help anytime with our round-the-clock support team.",
    img: "/assets/section3.avif",
  },
  {
    label: "Instant Withdrawals",
    sublabel: "Access your funds instantly with quick and easy withdrawals.",
    img: "/assets/section3.avif",
  },
  {
    label: "Real-Time Price Alerts",
    sublabel:
      "Stay updated with instant alerts on price movements you care about.",
    img: "/assets/section3.avif",
  },
];
