"use client";

import React, { useState } from "react";
import Logo from "@/public/Instant3-01.png";
import Image from "next/image";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="sticky top-0 backdrop-blur-sm z-50">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-2">
        <p>Reclaim your time.</p>
        <p className="text-white/60 hidden md:block">
          Organise your living space with trusted and reliable professionals
        </p>
      </div>
      <div className="py-2">
        <div className="mx-4 md:mx-12">
          <div className="flex items-center justify-between px-1">
            <Image src={Logo} alt="Instant Logo" height={70} width={90} />

            <button onClick={toggleMobileMenu} className="md:hidden">
              {isMobileMenuOpen ? (
                <FiX className="text-instantGreen-2" size={40} />
              ) : (
                <FiAlignJustify className="text-instantGreen-2" size={40} />
              )}
            </button>
            <nav className="hidden md:flex gap-4 text-black/80 items-center tracking-tight">
              <motion.a
                href="#problem"
                className="px-4 py-2 font-semibold hover:text-instantGreen-1/80 hover:underline transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Problem
              </motion.a>
              <motion.a
                href="#offer"
                className="px-4 py-2 font-semibold hover:text-instantGreen-1/80 hover:underline transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Offer
              </motion.a>
              <motion.a
                href="#solution"
                className="px-4 py-2 font-semibold hover:text-instantGreen-1/80 hover:underline transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Solution
              </motion.a>
              <motion.a
                href="#contact"
                className="px-4 py-2 font-semibold hover:text-instantGreen-1/80 hover:underline transition-all duration-300"
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
        <div
          className={`md:hidden bg-instantGreen-2/30 py-2 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
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
        </div>
      )}
    </header>
  );
};

export default NavBar;
