import React from "react";
import Tilt from "react-parallax-tilt";
import LaptopImg from "../../assets/home-main.svg";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  const socialLinks = [
    { icon: <AiFillGithub size={28} />, href: "https://github.com/19sajib", label: "GitHub" },
    { icon: <AiOutlineTwitter size={28} />, href: "https://twitter.com/19sajib", label: "Twitter" },
    { icon: <FaLinkedinIn size={28} />, href: "https://www.linkedin.com/in/19sajib/", label: "LinkedIn" },
    { icon: <SiLeetcode size={28} />, href: "https://leetcode.com/19sajib/", label: "LeetCode" },
  ];

  return (
    <section id="about" className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left - Text */}
        <div className="lg:w-2/3 space-y-6">
          <h1 className="text-4xl font-bold">
            LET ME <span className="text-yellow-500">INTRODUCE</span> MYSELF
          </h1>

          <p className="text-lg leading-relaxed">
            Hi, my name is <span className="text-yellow-500 font-semibold">Md Abu Bakkar Siddiqe Sajib</span> and I'm from <span className="text-yellow-500 font-semibold">Dhaka, Bangladesh.</span>
            <br /><br />
            I recently graduated with a Bachelor's degree in Computer Science and Engineering in 2021.
            <br /><br />
            As a <b className="text-yellow-500">Full-Stack</b> developer, I enjoy tackling new challenges and continuously expanding my skillset.
            <br /><br />
            I am proficient in <b className="text-yellow-500">Javascript</b>, and have knowledge in C, Java, Python, <b className="text-yellow-500">GraphQL, and Solidity</b>.
            <br /><br />
            I have a passion for working with <b className="text-yellow-500">Node.js, MongoDB</b> and modern Javascript libraries and frameworks like <b className="text-yellow-500">React.js</b>.
            <br /><br />
            I am also interested in building new <b className="text-yellow-500">Web Technologies and Products</b> and exploring areas related to <b className="text-yellow-500">Artificial Intelligence</b>.
          </p>
        </div>

        {/* Right - Avatar */}
        <div className="lg:w-1/3">
          <Tilt>
            <img src={LaptopImg} alt="avatar" className="rounded-lg w-full h-auto shadow-lg" />
          </Tilt>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-2">FIND ME ON</h2>
        <p className="mb-4">
          Please don't hesitate to reach out to me and <span className="text-yellow-500 font-semibold">connect.</span>
        </p>
        <ul className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="text-white hover:text-yellow-500 transition-colors duration-300"
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

export default About;
