import React, { useState } from "react";
import assets from "../assets/assets";
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
  return (
    <div
      className="relative w-full bg-gray-100 bg-no-repeat
             bg-[position:right_20px_bottom_400px]
             sm:bg-[position:right_40px_bottom_120px]
             lg:bg-[position:right_100px_bottom_150px]
             bg-[length:25%]
             md:bg-[length:25%]
             lg:bg-[length:20%]"
      style={{
        backgroundImage: `url(${assets.logo4})`,
      }}
    >
      <div className="absolute inset-0 bg-white/40"></div>
      <div className="relative mx-4 md:mx-8 lg:mx-12 z-50">
        <h1 className="text-center text-2xl pt-4 font-semibold">
          Our Location
        </h1>
        <p className="text-center text-lg text-gray-600 mb-2">Visit Us</p>

        <div>
          <div className="mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29801.708655115108!2d37.3948416!3d11.593318399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2set!4v1777728263161!5m2!1sen!2set"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl shadow-lg"
            ></iframe>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 flex items-center justify-center border border-gray-500 bg-red-400 rounded-full">
                <img
                  className="w-6 h-6 object-contain"
                  src={assets.location}
                  alt=""
                />
              </div>

              <p>
                123 Peaceful Road. <span>Harmony City, Ethiopia</span>
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 flex items-center justify-center border border-gray-500 bg-green-600 rounded-full">
                <img
                  className="w-6 h-6 object-contain"
                  src={assets.telephone}
                  alt=""
                />
              </div>

              <p> +251 912 245 678</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 flex items-center justify-center border border-gray-500 bg-blue-300 rounded-full">
                <img
                  className="w-6 h-6 object-contain"
                  src={assets.mail}
                  alt=""
                />
              </div>

              <p>info@spritualschool.org</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 flex items-center justify-center border border-gray-500 bg-green-200 rounded-full">
                <img
                  className="w-6 h-6 object-contain"
                  src={assets.clock}
                  alt=""
                />
              </div>

              <p>Mon - Sat 8:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <h1 className="mb-2 text-center text-2xl">Get In Touch</h1>
            <p className="mb-3 text-center">We'd Love to Hear from You</p>

            <form className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row gap-2">
                <input
                  className="border rounded-lg p-2 w-full"
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
                  className="border rounded-lg p-2 w-full"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={info.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="border w-full rounded-lg p-2"
              />
              <textarea
                name="message"
                value={info.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="border w-full h-40 rounded-lg p-2"
              ></textarea>

              <button
                type="submit"
                className="border flex items-center justify-center hover:bg-green-800 bg-green-900 w-full text-white gap-2 p-2 text-md mb-3 mt-2 rounded-2xl cursor-pointer"
              >
                <img className="h-5 invert" src={assets.send} alt="" />
                <h1>Send Message</h1>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
