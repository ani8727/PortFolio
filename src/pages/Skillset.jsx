import React from "react";
import Particle from "../components/Particle";
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import Leetcode from "../components/Skillset/Leetcode";
import Github from "../components/Skillset/Github";

const Skillset = () => {
  return (
    <section className="relative bg-gray-50 min-h-screen py-20">
      {/* Particle Background */}
      <Particle />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Skillset Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center">
          Professional <span className="text-yellow-500">Skillset</span>
        </h1>

        {/* Tech Stack Section */}
        <div>
          <Techstack />
        </div>

        {/* Tools Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mt-12">
          <span className="text-yellow-500">Tools</span> I use
        </h1>

        {/* Tools Section */}
        <div>
          <Toolstack />
        </div>

        {/* Leetcode Section */}
        <div>
          <Leetcode />
        </div>

        {/* Github Section */}
        <div>
          <Github />
        </div>
      </div>
    </section>
  );
};

export default Skillset;
