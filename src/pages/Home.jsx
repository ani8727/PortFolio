import React from "react";
import homeLogo from "../assets/about.png";
import Particle from "../components/Particle";
import About from "../components/Home/About";
import Type from "../components/Home/Type";

const Home = () => {
  return (
    <section id="home" className="relative">
      {/* Particle Background */}
      <Particle />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-12 items-center gap-8">

          {/* Text Section */}
          <div className="md:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold pb-4">
              Hi There!{" "}
              <span className="wave" role="img" aria-label="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="text-3xl sm:text-4xl font-bold">
              I'M
              <strong className="text-indigo-600 ml-2"> Md Abu Bakkar Siddiqe Sajib</strong>
            </h1>

            <div className="pt-12 text-left">
              <Type />
            </div>
          </div>

          {/* Image Section */}
          <div className="md:col-span-5 flex justify-center md:justify-end pb-5">
            <img
              src={homeLogo}
              alt="home pic"
              className="max-h-[450px] w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <About />
    </section>
  );
};

export default Home;
