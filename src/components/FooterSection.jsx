import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import assets from "../assets/assets";

gsap.registerPlugin(ScrollTrigger);

const FooterSection = () => {
  useLayoutEffect(() => {
    if (window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-content",
        { y: 80, opacity: 0 },
        {
          scrollTrigger: {
            trigger: "#footer",
            start: "top 85%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".footer-column",
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: "#footer",
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
        }
      );

      gsap.to(".social-icon", {
        y: -5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.15,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer
      id="footer"
      className="relative mt-10 overflow-hidden bg-[#1b7e76] text-white"
    >
      <div className="block bg-white md:hidden"></div>

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

      <div className="footer-content relative z-10 px-6 pt-24 pb-10 md:px-8 lg:px-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="footer-column flex gap-4">
            <div className="w-20 shrink-0 invert">
              <img
                className="w-full"
                src={assets.logo4}
                alt="Spiritual School Logo"
              />
            </div>

            <div>
              <h1 className="text-lg font-bold">SPIRITUAL SCHOOL</h1>
              <p className="mt-2 text-sm text-white/80">
                A place of learning, peace and spiritual growth.
              </p>
            </div>
          </div>

          <div className="footer-column">
            <h1 className="mb-4 text-lg font-semibold">Quick Links</h1>

            <div className="flex gap-10">
              <ul className="space-y-2 text-white/80">
                <li className="cursor-pointer transition hover:text-white hover:translate-x-1">
                  Home
                </li>
                <li className="cursor-pointer transition hover:text-white hover:translate-x-1">
                  About
                </li>
                <li className="cursor-pointer transition hover:text-white hover:translate-x-1">
                  Students
                </li>
                <li className="cursor-pointer transition hover:text-white hover:translate-x-1">
                  Library
                </li>
              </ul>

              <ul className="space-y-2 text-white/80">
                <li className="cursor-pointer transition hover:text-white hover:translate-x-1">
                  Services
                </li>
                <li className="cursor-pointer transition hover:text-white hover:translate-x-1">
                  History
                </li>
                <li className="cursor-pointer transition hover:text-white hover:translate-x-1">
                  Location
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-column">
            <h1 className="mb-4 text-lg font-semibold">Services</h1>

            <ul className="space-y-2 text-white/80">
              <li className="cursor-pointer transition hover:text-white hover:translate-x-1">
                Spiritual Education
              </li>
              <li className="cursor-pointer transition hover:text-white hover:translate-x-1">
                Community Services
              </li>
              <li className="cursor-pointer transition hover:text-white hover:translate-x-1">
                Counseling
              </li>
              <li className="cursor-pointer transition hover:text-white hover:translate-x-1">
                Retreat Program
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h1 className="mb-4 text-lg font-semibold">Resources</h1>

            <ul className="space-y-2 text-white/80">
              <li className="cursor-pointer transition hover:text-white hover:translate-x-1">
                Events
              </li>
              <li className="cursor-pointer transition hover:text-white hover:translate-x-1">
                Blog
              </li>
              <li className="cursor-pointer transition hover:text-white hover:translate-x-1">
                Gallery
              </li>
              <li className="cursor-pointer transition hover:text-white hover:translate-x-1">
                FAQs
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h1 className="mb-4 text-lg font-semibold">Follow Us</h1>

            <div className="flex gap-4">
              <div className="social-icon h-7 w-7 cursor-pointer transition hover:scale-110">
                <img
                  className="h-full w-full object-contain"
                  src={assets.tg}
                  alt="telegram"
                />
              </div>

              <div className="social-icon h-7 w-7 cursor-pointer transition hover:scale-110">
                <img
                  className="h-full w-full object-contain"
                  src={assets.fb}
                  alt="facebook"
                />
              </div>

              <div className="social-icon h-7 w-7 cursor-pointer transition hover:scale-110">
                <img
                  className="h-full w-full object-contain"
                  src={assets.is}
                  alt="instagram"
                />
              </div>

              <div className="social-icon h-7 w-7 cursor-pointer transition hover:scale-110">
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

      <div className="border-t border-white/20 py-4 text-center text-sm text-white/70">
        Copyright © Natnael Getnet 2026
      </div>
    </footer>
  );
};

export default FooterSection;