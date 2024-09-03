import Image from "next/image";
import React from "react";
import Mission from "@/public/Mission.png";
import Logo from "@/public/Instant3-01.png";

const OfferBanner = () => {
  return (
    <div
      id="offer"
      className="text-black p-4 bg-[radial-gradient(ellipse_300%_200%_at_top_right,#FFFFFF,#08a696_350%)] overflow-x-clip"
    >
      <div className="flex flex-col md:flex-row">
        {/* First Section */}
        <div className="md:w-1/2">
          <div className="text-3xl font-semibold text-instantGreen-2">
            What is{" "}
            <Image src={Logo} alt="Instant" className="w-20 inline-block" /> ?
          </div>
          <h1 className="text-instantOrange-2 tracking-widest text-5xl pb-4">
            What We Offer
          </h1>
          <div className="h-[0.2rem] w-[12rem] md:w-[14rem] bg-instantOrange-2 mx-auto md:mx-0"></div>
        </div>

        {/* Second Section */}
        <div className="md:w-1/2 flex flex-col">
          <p className="text-base p-4 text-gray-700 md:text-justify">
            Instant is a user-friendly application that simplifies, booking and
            managing cleaning services. It addresses common challenges such as
            inconvenient booking processes, inconsistent service quality, and
            the difficulty of finding trusted cleaners.
          </p>
          <div className="w-20 h-20 rounded-full border-white self-end mt-0">
            <Image
              src={"/illustration-uk-flag/18166.jpg"}
              alt="UK Flag"
              width={300}
              height={300}
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:order-2 md:w-1/2 flex flex-col items-center justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-4 md:mt-6 tracking-wider">
            {`"Our mission with Instant is to make home care as easy as it
          should be with a single click..."`}
          </h1>
          <div className="mt-6">
            <span className="bg-instantGreen-1 text-white py-4 px-8 text-xl font-semibold rounded-3xl shadow-lg">
              Coming Soon
            </span>
          </div>
        </div>
        <div className="md:order-1 md:w-1/2">
          <Image
            src={Mission}
            alt="Mission Image"
            className="w-full h-auto" // Ensures the image fits the width in mobile view
          />
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
