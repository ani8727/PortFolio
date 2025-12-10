import React from "react";
import {
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

const Toolstack = () => {
  const tools = [
    <DiVisualstudio key="vscode" />,   // VS Code icon
    <SiPostman key="postman" />,
    <SiVercel key="vercel" />,
    <SiNetlify key="netlify" />,
    <SiHeroku key="heroku" />,
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 pb-12 text-5xl text-white">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-20 h-20 rounded-lg bg-purple-800 hover:bg-purple-700 transition-transform transform hover:scale-110"
        >
          {tool}
        </div>
      ))}
    </div>
  );
};

export default Toolstack;
