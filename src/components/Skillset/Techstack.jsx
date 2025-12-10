import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiHtml5,
} from "react-icons/di";
import {
  SiMui,
  SiGraphql,
  SiSolidity,
  SiRedux,
  SiMongodb,
} from "react-icons/si";

const Techstack = () => {
  const icons = [
    <DiHtml5 key="html5" />,
    <DiJavascript1 key="js" />,
    <DiNodejs key="node" />,
    <DiReact key="react" />,
    <SiRedux key="redux" />,
    <SiMongodb key="mongodb" />,
    <SiGraphql key="graphql" />,
    <SiSolidity key="solidity" />,
    <SiMui key="mui" />,
    <DiGit key="git" />,
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 pb-12 text-5xl text-white">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-20 h-20 rounded-lg bg-purple-800 hover:bg-purple-700 transition-transform transform hover:scale-110"
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

export default Techstack;
