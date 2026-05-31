import React, { useState, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Library = () => {
  const [books, setBooks] = useState([]);
  const [visible, setVisible] = useState(6);

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=spirituality&limit=20")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.docs);
      });
  }, []);

  useLayoutEffect(() => {
    if (window.innerWidth < 768) return;
    if (books.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".library-title",
        {
          y: 40,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: "#library",
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".book-card",
        {
          y: 50,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: "#library",
            start: "top 75%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [books]);

  useLayoutEffect(() => {
    if (window.innerWidth < 768) return;
    if (books.length === 0) return;

    gsap.fromTo(
      ".book-card",
      {
        y: 30,
        opacity: 0,
        scale: 0.96,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
      }
    );
  }, [visible, books.length]);

  const showMoreBooks = () => {
    setVisible((prev) => prev + 4);
  };

  return (
    <div
      id="library"
      className="relative w-full bg-cover bg-center px-4 py-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#c0bdb8]/60"></div>

      <div className="library-title relative z-50 text-center mb-8">
        <h1 className="text-2xl mb-2 font-bold">Our Library</h1>
        <p className="text-gray-700">Knowledge Awaits You</p>
      </div>

      <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 z-50">
        {books.slice(0, visible).map((book) => (
          <div
            key={book.key}
            className="book-card bg-white rounded-xl shadow p-4 hover:shadow-lg hover:-translate-y-2 transition duration-500"
          >
            <img
              src={
                book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                  : "https://via.placeholder.com/150"
              }
              alt={book.title}
              className="w-full h-56 object-cover rounded-lg"
            />

            <h2 className="font-bold mt-3 text-sm line-clamp-2">
              {book.title}
            </h2>

            <p className="text-gray-600 text-sm">
              {book.author_name ? book.author_name[0] : "Unknown Author"}
            </p>

            <p className="text-gray-500 text-xs mt-1">
              {book.first_publish_year || "Unknown Year"}
            </p>
          </div>
        ))}
      </div>

      {visible < books.length && (
        <div className="text-center mt-8">
          <button
            className="relative px-6 py-3 bg-[#626060] hover:bg-black cursor-pointer text-white rounded-full z-40 hover:scale-105 transition duration-300"
            onClick={showMoreBooks}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Library;