import React, { useState,useEffect } from "react";
import assets from "../assets/assets";
import studentsData from "../data/studentsData";

const Students = () => {
  const [index, setIndex] = useState(0);
  const totalStu = studentsData.length;
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(()=> {
    const handleResize = () => {
      if(window.innerWidth > 1024){
        setVisibleCount(4);
      }
      else if(window.innerWidth >= 768) {
        setVisibleCount(2);
      }
      else{
        setVisibleCount(1);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // const visibleCount = 1;

  const nextImage = () => {
    setIndex((prev) => (prev + visibleCount) % totalStu);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - visibleCount + totalStu) % totalStu);
  };

  const visibleStudents = [];

  for (let i = 0; i < visibleCount; i++) {
    visibleStudents.push(studentsData[(index + i) % totalStu]);
  }

  return (
    <div id="students"
      className="relative  bg-cover bg-center mt-15 pt-6 px-4 py-10 overflow-hidden"
      style={{ backgroundImage: `url(${assets.bk2})` }}
    >
      {/* Overlay Color */}
      <div className="absolute inset-0 bg-[#6f6a5d]/50"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-2 items-center text-center">
          <h1 className="text-lg uppercase tracking-wide text-gray-200">
            Our Students
          </h1>

          <p className="text-2xl text-gray-300 md:text-4xl font-semibold">
            Growing Together in Wisdom
          </p>

          <div className="flex items-center gap-4 my-4">
            <div className="h-0.5 w-12 sm:w-16 bg-gray-200"></div>
            <img src={assets.mission} alt="Icon" className="w-12 invert sm:w-16" />
            <div className="h-0.5 w-12 sm:w-16 bg-gray-200"></div>
          </div>
        </div>

        {/* Slider */}
        <div className="flex justify-center items-center gap-2 sm:gap-6 mt-8 flex-wrap">
          {/* Left Button */}
          <button
            onClick={prevImage}
            className="px-3 py-2 sm:px-4 sm:py-3 bg-white shadow-md rounded-full hover:scale-105 transition"
          >
            ←
          </button>

          {/* Student Card */}
          <div className="flex justify-center md:gap-5">
            {visibleStudents.map((student, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center border border-gray-200 bg-[#f9f9f8] rounded-2xl  px-5 py-6 shadow-sm w-[280px] sm:w-[340px] md:w-[300px]"
              >
                {/* Student Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-gray-300 overflow-hidden">
                  <img
                    src={student.img}
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h2 className="font-bold text-lg mt-4">
                  {student.name}
                </h2>

                {/* Class / Role */}
                <p className="text-gray-600 text-sm sm:text-base mt-1">
                  {student.student && student.student}{" "}
                  {student.stu && student.stu}
                </p>

                {/* Feedback */}
                <p className="text-gray-700 text-sm sm:text-base mt-4 leading-relaxed">
                  {student.feedback}
                </p>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={nextImage}
            className="px-3 py-2 sm:px-4 sm:py-3 bg-white shadow-md rounded-full hover:scale-105 transition"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Students;