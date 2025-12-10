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
      href: "https://github.com/19sajib",
      name: "GitHub",
    },
    {
      icon: <AiOutlineTwitter size={28} />,
      href: "https://twitter.com/19sajib",
      name: "Twitter",
    },
    {
      icon: <FaLinkedinIn size={28} />,
      href: "https://www.linkedin.com/in/19sajib/",
      name: "LinkedIn",
    },
    {
      icon: <SiLeetcode size={28} />,
      href: "https://leetcode.com/19sajib/",
      name: "LeetCode",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">FIND ME ON</h1>
        <p className="mb-6">
          Please don't hesitate to reach out to me and{" "}
          <span className="text-yellow-500 font-semibold">connect.</span>
        </p>

        <ul className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-yellow-500 transition-colors duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Social;
