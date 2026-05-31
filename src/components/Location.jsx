import React, { useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import assets from "../assets/assets";

gsap.registerPlugin(ScrollTrigger);

const Location = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /* TITLE */
      gsap.fromTo(
        ".location-title",
        {
          y: 40,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: "#location",
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      /* MAP */
      gsap.fromTo(
        ".location-map",
        {
          x: -80,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: "#location",
            start: "top 75%",
          },
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      /* CONTACT CARD */
      gsap.fromTo(
        ".contact-card",
        {
          x: 80,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: "#location",
            start: "top 75%",
          },
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      /* INFO BOXES */
      gsap.fromTo(
        ".info-box",
        {
          y: 30,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: "#location",
            start: "top 70%",
          },
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
        }
      );

      /* FORM FIELDS */
      gsap.fromTo(
        ".form-field",
        {
          y: 20,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: "#getInTouch",
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
        }
      );

    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="location"
      className="relative w-full overflow-hidden bg-white px-4 py-8 md:px-8 lg:px-12"
    >
      <div className="location-title relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <h1 className="text-center text-3xl font-semibold tracking-wide text-gray-800">
          Our Location
        </h1>

        <p className="mb-3 mt-3 text-center text-xl italic text-green-600">
          Visit Us
        </p>

        {/* Main Layout */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {/* Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29801.708655115108!2d37.3948416!3d11.593318399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2set!4v1777728263161!5m2!1sen!2set"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="location-map min-h-[420px] rounded-2xl shadow-lg"
          ></iframe>

          {/* Contact Card */}
          <div className="contact-card rounded-2xl border border-gray-200 bg-white p-5 shadow-xl md:p-6">

            {/* Contact Info */}
            <div className="grid gap-5 sm:grid-cols-2">

              {/* Address */}
              <div className="info-box flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition hover:-translate-y-1 hover:shadow-md">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-red-400">

                  <img
                    className="h-6 w-6 object-contain"
                    src={assets.location}
                    alt=""
                  />

                </div>

                <p className="text-sm text-gray-700">
                  123 Peaceful Road. Harmony City, Ethiopia
                </p>

              </div>

              {/* Phone */}
              <div className="info-box flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition hover:-translate-y-1 hover:shadow-md">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-green-600">

                  <img
                    className="h-6 w-6 object-contain"
                    src={assets.telephone}
                    alt=""
                  />

                </div>

                <p className="text-sm text-gray-700">
                  +251 912 245 678
                </p>

              </div>

              {/* Email */}
              <div className="info-box flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition hover:-translate-y-1 hover:shadow-md">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-blue-300">

                  <img
                    className="h-6 w-6 object-contain"
                    src={assets.mail}
                    alt=""
                  />

                </div>

                <p className="text-sm text-gray-700">
                  info@spritualschool.org
                </p>

              </div>

              {/* Time */}
              <div className="info-box flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 transition hover:-translate-y-1 hover:shadow-md">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-green-200">

                  <img
                    className="h-6 w-6 object-contain"
                    src={assets.clock}
                    alt=""
                  />

                </div>

                <p className="text-sm text-gray-700">
                  Mon - Sat 8:00 AM - 6:00 PM
                </p>

              </div>

            </div>

            {/* Form */}
            <div id="getInTouch" className="mt-8">

              <h1 className="text-center text-2xl font-semibold text-gray-800">
                Get In Touch
              </h1>

              <p className="mb-5 mt-1 text-center text-gray-600">
                We'd Love to Hear from You
              </p>

              <form className="flex flex-col gap-3">

                <div className="flex flex-col gap-3 md:flex-row">

                  <input
                    className="form-field w-full rounded-lg border border-gray-300 bg-white p-3 outline-none focus:border-green-700"
                    type="text"
                    name="name"
                    value={info.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                  />

                  <input
                    type="email"
                    name="email"
                    value={info.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="form-field w-full rounded-lg border border-gray-300 bg-white p-3 outline-none focus:border-green-700"
                  />

                </div>

                <input
                  type="text"
                  name="subject"
                  value={info.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="form-field w-full rounded-lg border border-gray-300 bg-white p-3 outline-none focus:border-green-700"
                />

                <textarea
                  name="message"
                  value={info.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="form-field h-36 w-full resize-none rounded-lg border border-gray-300 bg-white p-3 outline-none focus:border-green-700"
                ></textarea>

                <button
                  type="submit"
                  className="form-field mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-green-900 p-3 text-white transition duration-300 hover:bg-green-800 hover:scale-[1.02]"
                >

                  <img
                    className="h-5 invert"
                    src={assets.send}
                    alt=""
                  />

                  <span>
                    Send Message
                  </span>

                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;