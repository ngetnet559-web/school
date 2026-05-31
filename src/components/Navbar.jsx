import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import assets from "../assets/assets";

const Navbar = () => {
  const navRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
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
      className="fixed left-0 top-0 z-60 w-full bg-black/80 px-4 py-3 backdrop-blur-md md:px-8 lg:px-10"
    >
      <div className="flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 sm:gap-3">
          <img
            src={assets.book}
            alt="logo"
            className="h-9 w-9 rounded-full bg-gray-200 invert sm:h-10 sm:w-10"
          />

          <div className="leading-tight">
            <h1 className="text-sm font-semibold text-gray-100 sm:text-lg">
              Spiritual School
            </h1>

            <span className="hidden text-xs text-gray-100 sm:block">
              Knowledge, peace and growth
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-5 text-white lg:flex xl:gap-6">
          <ul className="flex items-center gap-3 text-base xl:gap-4 xl:text-lg">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Students", "#students"],
              ["Library", "#library"],
              ["Services", "#services"],
              ["History", "#history"],
              ["Location", "#location"],
            ].map(([label, href]) => (
              <li
                key={label}
                className="transition duration-300 hover:scale-110 hover:text-blue-400"
              >
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a href="#">
              <img className="h-6 w-6 object-contain" src={assets.tg} alt="telegram" />
            </a>
            <a href="#">
              <img className="h-6 w-6 object-contain" src={assets.fb} alt="facebook" />
            </a>
            <a href="#">
              <img className="h-6 w-6 object-contain" src={assets.is} alt="instagram" />
            </a>
          </div>

          <a
            href="#getInTouch"
            className="rounded-2xl border bg-[#1b7e76] px-3 py-1 text-sm transition duration-500 hover:scale-110 hover:border-blue-400"
          >
            Contact Us
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="text-3xl text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {showMenu ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          showMenu ? "max-h-[520px] pt-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-base text-white sm:text-lg">
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Students", "#students"],
            ["Library", "#library"],
            ["Services", "#services"],
            ["History", "#history"],
            ["Location", "#location"],
          ].map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setShowMenu(false)}
                className="block rounded-lg px-2 py-1 transition hover:bg-white/10 hover:text-blue-300"
              >
                {label}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#getInTouch"
              onClick={() => setShowMenu(false)}
              className="inline-block rounded-2xl border bg-[#1b7e76] px-4 py-2 text-sm transition hover:border-blue-400"
            >
              Contact Us
            </a>
          </li>

          <li className="flex items-center gap-4 pt-2">
            <a href="#">
              <img className="h-6 w-6 object-contain" src={assets.tg} alt="telegram" />
            </a>
            <a href="#">
              <img className="h-6 w-6 object-contain" src={assets.fb} alt="facebook" />
            </a>
            <a href="#">
              <img className="h-6 w-6 object-contain" src={assets.is} alt="instagram" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;