import React, { useState, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import assets from "../assets/assets";
import studentsData from "../data/studentsData";

gsap.registerPlugin(ScrollTrigger);

const Students = () => {
  const [index, setIndex] = useState(0);
  const totalStu = studentsData.length;
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setVisibleCount(4);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* GSAP scroll animations only */
  useLayoutEffect(() => {
    if (window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".student-title",
        { y: 50, opacity: 0 },
        {
          scrollTrigger: { trigger: "#students", start: "top 80%" },
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".student-card",
        { y: 70, opacity: 0, scale: 0.95 },
        {
          scrollTrigger: { trigger: "#students", start: "top 75%" },
          y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".student-nav-btn",
        { scale: 0, opacity: 0 },
        {
          scrollTrigger: { trigger: "#students", start: "top 75%" },
          scale: 1, opacity: 1, duration: 0.7, stagger: 0.2, ease: "back.out(1.7)",
        }
      );

      gsap.to(".left-arrow", { x: -5, duration: 0.8, repeat: -1, yoyo: true, ease: "power1.inOut" });
      gsap.to(".right-arrow", { x: 5, duration: 0.8, repeat: -1, yoyo: true, ease: "power1.inOut" });
    });

    return () => ctx.revert();
  }, []);

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
    <div
      id="students"
      className="relative bg-cover bg-center mt-15 px-4 py-10 overflow-hidden"
      style={{ backgroundImage: `url(${assets.bk2})` }}
    >
      <div className="absolute inset-0 bg-[#6f6a5d]/50"></div>

      <div className="relative z-10">

        <div className="student-title flex flex-col gap-2 items-center text-center">
          <h1 className="text-lg uppercase tracking-wide text-gray-200">Our Students</h1>
          <p className="text-2xl text-gray-300 md:text-4xl font-semibold">
            Growing Together in Wisdom
          </p>
          <div className="flex items-center gap-4 my-4">
            <div className="h-0.5 w-12 sm:w-16 bg-gray-200"></div>
            <img src={assets.mission} alt="Icon" className="w-12 invert sm:w-16" />
            <div className="h-0.5 w-12 sm:w-16 bg-gray-200"></div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 sm:gap-6 mt-8 flex-wrap">

          <button
            onClick={prevImage}
            className="student-nav-btn px-3 py-2 sm:px-4 sm:py-3 bg-white shadow-md rounded-full transition duration-300 hover:bg-gray-100"
          >
            <span className="left-arrow text-2xl inline-block">←</span>
          </button>

          <div className="flex justify-center md:gap-5 flex-wrap gap-5">
            {visibleStudents.map((student, i) => (
              <div
                key={`${student.name}-${index}-${i}`}
                className="student-card flex flex-col items-center text-center border border-gray-200 bg-[#f9f9f8] rounded-2xl px-5 py-6 shadow-sm w-[280px] sm:w-[340px] md:w-[300px] hover:-translate-y-2 transition duration-500"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 border-gray-300 overflow-hidden">
                  <img src={student.img} alt={student.name} className="w-full h-full object-cover" />
                </div>
                <h2 className="font-bold text-lg mt-4">{student.name}</h2>
                <p className="text-gray-600 text-sm sm:text-base mt-1">
                  {student.student && student.student}{" "}
                  {student.stu && student.stu}
                </p>
                <p className="text-gray-700 text-sm sm:text-base mt-4 leading-relaxed">
                  {student.feedback}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={nextImage}
            className="student-nav-btn px-3 py-2 sm:px-4 sm:py-3 bg-white shadow-md rounded-full transition duration-300 hover:bg-gray-100"
          >
            <span className="right-arrow text-2xl inline-block">→</span>
          </button>

        </div>

        <div className="flex justify-center gap-2 mt-8">
          {studentsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Students;