import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import assets from "../assets/assets";

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      {
        y: -80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-70 bg-black/80 backdrop-blur-md px-4 md:px-10 py-3"
    >
      <div className="flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={assets.book}
            alt="logo"
            className="w-10 h-10 invert rounded-full bg-gray-200"
          />

          <div>
            <h1 className="text-lg font-semibold text-gray-100">
              Spiritual School
            </h1>

            <span className="text-xs text-gray-100">
              Knowledge, peace and growth
            </span>
          </div>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-6 text-white text-lg">
          <ul className="flex items-center gap-4 cursor-pointer">
            <li className="hover:text-blue-400 hover:scale-110 transition duration-300"><a href="#home">
              Home</a>
            </li>
            <li className="hover:text-blue-400 hover:scale-110 transition duration-300"><a href="#about">
              About</a>
            </li>
            <li className="hover:text-blue-400 hover:scale-110 transition duration-300">
              <a href="#students">
              Students</a>
            </li>
            <li className="hover:text-blue-400 hover:scale-110 transition duration-300"><a href="#library">
              Library</a>
            </li>
            <li className="hover:text-blue-400 hover:scale-110 transition duration-300"><a href="#services">
              Services</a>
            </li>
            <li className="hover:text-blue-400 hover:scale-110 transition duration-300"><a href="#history">
              History</a>
            </li>
            <li className="hover:text-blue-400 hover:scale-110 transition duration-300"><a href="#location">
              Location</a>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <a href="#">
              <img className="w-6 h-6 object-contain" src={assets.tg} alt="telegram" />
            </a>
            <a href="#">
              <img className="w-6 h-6 object-contain" src={assets.fb} alt="facebook" />
            </a>
            <a href="#">
              <img className="w-6 h-6 object-contain" src={assets.is} alt="instagram" />
            </a>
          </div>

          <button className="border hover:border-blue-400 bg-[#1b7e76] rounded-2xl hover:scale-110 transition duration-500 px-3 py-1 text-sm">
            <a href="#getInTouch">Contact Us</a>
          </button>
        </div>

        <button className="lg:hidden text-white text-3xl">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;