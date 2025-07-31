import React from "react";

const Header = () => {
  return (
    <div className="min-w-full min-h-14  flex flex-row justify-between items-center px-10 bg-gradient-to-r from-white to-customPurple/50">
      <div className="text-black"> company logo</div>
      <div className="flex flex-row gap-4">
        <button className="text-customPurple bg-white border border-customPurple px-2 py-2 rounded-xl">
          Get the template
        </button>
        <button className="text-white bg-customPurple px-4 py-2 rounded-xl">
          Download noworry
        </button>
      </div>
    </div>
  );
};

export default Header;
