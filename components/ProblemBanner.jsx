import React from "react";
import { MdPerson } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLaptop } from "react-icons/io5";
import ProblemImage from "@/public/problem.png";
import Image from "next/image";

const ProblemBanner = () => {
  const problem_statements = [
    {
      title: "Lack of Cleaning Expertise",
      body: "Many people lack the knowledge or skills to clean effectively and efficiently.",
      icon: MdPerson,
    },
    {
      title: "Expense of Professional Cleaners",
      body: "Professional cleaning services are often perceived as expensive, making them inaccessible for many households and small businesses.",
      icon: FaCalendarAlt,
    },
    {
      title: "Difficulty in Scheduling",
      body: "Finding a convenient time for both the cleaner and the client can be challenging.",
      icon: IoLaptop,
    },
  ];

  return (
    <div
      id="problem"
      className="text-black md:flex md:justify-between overflow-x-clip"
    >
      <div className="md:flex md:flex-col md:justify-center md:common-height">
        <div className="flex items-center justify-normal mb-2">
          <h2 className="text-3xl lg:text-4xl p-4 text-instantOrange-2 font-semibold whitespace-nowrap">
            Problem Statement
          </h2>
          <div className="h-[0.2rem] w-[12rem] md:w-[14rem] bg-instantOrange-2 mx-14 md:mx-8"></div>
        </div>
        <p className="text-base p-4 text-gray-700">
          We are focused on aligning our strategic goals with the needs of our
          users, continuously innovating to meet and exceed expectations.
        </p>
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {problem_statements.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="w-full p-1 rounded-3xl shadow-lg bg-white"
              >
                <div className="flex items-center">
                  <div className="bg-instantGreen-2 p-4 rounded-full flex items-center justify-center">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="px-2 py-1">
                    <div className="font-bold text-instantGreen-2 text-xl mb-1">
                      {problem.title}
                    </div>
                    <p className="text-gray-700 text-sm">{problem.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-4 md:p-4 md:flex md:justify-end md:items-center relative md:common-height">
        <div className="relative w-full h-full">
          <Image
            src={ProblemImage}
            alt="Problem"
            className="object-fill w-full h-full"
          />
          {/* <div className="absolute bottom-0 right-0 w-6 h-6 bg-instantOrange-2 transform rotate-45 translate-x-1/2 -translate-y-1/2 rounded-lg"></div> */}
        </div>
      </div>
    </div>
  );
};

export default ProblemBanner;
