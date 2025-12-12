import React from "react";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import p1 from "../assets/projects/p1.svg";
import p2 from "../assets/projects/p2.svg";
import p3 from "../assets/projects/p3.svg";
import p4 from "../assets/projects/p4.svg";
import p5 from "../assets/projects/p5.svg";
import p6 from "../assets/projects/p6.svg";

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
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            imgPath={p1}
            isBlog={false}
            title="Fitness App Microservice"
            description="A scalable microservices-based fitness application built with Spring Boot. Features user management, workout tracking, and real-time progress monitoring with a robust backend architecture. Implements RESTful APIs, service discovery, and load balancing for optimal performance and reliability."
            ghLink="https://github.com/ani8727/fitness_app_microservice"
            demoLink="https://fitness-app-demo.com"
          />

          <ProjectCard
            imgPath={p2}
            isBlog={false}
            title="Patient Management Service"
            description="A comprehensive healthcare management system designed for efficient patient data handling. Built with Spring Boot and includes appointment scheduling, medical records management, and patient tracking features. Implements secure authentication, role-based access control, and seamless integration with hospital databases."
            ghLink="https://github.com/ani8727/Patient-Management-Service"
            demoLink="https://patient-management-demo.com"
          />

          <ProjectCard
            imgPath={p3}
            isBlog={false}
            title="DSA Pattern Wise"
            description="A curated collection of Data Structures and Algorithms problems organized by common coding patterns. Includes solutions in C++ & algorithms with detailed explanations, time-space complexity analysis, and pattern recognition techniques to help master problem-solving for technical interviews."
            ghLink="https://github.com/ani8727/DSA-Pattern_Wise"
          />

          <ProjectCard
            imgPath={p4}
            isBlog={false}
            title="DSA Learning Hub"
            description="An interactive learning platform for Data Structures and Algorithms. Features comprehensive tutorials, practice problems, and visual explanations to build strong DSA fundamentals. Covers essential topics from basic arrays to advanced dynamic programming and graph algorithms."
            ghLink="https://github.com/ani8727/DSA_Learing_Hub"
            demoLink="https://ani8727.github.io/DSA_Learing_Hub/"
          />

          <ProjectCard
            imgPath={p5}
            isBlog={false}
            title="DSA Sheet - Topic Wise"
            description="A well-organized DSA practice sheet categorized by topics for systematic learning. Includes carefully selected problems covering arrays, strings, linked lists, trees, graphs, dynamic programming, and more. Features multiple difficulty levels and optimal solutions with detailed explanations."
            ghLink="https://github.com/ani8727/DSA-Sheet---topic-wise"
          />

          <ProjectCard
            imgPath={p6}
            isBlog={false}
            title="Jarvis Assistant"
            description="An intelligent voice-activated assistant inspired by JARVIS from Iron Man. Built with Python featuring speech recognition, natural language processing, and automation capabilities. Performs tasks like web searches, system commands, weather updates, email automation, and more through voice commands."
            ghLink="https://github.com/ani8727/jarvish_assistant"
            demoLink="https://jarvish-assistant.vercel.app/"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
