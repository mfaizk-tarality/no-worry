import clsx from "clsx";
import React from "react";

const NoworySection = () => {
  return (
    <div className="w-full mb-22">
      <p className="text-3xl lg:text-6xl text-center text-sub-text">
        Inviting friends comes <br /> with rewards.
      </p>
      <div className="w-full grid grid-cols-12 gap-10 mt-22">
        <div className="col-span-12 md:col-span-3 flex justify-around item-start md:items-end  flex-col relative">
          <div className="w-full xl:w-[50%] h-full flex flex-col item-start md:items-end  md:text-right justify-center gap-10 xl:gap-20 2xl:gap-32 relative mt-22 md:mt-32 ">
            {leftItems?.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={clsx(
                    (idx == 0 || idx == 2) &&
                      "block md:relative -right-10 2xl:-right-20",
                    "flex justify-center items-center px-10 md:px-0"
                  )}
                >
                  <div className="flex flex-col justify-start md:items-end items-start w-full">
                    <p className="font-semibold">{item?.label}</p>
                    <p className="text-sub-text text-sm">{item?.subLabel}</p>
                  </div>
                  <div
                    className={clsx(
                      "w-10",
                      "block md:relative -right-10 2xl:-right-10",
                      "flex justify-center items-center"
                    )}
                  >
                    <SmallCircle />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 flex justify-center items-center overflow-clip relative  after:absolute after:hidden  xl:after:block after:h-[500px] after:w-[500px] 2xl:after:h-[600px] 2xl:after:w-[600px] after:border after:border-gray-700/20 after:border-dashed after:rounded-full after:bottom-0 after:overflow-hidden">
          <img
            src="/assets/nowory.png"
            alt=""
            className="object-contain h-[600px] 2xl:h-[760px]"
          />
        </div>
        <div className="col-span-12 md:col-span-3 flex justify-around items-start  flex-col relative">
          <div className="sm:w-[100%] xl:w-[50%] h-full flex flex-col items-start text-left justify-center gap-10 xl:gap-20 2xl:gap-32  relative md:mt-32">
            {rightItems?.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={clsx(
                    (idx == 0 || idx == 2) &&
                      "block md:relative -left-10 2xl:-left-20",
                    "flex justify-center items-center"
                  )}
                >
                  <div
                    className={clsx(
                      "w-10",

                      "block md:relative -left-10 2xl:-left-10",
                      "flex justify-center items-center"
                    )}
                  >
                    <SmallCircle />
                  </div>
                  <div className="flex flex-col justify-start  items-start w-full">
                    <p className="font-semibold">{item?.label}</p>
                    <p className="text-sub-text text-sm">{item?.subLabel}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoworySection;

const rightItems = [
  {
    label: "Spending Habits",
    subLabel: "Analyze your spending patterns and receive tips to cut",
  },
  {
    label: "Real-Time Alerts",
    subLabel:
      "Get instant notifications on transactions, low balances and bill",
  },
  {
    label: "Financial Confidence",
    subLabel: "Make informed financial decisions with detailed analytics",
  },
];

const leftItems = [
  {
    label: "Spending Habits",
    subLabel: "Analyze your spending patterns and receive tips to cut",
  },
  {
    label: "Real-Time Alerts",
    subLabel:
      "Get instant notifications on transactions, low balances and bill",
  },
  {
    label: "Financial Confidence",
    subLabel: "Make informed financial decisions with detailed analytics",
  },
];

const SmallCircle = () => {
  return (
    <div className="h-[20px] w-[20px] border border-sub-text/20 rounded-full hidden lg:flex"></div>
  );
};
