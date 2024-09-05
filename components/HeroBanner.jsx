// components/HeroBanner.jsx
import React from "react";
import Image from "next/image";
import Celebrate from "@/public/person-success.png";
import MarketTest from "@/public/Market-Test.png"; // Assuming the market test badge image

const HeroBanner = () => {
  return (
    // <section className="pt-8 pb-20 md:pt-5 md:px-10 bg-[radial-gradient(ellipse_300%_200%_at_top_left,#FFFFFF,#08a696_350%)] overflow-x-clip">
    <section className="overflow-x-clip">
      <div className="flex flex-col items-start justify-start px-4 md:flex-row">
        {/* Left Section with Text */}

        <div className="text-left flex-grow">
          <div className="flex items-center justify-center py-20 md:py-10 md:pt-20">
            <h2 className="text-3xl md:text-lg text-instantOrange-2 font-semibold whitespace-nowrap">
              The Future
            </h2>
            <div className="h-[0.1rem] w-[30%] md:w-[150px] bg-instantOrange-2 mx-auto md:ml-20 "></div>{" "}
            {/* Orange bar */}
          </div>
          <h1 className="text-5xl font-bold text-black py-2 tracking-wide">
            <span className="text-instantGreen-1">Consistent</span> &amp;{" "}
            <span className="text-instantGreen-1">Reliable</span>
          </h1>
          <h2 className="text-3xl md:text-6xl text-black py-2 tracking-wider font-semibold md:font-normal">
            The smart choice for Homes
          </h2>
          <p className="text-gray-400 md:text-gray-500 mt-4 py-20 md:py-10 md:text-xl">
            Organised living space with trusted and reliable professionals
          </p>
          {/* Coming Soon Button */}
          <div className="mt-6 md:pt-10">
            <span className="bg-instantGreen-1 text-white py-8 px-8 md:px-20 md:py-4 text-xl font-semibold md:tracking-tight rounded-xl shadow-lg">
              Coming Soon
            </span>
          </div>
        </div>

        {/* Right Section with Image */}
        <div className="relative mt-40 md:mt-10 flex flex-col items-center md:items-start md:pl-4 md:max-w-full">
          {/* Celebrate Image with Background */}
          <div className="relative flex items-center justify-center md:justify-start translate-x-small">
            <div className=" bg-instantGreen-2 rounded-full md:rounded-[14rem] w-[80vw]  md:w-[33vw] flex items-center justify-center overflow-hidden md:ml-4">
              <Image
                src={Celebrate}
                alt="Celebrate"
                width={512} // Adjusted width to maintain aspect ratio
                height={512} // Adjusted height to maintain aspect ratio
              />
            </div>
            {/* UK Flag Image */}
            <div className="absolute top-[-20px] right-[5px] w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-8 md:border-1 border-white md:right-5">
              <Image
                src={"/illustration-uk-flag/18166.jpg"}
                alt="UK Flag"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Market Test Badge */}
          <div className="absolute w-40 h-40 md:w-[20vw] bottom-[-20px] left-[-10px] md:bottom-10 md:left-[-170px] flex items-center py-2">
            <Image
              src={MarketTest}
              alt="Market Test Badge"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
