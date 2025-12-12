import React from "react";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

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

export default ProjectCard;
