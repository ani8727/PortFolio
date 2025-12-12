import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Social = () => {
  const socialLinks = [
    {
      icon: <AiFillGithub size={28} />,
      href: "https://github.com/ani8727",
      name: "GitHub",
    },
    {
      icon: <AiOutlineTwitter size={28} />,
      href: "#",
      name: "Twitter",
    },
    {
      icon: <FaLinkedinIn size={28} />,
      href: "https://www.linkedin.com/in/aniket-gupta-ani8727/",
      name: "LinkedIn",
    },
    {
      icon: <SiLeetcode size={28} />,
      href: "https://leetcode.com/Aniket_01_gupta/",
      name: "LeetCode",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-bold mb-6 text-yellow-400">FIND ME ON</h3>
      <p className="text-center text-gray-300 mb-8 max-w-md text-sm leading-relaxed">
        Feel free to reach out and connect with me on any of these platforms!
      </p>

      <div className="flex justify-center gap-8 flex-wrap">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => { if (link.name === 'Twitter') e.preventDefault(); }}
            target={link.name === 'Twitter' ? undefined : "_blank"}
            rel={link.name === 'Twitter' ? undefined : "noreferrer"}
            className={`group relative p-4 rounded-lg transition-all duration-300 transform hover:scale-110 ${
              link.name === 'Twitter' 
                ? 'opacity-50 cursor-default bg-gray-700/20' 
                : 'bg-linear-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-indigo-500/50'
            }`}
            title={link.name}
          >
            <div className={`transition-colors duration-300 ${
              link.name === 'Twitter' 
                ? 'text-gray-400' 
                : 'text-white group-hover:text-yellow-400'
            }`}>
              {link.icon}
            </div>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Social;
