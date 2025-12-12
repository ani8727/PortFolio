import React from "react";
import Particle from "../components/Particle";
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import Leetcode from "../components/Skillset/Leetcode";
import Certificates from "../components/Skillset/Certificates";

const Skillset = () => {
  return (
    <section className="relative bg-linear-to-br from-slate-900 via-gray-900 to-black min-h-screen py-12">
      {/* Particle Background */}
      <Particle />

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)]" />
      </div>
      <br /><br />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">

        {/* Skillset Heading */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Professional <span className="text-yellow-400">Skillset</span>
          </h1>
        </div>

        {/* Certificates & Achievements Section - TOP */}
        <div className="bg-linear-to-br from-gray-800/40 via-orange-900/20 to-gray-900/40 backdrop-blur-sm rounded-2xl p-5 border border-orange-500/30 shadow-xl">
          <Certificates />
        </div>

        {/* Tech Stack and Tools - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Tech Stack Section */}
          <div className="bg-linear-to-br from-gray-800/40 via-purple-900/20 to-gray-900/40 backdrop-blur-sm rounded-2xl p-5 border border-purple-500/30 shadow-xl">
            <h2 className="text-xl font-bold text-center mb-5 text-white">
              <span className="text-yellow-400">Core</span> Technologies
            </h2>
            <Techstack />
          </div>

          {/* Tools Section */}
          <div className="bg-linear-to-br from-gray-800/40 via-blue-900/20 to-gray-900/40 backdrop-blur-sm rounded-2xl p-5 border border-blue-500/30 shadow-xl">
            <h2 className="text-xl font-bold text-center mb-5 text-white">
              <span className="text-yellow-400">Development</span> Tools
            </h2>
            <Toolstack />
          </div>
        </div>

        {/* LeetCode and Key Achievements - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Leetcode Section */}
          <div className="bg-linear-to-br from-gray-800/40 via-green-900/20 to-gray-900/40 backdrop-blur-sm rounded-2xl p-5 border border-green-500/30 shadow-xl">
            <Leetcode />
          </div>

          {/* Key Achievements Highlights */}
          <div className="bg-linear-to-br from-gray-800/40 via-yellow-900/20 to-gray-900/40 backdrop-blur-sm rounded-2xl p-5 border border-yellow-500/30 shadow-xl">
            <h2 className="text-xl font-bold text-center mb-5 text-white">
              <span className="text-yellow-400">Key</span> Achievements
            </h2>
            <div className="space-y-3 px-4">
              <div className="bg-gray-800/50 backdrop-blur rounded-xl p-3 border border-gray-700/50">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">✦</span>
                    <span className="text-sm">Solved 500+ DSA problems across platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">✦</span>
                    <span className="text-sm">Built 15+ full-stack MERN applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">✦</span>
                    <span className="text-sm">5-star Java rating on HackerRank</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">✦</span>
                    <span className="text-sm">Deployed 10+ apps on AWS & Azure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">✦</span>
                    <span className="text-sm">20+ hackathons participation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillset;
