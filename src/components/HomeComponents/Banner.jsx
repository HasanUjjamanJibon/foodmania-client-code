import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-screen bg-banner bg-cover bg-center bg-no-repeat object-cover ">
      <div className="container mx-auto flex justify-center md:justify-end h-full items-center ">
        <div className="px-4 text-center lg:text-right">
          {/*===============================
              banner header
            ====================================*/}
          <h1 className="title-text  py-4 ">
            Discover delicious recipes, cooking tips, and food news from
            passionate food lovers. Join our culinary journey today!
          </h1>
          <button className="btn mt-6 bg-gradient-to-r from-indigo-700 to-purple-700 text-xl  px-8">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
