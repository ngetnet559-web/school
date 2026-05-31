import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import assets from "../assets/assets";
import Navbar from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {

  useLayoutEffect(() => {

    if (window.innerWidth < 768) return;

    const ctx = gsap.context(() => {

      /* HERO TITLE */
      gsap.fromTo(
        ".hero-line",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
        }
      );

      /* HERO PARAGRAPH */
      gsap.fromTo(
        ".hero-text",
        {
          y: 20,
          opacity: 0,
          filter: "blur(5px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          delay: 1,
          ease: "power2.out",
        }
      );

      /* HERO PARALLAX */
      gsap.to(".hero-bg", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* ARROW */
      gsap.to(".arrow-icon", {
        x: 8,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      /* ABOUT LEFT */
      gsap.fromTo(
        ".about-left",
        {
          x: -80,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
          },
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      /* ABOUT IMAGE */
      gsap.fromTo(
        ".about-image",
        {
          x: 80,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
          },
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      /* FLOATING IMAGE */
      gsap.to(".about-image", {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* ABOUT CARDS */
      gsap.fromTo(
        ".about-card",
        {
          y: 40,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: "#about",
            start: "top 75%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        }
      );

    });

    return () => ctx.revert();

  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        id="home"
        className="hero-bg relative w-full bg-cover bg-center px-4 py-4 pt-28 overflow-hidden"
        style={{ backgroundImage: `url(${assets.bkt1})` }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 mt-6 lg:ml-8 pb-10">

          {/* Animated Title */}
          <div className="flex flex-col md:text-5xl text-3xl text-white font-semibold overflow-hidden">

            <span className="hero-line">
              A Journey of
            </span>

            <span className="hero-line text-green-500">
              Spiritual Growth
            </span>

            <span className="hero-line">
              and Inner Peace
            </span>

          </div>

          {/* Paragraph */}
          <p className="hero-text text-gray-100 md:text-xl mt-4 max-w-2xl">
            Welcome to our spiritual school, a place where knowledge meets
            wisdom and hearts find peace.
          </p>

          {/* Buttons */}
          <div className="flex gap-6 mt-10 justify-center lg:justify-start flex-wrap">

            <button className="flex justify-center items-center gap-2 rounded-full bg-green-500 text-white px-6 py-3 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition duration-300">

              <span className="text-lg">
                Explore More
              </span>

              <img
                src={assets.ar}
                className="arrow-icon w-6"
                alt="arrow"
              />

            </button>

            <button className="flex justify-center items-center gap-2 bg-black/50 rounded-full border border-white text-white px-6 py-3 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] transition duration-300">

              <img
                src={assets.cp}
                alt="play"
                className="w-6 invert"
              />

              <span className="text-lg">
                Watch Video
              </span>

            </button>

          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        id="about"
        className="flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-10 lg:px-20 mt-30"
      >

        {/* Left Content */}
        <div className="about-left flex flex-col gap-4 flex-1">

          <h1 className="text-center lg:text-left md:text-3xl text-2xl font-bold">
            About the School
          </h1>

          <p className="flex flex-col text-center lg:text-left text-3xl font-semibold text-gray-700">
            Rooted in Tradition,
            <span>Committed to Tomorrow</span>
          </p>

          <p className="text-gray-600 text-center lg:text-left leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Impedit dignissimos cupiditate fugiat! Eaque, in obcaecati?
            Perferendis, delectus nobis. Dolores nam animi harum adipisci
            iure. Quo atque itaque rerum minus voluptate!
          </p>

          {/* Mission Vision Values */}
          <div className="mt-6 flex flex-col lg:flex-row gap-6">

            <div className="about-card flex gap-4 items-start">

              <div className="w-12 h-12 rounded-full border flex items-center justify-center shrink-0">

                <img
                  src={assets.mission}
                  alt="mission icon"
                  className="w-8 h-8 object-contain"
                />

              </div>

              <div>

                <h1 className="font-bold text-xl">
                  Our Mission
                </h1>

                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

              </div>

            </div>

            <div className="about-card flex gap-4 items-start">

              <div className="w-12 h-12 rounded-full border flex items-center justify-center shrink-0">

                <img
                  src={assets.vision}
                  alt="vision icon"
                  className="w-8 h-8 object-contain"
                />

              </div>

              <div>

                <h1 className="font-bold text-xl">
                  Our Vision
                </h1>

                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

              </div>

            </div>

            <div className="about-card flex gap-4 items-start">

              <div className="w-12 h-12 rounded-full border flex items-center justify-center shrink-0">

                <img
                  src={assets.value}
                  alt="value icon"
                  className="w-8 h-8 object-contain"
                />

              </div>

              <div>

                <h1 className="font-bold text-xl">
                  Our Values
                </h1>

                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

              </div>

            </div>

          </div>
        </div>

        {/* Right Image */}
        <div className="about-image relative flex-1 flex justify-center">

          <div className="relative w-full max-w-md h-[420px] md:h-[500px]">

            <img
              className="w-full h-full object-cover rounded-3xl shadow-lg"
              src={assets.or}
              alt="school"
            />

            <div className="absolute right-2 bottom-2 md:right-[-10%] md:bottom-[-8%] rounded-2xl h-24 w-24 text-white p-3 flex flex-col items-center text-center justify-center bg-[#488856] text-sm shadow-lg">

              <span className="text-xl font-bold">
                25+
              </span>

              <span>
                Years of Spiritual Education
              </span>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Education;