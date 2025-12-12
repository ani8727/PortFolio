import React from "react";
import homeHeroPng from "../assets/profile.png";
import Particle from "../components/Particle";
import About from "../components/Home/About";
import Type from "../components/Home/Type";

const Home = () => {
  return (
    <section id="home" className="relative pt-20 md:pt-28 bg-linear-to-b from-indigo-100 via-indigo-200 to-indigo-300 text-gray-900">
      <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-black/12 to-black/24"></div>

      <Particle />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-12 items-center gap-8 md:gap-12">

          {/* Text Section */}
          <div className="md:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold pb-4 text-gray-900">
              Hi There!{" "}
              <span className="wave" role="img" aria-label="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
              I’M
              <strong className="text-indigo-600 ml-2">Aniket Gupta</strong>
              <div className="mt-3 text-lg sm:text-xl font-medium text-gray-800 max-w-xl">
                A dedicated Software Engineer specializing in Java backend development,
                Spring Boot, scalable APIs, and modern full-stack engineering.
              </div>
            </h1>

            <div className="pt-12 text-left">
              <Type />
            </div>
          </div>

          {/* Image Section */}
          <div className="md:col-span-5 flex justify-center md:justify-end pb-5">
            <figure className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative">
              <div className="inline-block rounded-full p-1 bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-linear-to-br from-indigo-100 via-indigo-200 to-purple-200 p-2">
                  <img
                    src={homeHeroPng}
                    alt="Aniket Gupta"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center rounded-full"
                    style={{ objectPosition: 'center 24%' }}
                  />
                </div>
              </div>
              <figcaption className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-indigo-600 to-purple-600 text-white text-sm sm:text-base px-4 py-1.5 rounded-full shadow-lg">
                Aniket Gupta
              </figcaption>
            </figure>
          </div>

        </div>
      </div>

      {/* About Section */}
      <About />
    </section>
  );
};

export default Home;
