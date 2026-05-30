import React from "react";
import assets from "../assets/assets";

const History = () => {
  return (
    <div
      className="relative w-full bg-cover  bg-center mt-6 px-4 py-4 "
      style={{ backgroundImage: `url(${assets.bg2})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative grid grid-cols-1 gap-4 lg:grid-cols-3 z-50">
        <div className="text-gray-200">
          <h1 className="text-3xl text-[#1fff35] text-center font-bold">
            Our History
          </h1>
          <p className="text-3xl text-gray-300 mt-4 max-w-md ">
            A Legacy of Light and Learning
          </p>
          <p className="mt-4">
            From a small group of seekers to a thriving spiritual community. our
            journey continues with love and dedication.
          </p>
          <button className="border rounded-4xl p-3 text-lg bg-black/40 mt-4 cursor-pointer hover:bg-black">
            Read Full Story
          </button>
        </div>
        <div className="relative mt-8 flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-8">
          {/* Mobile vertical line */}
          <div className="absolute top-20 bottom-42 left-1/2 w-px -translate-x-1/2 bg-white/70 md:hidden"></div>

          {/* Desktop horizontal line */}
          <div className="absolute left-33 right-30 top-10 hidden h-px bg-white/50 md:block">
            <div className="absolute left-15 -top-1 border  rounded-full w-3 h-3 bg-amber-300"></div>
            <div className="absolute left-60 -top-1 border  rounded-full w-3 h-3 bg-amber-300"></div>
            <div className="absolute left-103 -top-1 border  rounded-full w-3 h-3 bg-amber-300"></div>
            <div className="absolute left-150 -top-1 border  rounded-full w-3 h-3 bg-amber-300"></div>
          </div>

          <div className="relative z-10 flex max-w-[220px] flex-col items-center text-center text-white">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-black/30 p-4">
              <img
                className="h-full w-full object-contain invert"
                src={assets.tree}
                alt=""
              />
            </div>

            <h1 className="mt-3 text-lg font-bold">1990</h1>
            <p className="mt-1 text-sm leading-relaxed">
              Our school was founded with a vision of spreading spiritual
              wisdom.
            </p>
          </div>

          <div className="relative z-10 flex max-w-[220px] flex-col items-center text-center text-white">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-black/30 p-4">
              <img
                className="h-full w-full object-contain invert"
                src={assets.house}
                alt=""
              />
            </div>

            <h1 className="mt-3 text-lg font-bold">1998</h1>
            <p className="mt-1 text-sm leading-relaxed">
              The first campus was built to welcome more students.
            </p>
          </div>

          <div className="relative z-10 flex max-w-[220px] flex-col items-center text-center text-white">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-black/30 p-4">
              <img
                className="h-full w-full object-contain invert"
                src={assets.book2}
                alt=""
              />
            </div>

            <h1 className="mt-3 text-lg font-bold">2008</h1>
            <p className="mt-1 text-sm leading-relaxed">
              Library and meditation center were established.
            </p>
          </div>

          <div className="relative z-10 flex max-w-[220px] flex-col items-center text-center text-white">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-black/30 p-4">
              <img
                className="h-full w-full object-contain invert"
                src={assets.mUser}
                alt=""
              />
            </div>

            <h1 className="mt-3 text-lg font-bold">2018</h1>
            <p className="mt-1 text-sm leading-relaxed">
              Our programs expanded to serve the global community.
            </p>
          </div>

          <div className="relative z-10 flex max-w-[220px] flex-col items-center text-center text-white">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-black/30 p-4">
              <img
                className="h-full w-full object-contain invert"
                src={assets.star}
                alt=""
              />
            </div>

            <h1 className="mt-3 text-lg font-bold">2024</h1>
            <p className="mt-1 text-sm leading-relaxed">
              Continuing the journey of peace, wisdom and compassion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
