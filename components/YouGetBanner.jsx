import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";
import YouGet from "@/public/pexels-karolina.png";

const YouGetBanner = () => {
  const offersList = [
    {
      name: "Expert Cleaners",
      description:
        "High-quality cleaning outcomes, leaving homes and offices hygienic and presentable.",
    },
    {
      name: "Cost-effective Professional Cleaners",
      description:
        "Affordable and accessible for households and small businesses, providing better value for money.",
    },
    {
      name: "Simplified scheduling",
      description: "Reduces the hassle of coordinating schedules.",
    },
  ];

  return (
    <div
      id="solution"
      className="p-4 pt-6 overflow-x-clip flex flex-col md:flex-row md:gap-4"
    >
      <div className="md:w-1/2">
        <div className="text-4xl md:text-5xl font-bold mb-4 text-black">
          What will you <span className="text-instantGreen-2">Get</span> ?
        </div>
        <div className="mb-4">
          <p className="text-gray-700 text-3xl md:text-lg tracking-tight pb-6">
            Our vision is to lead the industry by setting high standards in
            service quality and customer satisfaction.
          </p>
        </div>

        <div className="space-y-4 p-4 h-full">
          {offersList.map((item, index) => (
            <div
              key={index}
              className="w-full p-4 rounded-3xl shadow-lg bg-white flex items-center"
            >
              <div className="flex-shrink-0">
                <FaCheck className="bg-instantGreen-2 checkmark" />
              </div>
              <div className="ml-4 flex-grow">
                <span className="font-bold text-black">{item.name}</span>
                <div className="text-gray-700 mt-2">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center items-center p-4 relative h-full md:justify-end">
        <div className="relative h-full w-full md:h-1/4">
          <div className="rounded-3xl bg-instantOrange-1 h-3/4 w-3/4 absolute bottom-0 left-0"></div>
          <Image
            src={YouGet}
            alt={"You Get"}
            className="relative z-10 rounded-3xl w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default YouGetBanner;
