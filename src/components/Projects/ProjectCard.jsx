import React from "react";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import p1 from "../../assets/projects/p1.svg";
import p2 from "../../assets/projects/p2.svg";
import p3 from "../../assets/projects/p3.svg";
import p4 from "../../assets/projects/p4.svg";
import p5 from "../../assets/projects/p5.svg";
import p6 from "../../assets/projects/p6.svg";

const ProjectCard = ({ imgPath, title, description, ghLink, demoLink, isBlog }) => {
  return (
    <div className="flex flex-col justify-between bg-purple-900 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="w-full h-52 bg-linear-to-br from-indigo-800 to-purple-800 flex items-center justify-center overflow-hidden">
        <img
          src={imgPath}
          alt={`${title} screenshot`}
          loading="lazy"
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="flex flex-col justify-between p-4 flex-1">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-200 text-sm mb-4 text-justify">{description}</p>
        <div className="flex flex-col sm:flex-row gap-2 mt-auto">
          <a
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded transition"
          >
            <BsGithub className="mr-2" /> {isBlog ? "Blog" : "GitHub"}
          </a>
          {!isBlog && demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 hover:bg-green-400 text-black font-semibold py-2 px-4 rounded transition"
            >
              <CgWebsite className="mr-2" /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Project details with SVG images
const projects = [
  {
    imgPath: p1,
    title: "FitTrack - Full Stack Fitness App",
    ghLink: "https://github.com/ani8727/FitTrack-Full_stack_fitness_app.git",
    demoLink: "https://github.com/ani8727/FitTrack-Full_stack_fitness_app.git",
    description: "A full-stack fitness tracking application to monitor workouts and progress.",
  },
  {
    imgPath: p2,
    title: "Patient Management Service",
    ghLink: "https://github.com/ani8727/Patient-Management-Service",
    demoLink: "https://patient-management-demo.com",
    description: "A comprehensive healthcare management system designed for efficient patient data handling. Built with Spring Boot and includes appointment scheduling, medical records management, and patient tracking features. Implements secure authentication, role-based access control, and seamless integration with hospital databases.",
  },
  {
    imgPath: p3,
    title: "DSA Pattern Wise",
    ghLink: "https://github.com/ani8727/DSA-Pattern_Wise",
    demoLink: null,
    description: "A curated collection of Data Structures and Algorithms problems organized by common coding patterns. Includes solutions in C++ & algorithms with detailed explanations, time-space complexity analysis, and pattern recognition techniques to help master problem-solving for technical interviews.",
  },
  {
    imgPath: p4,
    title: "DSA Learning Hub",
    ghLink: "https://github.com/ani8727/DSA_Learing_Hub",
    demoLink: "https://ani8727.github.io/DSA_Learing_Hub/",
    description: "An interactive learning platform for Data Structures and Algorithms. Features comprehensive tutorials, practice problems, and visual explanations to build strong DSA fundamentals. Covers essential topics from basic arrays to advanced dynamic programming and graph algorithms.",
  },
  {
    imgPath: p5,
    title: "DSA Sheet - Topic Wise",
    ghLink: "https://github.com/ani8727/DSA-Sheet---topic-wise",
    demoLink: null,
    description: "A well-organized DSA practice sheet categorized by topics for systematic learning. Includes carefully selected problems covering arrays, strings, linked lists, trees, graphs, dynamic programming, and more. Features multiple difficulty levels and optimal solutions with detailed explanations.",
  },
  {
    imgPath: p6,
    title: "Metro Route Finder",
    ghLink: "https://github.com/ani8727/metro-route-finder.git",
    demoLink: null,
    description: "An application to find the shortest metro routes efficiently.",
  },
];

const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          imgPath={project.imgPath}
          title={project.title}
          description={project.description}
          ghLink={project.ghLink}
          demoLink={project.demoLink}
          isBlog={false}
        />
      ))}
    </div>
  );
};

export { ProjectList };
export default ProjectCard;
