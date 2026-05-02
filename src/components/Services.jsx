import React from "react";
import assets from "../assets/assets";

const Services = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center pt-4">
          <h1 className="text-green-500 text-xl ">Our Services</h1>

          <p className="text-3xl text-gray-500">We Serve with Heart</p>

          <div className="flex items-center gap-4">
            <div className="h-0.5 w-12 sm:w-16 bg-gray-500"></div>
            <img src={assets.mission} alt="Icon" className="w-12  sm:w-16" />
            <div className="h-0.5 w-12 sm:w-16 bg-gray-500"></div>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-4 items-center lg:flex-row lg:justify-center lg:flex-wrap">
            <div className="flex flex-col items-center border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-sm">
              <div className="h-20 w-20 p-2 bg-gray-200 border border-gray-400 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  className="h-full w-full object-contain "
                  src={assets.edu}
                  alt=""
                />
              </div>
              <h1 className="font-bold mt-4 text-xl">Spiritual Education</h1>
              <p className=" text-sm mt-2  max-w-xs">Classes and Teachings for inner Growth.</p>
            </div>
            <div className="flex flex-col items-center border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-sm">
              <div className="h-20 w-20 p-2 bg-gray-200 border border-gray-400 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  className="h-full w-full object-contain "
                  src={assets.community}
                  alt=""
                />
              </div>
              <h1 className="font-bold mt-4 text-xl">Community Service</h1>
              <p className="text-sm mt-2 max-w-xs">Serving others and our community.</p>
            </div>
            <div className="flex flex-col items-center border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-sm">
              <div className="h-20 w-20 p-2 bg-gray-200 border border-gray-400 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  className="h-full w-full object-contain "
                  src={assets.counseling}
                  alt=""
                />
              </div>
              <h1 className="font-bold mt-4 text-xl">Counseling</h1>
              <p className="text-sm mt-2 max-w-xs">Support for mental and emotional well-being.</p>
            </div>
            <div className="flex flex-col items-center border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-sm">
              <div className="h-20 w-20 p-2 bg-gray-200 border border-gray-400 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  className="h-full w-full object-contain "
                  src={assets.growth}
                  alt=""
                />
              </div>
              <h1 className="font-bold mt-4 text-xl">Retreat Programs</h1>
              <p className="text-sm mt-2 max-w-xs">Programs for reflection, healing and growth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
