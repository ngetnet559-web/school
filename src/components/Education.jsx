import React, { useState } from "react";
import assets from "../assets/assets";

const Education = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        className="w-full bg-cover bg-center px-4 py-4"
        style={{ backgroundImage: `url(${assets.bg1})` }}
      >
        {/* Header */}
        <div className="">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={assets.book}
                alt="logo"
                className="w-10 h-10 rounded-full bg-gray-200"
              />
              <h1 className="text-lg font-semibold">Spiritual School</h1>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl z-50"
            >
              {menuOpen ? "X" : "☰"}
            </button>
          </div>

          {/* Overlay */}
          <div
            onClick={() => setMenuOpen(false)}
            className={`fixed inset-0 bg-black/30 transition-opacity duration-300 z-40 ${
              menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          ></div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 right-0 h-screen w-64 bg-gray-100 p-5 rounded-l-2xl shadow-lg z-50
        transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-2xl"
            >
              X
            </button>

            <ul className="mt-10 flex flex-col gap-4 text-gray-700">
              <li>Home</li>
              <li>About</li>
              <li>Students</li>
              <li>Library</li>
              <li>Services</li>
              <li>History</li>
              <li>Location</li>
            </ul>

            <div className="mt-6 border-t pt-4">
              <ul className="flex gap-4 text-sm text-gray-600">
                <li>Telegram</li>
                <li>Instagram</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <p className="flex flex-col text-4xl text-black">
              A Journey of{" "}
              <span className="text-green-500">Spritual Growth</span>{" "}
              <span>and Inner Peace</span>
            </p>
            <p className="text-gray-100">
              Welcome to our spritual school, a place where knowledge meets
              wisdom and hearts find peace.
            </p>

            <div className=" flex gap-6 mt-6  justify-center">
              <div className=" flex justify-center items-center gap-2  rounded-4xl bg-green-400  pl-6 pb-4 pr-6 pt-4">
                <button className="text-xl">Explore More</button>
                <img src={assets.ar} className="w-9 invert" alt="->" />
              </div>
              <div className=" flex justify-center items-center gap-2 bg-black/30 rounded-4xl  border border-white   pl-6 pb-4 pr-6 pt-4">
                <img src={assets.cp} alt="->" className="w-9 invert-90" />
                <button className="text-xl text-white ">Watch Video</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" ml-4 mr-4 mt-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-2xl font-bold ">About the school</h1>
          <p className="flex flex-col text-3xl font-semibold text-gray-600">
            Rooted in Tradition, <span>Commited to Tomorrow</span>{" "}
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            dignissimos cupiditate fugiat! Eaque, in obcaecati? Perferendis,
            delectus nobis. Dolores nam animi harum adipisci iure. Quo atque
            itaque rerum minus voluptate!
          </p>

          <div className="">
            <div className="flex gap-3 mb-6">
              <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                <img
                  src={assets.mission}
                  alt="mission icon"
                  className="w-10 m-4 h-10 object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-bold text-xl">Our Misson</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="flex gap-3 mb-6">
              <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                <img
                  src={assets.vision}
                  alt="mission icon"
                  className="w-10 m-4 h-10 object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-bold text-xl">Vision</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="flex gap-3 mb-6">
              <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                <img
                  src={assets.value}
                  alt="mission icon"
                  className="w-10 m-4 h-10 object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="font-bold text-xl">Our Value</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-[90%] ml-4 overflow-hidden rounded-3xl border">
            <img
              className="w-full h-full object-cover"
              src={assets.or}
              alt="image"
            />
          </div>
          <div className="absolute right-0 top-60 rounded-2xl h-20 w-20 text-white p-4 flex flex-col items-center text-center justify-center bg-[#488856] text-sm">
            {" "}
            <span className="text-lg ">25+</span> years of teaching
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
