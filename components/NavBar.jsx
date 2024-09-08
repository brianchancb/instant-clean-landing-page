"use client";

import React, { useState } from "react";
import Logo from "@/public/Instant3-01.svg";
import Image from "next/image";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="sticky top-0 backdrop-blur-sm z-50">
      {/* <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-2">
        <p>Reclaim your time.</p>
        <p className="text-white/60 hidden md:block">
          Organise your living space with trusted and reliable professionals
        </p>
      </div> */}
      <div className="py-2 md:py-0">
        <div className="mx-4 md:mx-0">
          <div className="flex items-center justify-between px-1 md:px-2">
            <Image src={Logo} alt="Instant Logo" height={90} />

            <button onClick={toggleMobileMenu} className="md:hidden">
              {isMobileMenuOpen ? (
                <FiX className="text-instantGreen-2" size={40} />
              ) : (
                <FiAlignJustify className="text-instantGreen-2" size={40} />
              )}
            </button>
            <nav className="hidden md:flex gap-4 text-instantGreen-2/80 items-center tracking-tight">
              <motion.a
                href="#problem"
                className="px-4 py-2 tracking-widest font-semibold hover:text-instantGreen-1/80 hover:underline transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Problem
              </motion.a>
              <motion.a
                href="#offer"
                className="px-4 py-2 tracking-widest font-semibold hover:text-instantGreen-1/80 hover:underline transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Offer
              </motion.a>
              <motion.a
                href="#solution"
                className="px-4 py-2 tracking-widest font-semibold hover:text-instantGreen-1/80 hover:underline transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Solution
              </motion.a>
              <motion.a
                href="#contact"
                className="px-4 py-2 tracking-widest font-semibold hover:text-instantGreen-1/80 hover:underline transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Contact
              </motion.a>
            </nav>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={mobileMenuVariants}
          className="md:hidden bg-instantGreen-2/30 py-2 overflow-hidden"
        >
          <nav className="flex flex-col items-center gap-4 text-instantOrange-4/80 tracking-tight">
            <a
              href="#problem"
              className="px-4 py-2 font-semibold hover:text-instantOrange-0/80 transition-all duration-300"
              onClick={toggleMobileMenu}
            >
              Problem
            </a>
            <a
              href="#offer"
              className="px-4 py-2 font-semibold hover:text-instantOrange-0/80 transition-all duration-300"
              onClick={toggleMobileMenu}
            >
              Offer
            </a>
            <a
              href="#solution"
              className="px-4 py-2 font-semibold hover:text-instantOrange-0/80 transition-all duration-300"
              onClick={toggleMobileMenu}
            >
              Solution
            </a>
            <a
              href="#contact"
              className="px-4 py-2 font-semibold hover:text-instantOrange-0/80 transition-all duration-300"
              onClick={toggleMobileMenu}
            >
              Contact
            </a>
          </nav>
        </motion.div>
      )}
      <div className="px-4 py-4">
        <hr className="border-[1px] border-gray-300" />
      </div>
    </header>
  );
};

export default NavBar;
