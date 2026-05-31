import React from "react";
import assets from "../assets/assets";

const FooterSection = () => {
  return (
    <footer className="relative mt-10 overflow-hidden bg-[#1b7e76] text-white">
      
      {/* Small screen straight line */}
      <div className="block bg-white md:hidden"></div>

      {/* Medium and large screen curve */}
      <div className="absolute left-0 top-0 hidden w-full overflow-hidden leading-none md:block">
        <svg
          className="relative block h-16 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,0 C250,120 500,120 720,50 C950,-20 1200,20 1440,70 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      <div className="relative z-10 px-6 pt-24 pb-10 md:px-8 lg:px-20">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Logo */}
          <div className="flex gap-4">
            <div className="w-20 shrink-0 invert">
              <img
                className="w-full"
                src={assets.logo4}
                alt="Spiritual School Logo"
              />
            </div>

            <div>
              <h1 className="text-lg font-bold">
                SPIRITUAL SCHOOL
              </h1>

              <p className="mt-2 text-sm text-white/80">
                A place of learning, peace and spiritual growth.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h1 className="mb-4 text-lg font-semibold">
              Quick Links
            </h1>

            <div className="flex gap-10">
              <ul className="space-y-2 text-white/80">
                <li className="cursor-pointer hover:text-white">
                  Home
                </li>

                <li className="cursor-pointer hover:text-white">
                  About
                </li>

                <li className="cursor-pointer hover:text-white">
                  Students
                </li>

                <li className="cursor-pointer hover:text-white">
                  Library
                </li>
              </ul>

              <ul className="space-y-2 text-white/80">
                <li className="cursor-pointer hover:text-white">
                  Services
                </li>

                <li className="cursor-pointer hover:text-white">
                  History
                </li>

                <li className="cursor-pointer hover:text-white">
                  Location
                </li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div>
            <h1 className="mb-4 text-lg font-semibold">
              Services
            </h1>

            <ul className="space-y-2 text-white/80">
              <li className="cursor-pointer hover:text-white">
                Spiritual Education
              </li>

              <li className="cursor-pointer hover:text-white">
                Community Services
              </li>

              <li className="cursor-pointer hover:text-white">
                Counseling
              </li>

              <li className="cursor-pointer hover:text-white">
                Retreat Program
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h1 className="mb-4 text-lg font-semibold">
              Resources
            </h1>

            <ul className="space-y-2 text-white/80">
              <li className="cursor-pointer hover:text-white">
                Events
              </li>

              <li className="cursor-pointer hover:text-white">
                Blog
              </li>

              <li className="cursor-pointer hover:text-white">
                Gallery
              </li>

              <li className="cursor-pointer hover:text-white">
                FAQs
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h1 className="mb-4 text-lg font-semibold">
              Follow Us
            </h1>

            <div className="flex gap-4">
              
              <div className="h-7 w-7 cursor-pointer transition hover:scale-110">
                <img
                  className="h-full w-full object-contain"
                  src={assets.tg}
                  alt="telegram"
                />
              </div>

              <div className="h-7 w-7 cursor-pointer transition hover:scale-110">
                <img
                  className="h-full w-full object-contain"
                  src={assets.fb}
                  alt="facebook"
                />
              </div>

              <div className="h-7 w-7 cursor-pointer transition hover:scale-110">
                <img
                  className="h-full w-full object-contain"
                  src={assets.is}
                  alt="instagram"
                />
              </div>

              <div className="h-7 w-7 cursor-pointer transition hover:scale-110">
                <img
                  className="h-full w-full object-contain"
                  src={assets.yt}
                  alt="youtube"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 py-4 text-center text-sm text-white/70">
        Copyright © Natnael Getnet 2026
      </div>
    </footer>
  );
};

export default FooterSection;