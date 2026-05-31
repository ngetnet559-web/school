import React from "react";
import assets from "../assets/assets";

const timeline = [
  {
    year: "1990",
    icon: assets.tree,
    text: "Our school was founded with a vision of spreading spiritual wisdom.",
  },
  {
    year: "1998",
    icon: assets.house,
    text: "The first campus was built to welcome more students.",
  },
  {
    year: "2008",
    icon: assets.book2,
    text: "Library and meditation center were established.",
  },
  {
    year: "2018",
    icon: assets.mUser,
    text: "Our programs expanded to serve the global community.",
  },
  {
    year: "2024",
    icon: assets.star,
    text: "Continuing the journey of peace, wisdom and compassion.",
  },
];

const History = () => {
  return (
    <section id="history"
      className="relative mt-6 w-full bg-cover bg-center px-4 py-10 md:px-10"
      style={{ backgroundImage: `url(${assets.bg2})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        {/* Top Content */}
        <div className="text-gray-200 lg:w-[30%]">
          <h1 className="text-center text-3xl font-bold text-[#1fff35] lg:text-left">
            Our History
          </h1>

          <p className="mt-4 max-w-md text-2xl font-semibold text-gray-300 md:text-3xl">
            A Legacy of Light and Learning
          </p>

          <p className="mt-4 max-w-2xl text-gray-200 leading-7">
            From a small group of seekers to a thriving spiritual community,
            our journey continues with love and dedication.
          </p>

          <button className="mt-4 cursor-pointer rounded-full border border-white/30 bg-black/40 px-6 py-3 text-lg text-white transition hover:bg-black">
            Read Full Story
          </button>
        </div>

        <div className="relative mt-16 lg:mt-0 lg:w-[70%]">
          {/* Desktop Line */}
          <div className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-white/50 md:block">
            <span className="absolute left-[10%] -top-[5px] h-3 w-3 rounded-full bg-amber-300"></span>

            <span className="absolute left-[35%] -top-[5px] h-3 w-3 rounded-full bg-amber-300"></span>

            <span className="absolute left-[62%] -top-[5px] h-3 w-3 rounded-full bg-amber-300"></span>

            <span className="absolute left-[87%] -top-[5px] h-3 w-3 rounded-full bg-amber-300"></span>
          </div>

          {/* Mobile vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/50 md:hidden"></div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center text-center text-white"
              >
                {/* Icon */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-black/50 p-4">
                  <img
                    src={item.icon}
                    alt={item.year}
                    className="h-full w-full object-contain invert"
                  />
                </div>

                {/* Year */}
                <h2 className="mt-3 text-lg font-bold">{item.year}</h2>

                {/* Text */}
                <p className="mt-1 max-w-[220px] text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;