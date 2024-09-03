import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import Logo from "@/public/Instant3-01.png";
import ConcCirc from "@/public/Course Website Exploration w_ Mobile Responsive (Community)/Group 42.png";
import ComingSoon from "@/public/Course Website Exploration w_ Mobile Responsive (Community)/Group 44.png";
import People from "@/public/Course Website Exploration w_ Mobile Responsive (Community)/Group 46.png";
import LightOrange from "@/public/Course Website Exploration w_ Mobile Responsive (Community)/Rectangle 24.png";
import DarkOrange from "@/public/Course Website Exploration w_ Mobile Responsive (Community)/Rectangle 26.png";
import ForABetterCommunity from "@/public/Course Website Exploration w_ Mobile Responsive (Community)/Track any hashtag(s).png";
import MediumFooter from "@/public/medium_footer.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="pt-8 pb-20 md:pt-5 md:px-10 bg-[radial-gradient(ellipse_300%_200%_at_top_right,#FFFFFF,#08a696_350%)] overflow-x-clip text-black"
    >
      {/* InstantGreen Background Section */}
      <div className="hidden  md:flex md:justify-center">
        <Image src={MediumFooter} alt={"Footer Object"} />
      </div>

      <div className="md:hidden h-[550px] overflow-x-clip overflow-y-clip">
        <div className="relative">
          <Image
            src={DarkOrange}
            alt={"Mobile Footer"}
            className="w-full h-[550px] object-cover"
          />
          <div className="absolute top-0 right-0">
            <Image
              src={ConcCirc}
              alt={"circles"}
              className="h-1/3 object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 py-[50px] px-16">
            <Image
              src={ForABetterCommunity}
              alt={"Community"}
              className="h-1/6 object-cover"
            />
            <p className="text-white font-bold tracking-widest text-sm mt-8">
              Over 100,000 market tester ready to join us
            </p>
            <Image
              src={People}
              alt={"People"}
              className="h-1/3 object-cover mt-8"
            />
            <Image src={ComingSoon} alt={"coming Soon"} />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="z-10 container mx-auto p-4 pt-10 md:pt-12">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <Image src={Logo} alt="Instant Logo" height={80} width={90} />

            <h1 className="text-lg font-bold text-black py-0">
              <span className="text-instantGreen-1">Consistent</span> &amp;{" "}
              <span className="text-instantGreen-1">Reliable</span>
            </h1>
          </div>
          <div className="w-full md:w-1/3 md:text-right">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex space-x-4 md:justify-end">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                <AiFillTwitterCircle />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600"
              >
                <FaSquareInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Instant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
