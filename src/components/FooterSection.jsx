import React from "react";
import assets from "../assets/assets";

const FooterSection = () => {
  return (
    <footer className="relative bg-[#07332f] text-white overflow-hidden mt-10">
      {/* Wave line */}
      {/* Small screen straight line */}
      <div className="block md:hidden h-2 bg-white"></div>

      {/* Medium and large screen curve */}
      <div className="hidden md:block absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,0 C250,120 500,120 720,50 C950,-20 1200,20 1440,70 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      <div className="relative z-10 px-6  md:px-12 lg:px-20 pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex gap-4">
            <div className="w-20 shrink-0 invert">
              <img
                className="w-full"
                src={assets.logo4}
                alt="Spiritual School Logo"
              />
            </div>
            <div>
              <h1 className="font-bold text-lg">SPIRITUAL SCHOOL</h1>
              <p className="text-sm text-white/80 mt-2">
                A place of learning, peace and spiritual growth.
              </p>
            </div>
          </div>

          <div>
            <h1 className="font-semibold text-lg mb-4">Quick Links</h1>
            <div className="flex gap-10">
              <ul className="space-y-2 text-white/80">
                <li>Home</li>
                <li>About</li>
                <li>Students</li>
                <li>Library</li>
              </ul>
              <ul className="space-y-2 text-white/80">
                <li>Services</li>
                <li>History</li>
                <li>Location</li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className="font-semibold text-lg mb-4">Services</h1>
            <ul className="space-y-2 text-white/80">
              <li>Spiritual Education</li>
              <li>Community Services</li>
              <li>Counseling</li>
              <li>Retreat Program</li>
            </ul>
          </div>

          <div>
            <h1 className="font-semibold text-lg mb-4">Resources</h1>
            <ul className="space-y-2 text-white/80">
              <li>Events</li>
              <li>Blog</li>
              <li>Gallery</li>
              <li>FAQs</li>
            </ul>

            <h1 className="font-semibold text-lg mt-6 mb-3">Follow Us</h1>
            <div className="flex gap-4">
              <div className="w-6 h-6 md:w-7 md:h-7 cursor-pointer hover:scale-110 duration-300">
                <img
                  className="w-full h-full object-contain"
                  src={assets.tg}
                  alt="telegram"
                />
              </div>
              <div className="w-6 h-6 md:w-7 md:h-7 cursor-pointer hover:scale-110 duration-300">
                <img
                  className="w-full h-full object-contain"
                  src={assets.fb}
                  alt="facebook"
                />
              </div>
              <div className="w-6 h-6 md:w-7 md:h-7 cursor-pointer hover:scale-110 duration-300">
                <img
                  className="w-full h-full object-contain"
                  src={assets.is}
                  alt="instagram"
                />
              </div>
              <div className="w-6 h-6 md:w-7 md:h-7 cursor-pointer hover:scale-110 duration-300">
                <img
                  className="w-full h-full object-contain"
                  src={assets.yt}
                  alt="youtube"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 text-center py-4 text-sm text-white/70">
        Copyright © Natnael Getnet 2026
      </div>
    </footer>
  );
};

export default FooterSection;
