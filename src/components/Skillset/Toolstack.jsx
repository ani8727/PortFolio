import React from "react";
import {
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify,
  SiDocker,
  SiKubernetes,
  SiGithub,
  SiGit,
  SiNpm,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

const Toolstack = () => {
  const toolItems = [
    { icon: <DiVisualstudio />, name: "VS Code", color: "text-blue-300", gradient: "from-blue-400 to-indigo-600", shadow: "shadow-blue-500/50" },
    { icon: <SiPostman />, name: "Postman", color: "text-orange-300", gradient: "from-orange-400 to-red-600", shadow: "shadow-orange-500/50" },
    { icon: <SiDocker />, name: "Docker", color: "text-sky-300", gradient: "from-sky-400 to-blue-600", shadow: "shadow-blue-500/50" },
    { icon: <SiKubernetes />, name: "Kubernetes", color: "text-blue-400", gradient: "from-blue-400 to-indigo-600", shadow: "shadow-blue-500/50" },
    { icon: <SiGithub />, name: "GitHub", color: "text-slate-200", gradient: "from-slate-300 to-gray-600", shadow: "shadow-gray-500/50" },
    { icon: <SiGit />, name: "Git", color: "text-orange-400", gradient: "from-orange-400 to-red-600", shadow: "shadow-orange-500/50" },
    { icon: <SiVercel />, name: "Vercel", color: "text-gray-100", gradient: "from-white to-gray-400", shadow: "shadow-gray-500/50" },
    { icon: <SiNetlify />, name: "Netlify", color: "text-teal-300", gradient: "from-teal-300 to-cyan-600", shadow: "shadow-teal-500/50" },
    { icon: <SiNpm />, name: "NPM", color: "text-red-400", gradient: "from-red-400 to-rose-600", shadow: "shadow-red-500/50" },
    { icon: <SiHeroku />, name: "Heroku", color: "text-purple-400", gradient: "from-purple-400 to-violet-600", shadow: "shadow-purple-500/50" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-5 pb-8">
      {toolItems.map((tool, index) => (
        <div
          key={index}
          className={`group relative flex flex-col items-center justify-center w-24 h-24 rounded-xl bg-linear-to-br from-gray-800/60 to-gray-900/60 border-2 border-gray-700/30 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:${tool.shadow} transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 hover:rotate-3 cursor-pointer`}
        >
          {/* Animated background gradient */}
          <div className={`absolute inset-0 rounded-xl bg-linear-to-br ${tool.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500`}></div>
          
          {/* Icon with solid color - NO BLUR */}
          <div className={`relative z-10 text-4xl ${tool.color} group-hover:scale-125 transition-all duration-500 drop-shadow-2xl filter`}>
            {tool.icon}
          </div>
          
          {/* Tool name label below icon */}
          <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className={`text-[10px] font-bold ${tool.color}`}>
              {tool.name}
            </p>
          </div>
          
          {/* Enhanced tooltip */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none scale-0 group-hover:scale-100">
            <div className={`relative bg-linear-to-r ${tool.gradient} text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-2xl whitespace-nowrap`}>
              {tool.name}
              {/* Arrow */}
              <div className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-linear-to-br ${tool.gradient} rotate-45`}></div>
            </div>
          </div>

          {/* Orbital ring effect on hover */}
          <div className={`absolute inset-0 rounded-xl border-2 border-${tool.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
        </div>
      ))}
    </div>
  );
};

export default Toolstack;
