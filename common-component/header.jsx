import React from "react";

const Header = () => {
  return (
    <div className="min-w-full min-h-14  flex flex-row justify-between items-center px-10">
      <div className="text-black">
        <img src="/assets/logo.svg" alt="" />
      </div>
      <div className="flex flex-row gap-4">
        <button className="text-customPurple bg-white border border-customPurple px-2 py-2 rounded-xl">
          Get Notified
        </button>
        <button className="text-white bg-customPurple px-4 py-2 rounded-xl">
          Download noworry
        </button>
      </div>
    </div>
  );
};

export default Header;
