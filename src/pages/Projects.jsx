import React from "react";
import { ProjectList } from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

const Projects = () => {
  return (
    <section className="relative bg-gray-900 text-white min-h-screen py-20">
      {/* Particle Background */}
      <Particle />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Recent Top <span className="text-yellow-500">Works</span>
        </h1>
        <p className="text-center mb-12 text-gray-300">
          Here are a few projects I've worked on recently.
        </p>

        {/* Projects Grid */}
        <ProjectList />
      </div>
    </section>
  );
};

export default Projects;
