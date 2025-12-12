import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import fLogo from "../../assets/fLogo.png";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const socialLinks = [
    { icon: <AiFillGithub size={24} />, href: "https://github.com/ani8727", label: "GitHub" },
    { icon: <AiOutlineTwitter size={24} />, href: "#", label: "Twitter" },
    { icon: <FaLinkedinIn size={24} />, href: "https://www.linkedin.com/in/aniket-gupta-ani8727/", label: "LinkedIn" },
    { icon: <SiLeetcode size={24} />, href: "https://leetcode.com/Aniket_01_gupta/", label: "LeetCode" },
  ];

  return (
    <footer className="bg-linear-to-br from-indigo-800 via-purple-800 to-indigo-900 text-white py-3 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Left: logo + copyright */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link to="/" title="Home" className="inline-flex items-center focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-md bg-white/5 p-0.5 shadow-sm transform transition-transform duration-150 hover:scale-105 ring-1 ring-white/15 backdrop-blur-sm">
              <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-md bg-transparent">
                <img src={fLogo} alt="Aniket Gupta logo" className="w-full h-full object-contain block" />
              </div>
            </div>
          </Link>
          <span className="text-[11px] text-gray-300">© {year}</span>
        </div>

        {/* Center: message */}
        <div className="flex-1 text-center px-4 hidden sm:block">
          <span className="text-base md:text-lg font-semibold text-white">Dedicated to creating <span className="text-yellow-300 font-bold">impactful</span> solutions</span>
        </div>

        {/* Right: social icons */}
        <ul className="flex gap-2 justify-end items-center">
          {socialLinks.map((link) => {
            const bg = link.label === 'GitHub' ? '#181717' : link.label === 'Twitter' ? '#1DA1F2' : link.label === 'LinkedIn' ? '#0077B5' : '#FFA116';
            const hover = link.label === 'GitHub' ? '#2e2e2e' : link.label === 'Twitter' ? '#0d8be6' : link.label === 'LinkedIn' ? '#00629b' : '#ff8f00';
            const isTwitter = link.label === 'Twitter';
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => { if (isTwitter) e.preventDefault(); }}
                  target={isTwitter ? undefined : "_blank"}
                  rel={isTwitter ? undefined : "noopener noreferrer"}
                  aria-label={link.label}
                  aria-disabled={isTwitter}
                  className={`inline-flex w-8 h-8 items-center justify-center rounded-full text-white transition transform ${isTwitter ? 'opacity-60 cursor-default' : 'hover:scale-105'} focus:outline-none focus:ring-2 focus:ring-yellow-400`}
                  style={{ backgroundColor: bg }}
                  onMouseOver={(e) => { if (!isTwitter) e.currentTarget.style.backgroundColor = hover; }}
                  onMouseOut={(e) => { if (!isTwitter) e.currentTarget.style.backgroundColor = bg; }}
                >
                  {React.cloneElement(link.icon, { size: 16 })}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
