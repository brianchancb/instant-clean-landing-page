// components/HeroBanner.jsx
import React from "react";
import Image from "next/image";
import Celebrate from "@/public/person-success.png";
import MarketTest from "@/public/Market-Test.png"; // Assuming the market test badge image

const HeroBanner = () => {
  return (
    // <section className="pt-8 pb-20 md:pt-5 md:px-10 bg-[radial-gradient(ellipse_300%_200%_at_top_left,#FFFFFF,#08a696_350%)] overflow-x-clip">
    <section className="overflow-x-clip">
      <div className="flex flex-col items-start justify-start px-4">
        {/* Left Section with Text */}

        <div className="text-left flex-grow">
          <div className="flex items-center justify-center py-20">
            <h2 className="text-3xl lg:text-lg text-instantOrange-2 font-semibold whitespace-nowrap">
              The Future
            </h2>
            <div className="h-[0.1rem] w-[30%] bg-instantOrange-2 mx-auto"></div>{" "}
            {/* Orange bar */}
          </div>
          <h1 className="text-4xl font-bold text-black py-2 tracking-wide">
            <span className="text-instantGreen-1">Consistent</span> &amp;{" "}
            <span className="text-instantGreen-1">Reliable</span>
          </h1>
          <h2 className="text-3xl lg:text-3xl text-black py-2 tracking-wider font-semibold">
            The smart choice for Homes
          </h2>
          <p className="text-gray-400 mt-4 py-20">
            Organised living space with trusted and reliable professionals
          </p>
          {/* Coming Soon Button */}
          <div className="mt-6">
            <span className="bg-instantGreen-1 text-white py-4 px-8 text-xl font-semibold rounded-3xl shadow-lg">
              Coming Soon
            </span>
          </div>
        </div>

        {/* Right Section with Image */}
        <div className="relative mt-10 md:mt-0 flex flex-col items-center md:items-start md:pl-4 md:max-w-full">
          {/* Celebrate Image with Background */}
          <div className="relative flex items-center justify-center md:justify-start">
            <div className="bg-instantGreen-2 rounded-full w-56 h-72 md:w-64 md:h-80 flex items-center justify-center overflow-hidden md:ml-4">
              <Image
                src={Celebrate}
                alt="Celebrate"
                width={224} // Adjusted width to maintain aspect ratio
                height={224} // Adjusted height to maintain aspect ratio
              />
            </div>
            {/* UK Flag Image */}
            <div className="absolute top-[-20px] right-[-10px] w-20 h-20 rounded-full overflow-hidden border-2 border-white md:right-5">
              <Image
                src={"/illustration-uk-flag/18166.jpg"}
                alt="UK Flag"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Market Test Badge */}
          <div className="absolute w-40 h-40 bottom-[-20px] left-[-60px] flex items-center py-2 md:left-[-50px]">
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
