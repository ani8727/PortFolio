import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiJava,
  DiMongodb,
  DiMysql,
} from "react-icons/di";
import {
  SiCplusplus,
  SiSpringboot,
  SiExpress,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiTailwindcss,
} from "react-icons/si";
import { TbBinaryTree } from "react-icons/tb";

const Techstack = () => {
  const techItems = [
    { icon: <SiCplusplus />, name: "C++", color: "text-blue-300", gradient: "from-blue-400 to-blue-600", shadow: "shadow-blue-500/50" },
    { icon: <TbBinaryTree />, name: "DSA", color: "text-emerald-300", gradient: "from-emerald-400 to-green-600", shadow: "shadow-green-500/50" },
    { icon: <DiJava />, name: "Java", color: "text-red-400", gradient: "from-red-400 to-orange-500", shadow: "shadow-red-500/50" },
    { icon: <SiSpringboot />, name: "Spring Boot", color: "text-green-400", gradient: "from-green-400 to-emerald-600", shadow: "shadow-green-500/50" },
    { icon: <DiReact />, name: "React", color: "text-sky-300", gradient: "from-sky-400 to-blue-500", shadow: "shadow-cyan-500/50" },
    { icon: <DiJavascript1 />, name: "JavaScript", color: "text-yellow-300", gradient: "from-yellow-300 to-amber-500", shadow: "shadow-yellow-500/50" },
    { icon: <DiMongodb />, name: "MongoDB", color: "text-green-400", gradient: "from-green-400 to-emerald-600", shadow: "shadow-green-500/50" },
    { icon: <DiMysql />, name: "MySQL", color: "text-blue-300", gradient: "from-blue-300 to-indigo-500", shadow: "shadow-blue-500/50" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "text-sky-400", gradient: "from-sky-300 to-blue-500", shadow: "shadow-blue-500/50" },
    { icon: <SiGraphql />, name: "GraphQL", color: "text-pink-400", gradient: "from-pink-400 to-fuchsia-600", shadow: "shadow-pink-500/50" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-300", gradient: "from-cyan-300 to-teal-500", shadow: "shadow-cyan-500/50" },
    { icon: <SiRedis />, name: "Redis", color: "text-red-400", gradient: "from-red-400 to-rose-600", shadow: "shadow-red-500/50" },
    { icon: <DiGit />, name: "Git", color: "text-orange-400", gradient: "from-orange-400 to-red-600", shadow: "shadow-orange-500/50" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-5 pb-8">
      {techItems.map((tech, index) => (
        <div
          key={index}
          className={`group relative flex flex-col items-center justify-center w-24 h-24 rounded-xl bg-linear-to-br from-gray-800/60 to-gray-900/60 border-2 border-gray-700/30 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:${tech.shadow} transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 hover:rotate-3 cursor-pointer`}
        >
          {/* Animated background gradient */}
          <div className={`absolute inset-0 rounded-xl bg-linear-to-br ${tech.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500`}></div>
          
          {/* Icon with solid color - NO BLUR */}
          <div className={`relative z-10 text-4xl ${tech.color} group-hover:scale-125 transition-all duration-500 drop-shadow-2xl filter`}>
            {tech.icon}
          </div>
          
          {/* Tech name label below icon */}
          <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className={`text-[10px] font-bold ${tech.color}`}>
              {tech.name}
            </p>
          </div>
          
          {/* Enhanced tooltip */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none scale-0 group-hover:scale-100">
            <div className={`relative bg-linear-to-r ${tech.gradient} text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-2xl whitespace-nowrap`}>
              {tech.name}
              {/* Arrow */}
              <div className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-linear-to-br ${tech.gradient} rotate-45`}></div>
            </div>
          </div>

          {/* Orbital ring effect on hover */}
          <div className={`absolute inset-0 rounded-xl border-2 border-${tech.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
        </div>
      ))}
    </div>
  );
};

export default Techstack;
