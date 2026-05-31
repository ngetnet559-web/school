import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import assets from "../assets/assets";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      /* TITLE */
      gsap.fromTo(
        ".services-title",
        {
          y: 40,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: "#services",
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      /* CARDS */
      gsap.fromTo(
        ".service-card",
        {
          y: 60,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: "#services",
            start: "top 75%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        }
      );

    });

    return () => ctx.revert();

  }, []);

  return (
    <div id="services" className="py-10 overflow-hidden">

      {/* TITLE */}
      <div className="services-title flex flex-col items-center pt-4 text-center">

        <h1 className="text-green-500 text-xl">
          Our Services
        </h1>

        <p className="text-3xl text-gray-500">
          We Serve with Heart
        </p>

        <div className="flex items-center gap-4 mt-3">

          <div className="h-0.5 w-12 sm:w-16 bg-gray-500"></div>

          <img
            src={assets.mission}
            alt="Icon"
            className="w-12 sm:w-16"
          />

          <div className="h-0.5 w-12 sm:w-16 bg-gray-500"></div>

        </div>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-8 mb-10 md:mx-10 gap-6 place-items-center">

        {/* CARD 1 */}
        <div className="service-card group flex flex-col items-center border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-full max-w-sm">

          <div className="h-20 w-20 p-2 bg-gray-200 border border-gray-400 rounded-full flex items-center justify-center overflow-hidden group-hover:bg-green-100 transition duration-300">

            <img
              className="h-full w-full object-contain"
              src={assets.edu}
              alt="education"
            />

          </div>

          <h1 className="font-bold mt-4 text-xl">
            Spiritual Education
          </h1>

          <p className="text-sm mt-2 max-w-xs text-center">
            Classes and Teachings for inner Growth.
          </p>

        </div>

        {/* CARD 2 */}
        <div className="service-card group flex flex-col items-center border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-full max-w-sm">

          <div className="h-20 w-20 p-2 bg-gray-200 border border-gray-400 rounded-full flex items-center justify-center overflow-hidden group-hover:bg-green-100 transition duration-300">

            <img
              className="h-full w-full object-contain"
              src={assets.community}
              alt="community"
            />

          </div>

          <h1 className="font-bold mt-4 text-xl">
            Community Service
          </h1>

          <p className="text-sm mt-2 max-w-xs text-center">
            Serving others and our community.
          </p>

        </div>

        {/* CARD 3 */}
        <div className="service-card group flex flex-col items-center border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-full max-w-sm">

          <div className="h-20 w-20 p-2 bg-gray-200 border border-gray-400 rounded-full flex items-center justify-center overflow-hidden group-hover:bg-green-100 transition duration-300">

            <img
              className="h-full w-full object-contain"
              src={assets.counseling}
              alt="counseling"
            />

          </div>

          <h1 className="font-bold mt-4 text-xl">
            Counseling
          </h1>

          <p className="text-sm mt-2 max-w-xs text-center">
            Support for mental and emotional well-being.
          </p>

        </div>

        {/* CARD 4 */}
        <div className="service-card group flex flex-col items-center border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-full max-w-sm">

          <div className="h-20 w-20 p-2 bg-gray-200 border border-gray-400 rounded-full flex items-center justify-center overflow-hidden group-hover:bg-green-100 transition duration-300">

            <img
              className="h-full w-full object-contain"
              src={assets.growth}
              alt="growth"
            />

          </div>

          <h1 className="font-bold mt-4 text-xl">
            Retreat Programs
          </h1>

          <p className="text-sm mt-2 max-w-xs text-center">
            Programs for reflection, healing and growth.
          </p>

        </div>

      </div>
    </div>
  );
};

export default Services;