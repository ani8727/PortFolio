import React from "react";
import Tilt from "react-parallax-tilt";
import AboutImg from "../../assets/about.png";
import resumePdf from "../../assets/resume.pdf";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  const socialLinks = [
    { icon: <AiFillGithub size={28} />, href: "https://github.com/ani8727", label: "GitHub" },
    { icon: <AiOutlineTwitter size={28} />, href: "#", label: "Twitter" },
    { icon: <FaLinkedinIn size={28} />, href: "https://www.linkedin.com/in/aniket-gupta-ani8727/", label: "LinkedIn" },
    { icon: <SiLeetcode size={28} />, href: "https://leetcode.com/Aniket_01_gupta/", label: "LeetCode" },
  ];

  return (
    <section id="about" className="bg-linear-to-b from-slate-800 to-slate-900 text-white py-12 pb-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-6">

        {/* Left */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left px-4 lg:px-0">
          <h1 className="text-4xl font-bold">
            LET ME <span className="text-yellow-500">INTRODUCE</span> MYSELF
          </h1>

          <p className="text-lg leading-relaxed">
            Hi, I’m <span className="text-yellow-500 font-semibold">Aniket Gupta</span> from 
            <span className="text-yellow-500 font-semibold"> Ludhiana, India</span>.  
            I am a final-year Software Engineering student focused on building reliable, scalable, and modern applications.  
            My core expertise lies in Java, Spring Boot, RESTful APIs, and full-stack solution engineering.
          </p>

          <p className="text-lg leading-relaxed">
            I enjoy transforming problem statements into efficient engineering solutions.  
            With strong fundamentals in Data Structures and Algorithms, I prioritize clean architecture, performance optimization, and production-ready code.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <ul className="list-disc pl-5 text-gray-300">
              <li><strong className="text-yellow-400">Frontend:</strong> React.js, Redux, Tailwind CSS</li>
              <li><strong className="text-yellow-400">Backend:</strong> Java, Spring Boot, RESTful Services</li>
            </ul>
            <ul className="list-disc pl-5 text-gray-300">
              <li><strong className="text-yellow-400">Databases:</strong> MySQL, MongoDB, PostgreSQL</li>
              <li><strong className="text-yellow-400">Other Tools:</strong> Docker, AWS, CI/CD, Keycloak, RabbitMQ</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed">
            I am continuously exploring cloud technologies, distributed systems, and DevOps practices 
            to expand my capabilities as a modern software engineer.
          </p>

          <div className="mt-4 flex justify-center lg:justify-start gap-3">
            <a href={resumePdf} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-2 px-4 rounded">
              Download Resume
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 font-semibold py-2 px-4 rounded">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end px-4 lg:px-0">
          <div className="w-full h-64 sm:h-96 lg:h-full overflow-hidden rounded-md shadow-sm">
            <img
              src={AboutImg}
              alt="About - Aniket Gupta"
              className="w-full h-full object-cover filter contrast-95 brightness-90"
              style={{ objectPosition: 'center 25%' }}
            />
          </div>
        </div>
      </div>

      {/* Social - Connect Section with Different Background */}
      <div className="mt-12 -mx-4 sm:-mx-6 lg:-mx-8 text-center bg-linear-to-br from-slate-900/50 via-indigo-900/30 to-slate-900/50 backdrop-blur-sm p-8 border-t border-slate-700/50 shadow-xl">
        <h2 className="text-3xl font-bold mb-2 text-white">
          FIND <span className="text-yellow-400">ME</span> ON
        </h2>

        <p className="mb-6 text-lg text-gray-300">
          I am open to professional opportunities, collaborations, and networking.  
          Feel free to connect through the platforms below.
        </p>

        <ul className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => { if (link.label === 'Twitter') e.preventDefault(); }}
                target={link.label === 'Twitter' ? undefined : "_blank"}
                rel={link.label === 'Twitter' ? undefined : "noreferrer"}
                aria-label={link.label}
                className={`text-gray-200 transition-colors duration-300 ${link.label === 'Twitter' ? 'opacity-60 cursor-default' : 'hover:text-yellow-400'}`}
                aria-disabled={link.label === 'Twitter'}
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
