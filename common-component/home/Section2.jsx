import clsx from "clsx";
import React from "react";

const Section2 = () => {
  return (
    <div className="w-full flex justify-center items-center container mx-auto">
      <div className="grid grid-cols-12  w-full xl:w-[70%]   gap-5  md:h-[140vh] mx-10 md:mx-0">
        {items?.map((item, idx) => {
          return (
            <div
              className={clsx(
                "col-span-12 md:col-span-6 flex items-center justify-center flex-col bg-white border border-gray-600/10 rounded-2xl group cursor-pointer h-full py-10 md:py-0",
                item?.row
              )}
            >
              <div
                className={clsx(" flex items-center justify-center flex-col ")}
              >
                <div className="flex items-center justify-center flex-col mb-20 gap-2 group-hover:scale-105  transition-all delay-200 duration-200 ease-linear">
                  <h2 className="text-6xl font-bold">{item?.title}</h2>
                  <p className="text-gray-500">{item?.subtitle}</p>
                </div>
                <img
                  src={item?.img}
                  alt={idx}
                  className="h-56 object-contain transition-all delay-200 duration-200 group-hover:scale-125 ease-linear"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section2;

const items = [
  {
    title: "Analytics",
    subtitle: "Keep track of all your incomes and outcomes",
    img: "/assets/dummy.avif",
    row: " md:row-span-6",
  },
  {
    title: "Analytics",
    subtitle: "Keep track of all your incomes and outcomes",
    img: "/assets/dummy.avif",
    row: "md:row-span-3",
  },
  {
    title: "Analytics",
    subtitle: "Keep track of all your incomes and outcomes",
    img: "/assets/dummy.avif",
    row: "md:row-span-6",
  },

  {
    title: "Analytics",
    subtitle: "Keep track of all your incomes and outcomes",
    img: "/assets/dummy.avif",
    row: "md:row-span-3",
  },
];
