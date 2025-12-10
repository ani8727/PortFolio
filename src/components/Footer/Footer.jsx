import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import logo from "../../assets/sLogo.png";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const socialLinks = [
    { icon: <AiFillGithub size={24} />, href: "https://github.com/19sajib", label: "GitHub" },
    { icon: <AiOutlineTwitter size={24} />, href: "https://twitter.com/19sajib", label: "Twitter" },
    { icon: <FaLinkedinIn size={24} />, href: "https://www.linkedin.com/in/19sajib/", label: "LinkedIn" },
    { icon: <SiLeetcode size={24} />, href: "https://leetcode.com/19sajib/", label: "LeetCode" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div className="text-center md:text-left">
          <span className="font-medium">Dedicated to creating impactful solutions!</span>
        </div>

        {/* Center */}
        <div className="flex items-center gap-2">
          <span className="font-medium">Copyright © {year}</span>
          <img src={logo} alt="brand" className="h-8 w-auto ml-2" />
        </div>

        {/* Right */}
        <ul className="flex gap-4 justify-center md:justify-end">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-white hover:text-yellow-500 transition-colors duration-300"
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
