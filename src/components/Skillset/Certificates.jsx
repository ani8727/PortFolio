import React from "react";
import { AiOutlineTrophy, AiOutlineFilePdf, AiOutlineLink } from "react-icons/ai";
import { FaCertificate, FaAward, FaResearchgate } from "react-icons/fa";

const Certificates = () => {
  const achievements = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "2024",
      type: "certificate",
      icon: <FaCertificate />,
      color: "from-blue-500 to-cyan-500",
      pdfLink: "#", // Replace with actual PDF link
      credentialLink: "#", // Replace with credential verification link
    },
    {
      id: 2,
      title: "React Advanced Patterns",
      issuer: "Coursera",
      date: "2024",
      type: "certificate",
      icon: <FaCertificate />,
      color: "from-purple-500 to-pink-500",
      pdfLink: "#",
      credentialLink: "#",
    },
    {
      id: 3,
      title: "Blockchain Development Internship",
      issuer: "Tech Company XYZ",
      date: "2023",
      type: "internship",
      icon: <AiOutlineTrophy />,
      color: "from-orange-500 to-red-500",
      pdfLink: "#",
      credentialLink: "#",
    },
    {
      id: 4,
      title: "Research Paper: AI in Web Development",
      issuer: "IEEE Conference",
      date: "2023",
      type: "research",
      icon: <FaResearchgate />,
      color: "from-green-500 to-teal-500",
      pdfLink: "#",
      credentialLink: "#",
    },
    {
      id: 5,
      title: "Best Project Award",
      issuer: "College Technical Fest",
      date: "2023",
      type: "award",
      icon: <FaAward />,
      color: "from-yellow-500 to-orange-500",
      pdfLink: "#",
      credentialLink: "#",
    },
    {
      id: 6,
      title: "Certificate in AI and Machine Learning",
      issuer: "College Technical Fest",
      date: "2023",
      type: "award",
      icon: <FaAward />,
      color: "from-yellow-500 to-orange-500",
      pdfLink: "#",
      credentialLink: "#",
    },
  ];

  const getTypeLabel = (type) => {
    const labels = {
      certificate: "Certificate",
      internship: "Internship",
      research: "Research Paper",
      award: "Achievement",
    };
    return labels[type] || "Achievement";
  };

  return (
    <div className="pb-8">
      <h1 className="text-2xl font-bold pb-6 text-center bg-linear-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        Certificates & <span className="text-yellow-400">Achievements</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="group relative bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-4 shadow-xl hover:shadow-2xl backdrop-blur transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
          >
            {/* Type Badge */}
            <div className="absolute top-3 right-3">
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full bg-linear-to-r ${achievement.color} text-white shadow-lg`}>
                {getTypeLabel(achievement.type)}
              </span>
            </div>

            {/* Icon */}
            <div className={`text-3xl mb-3 bg-linear-to-br ${achievement.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
              {achievement.icon}
            </div>

            {/* Content */}
            <div className="space-y-1.5">
              <h3 className="text-base font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                {achievement.title}
              </h3>
              <p className="text-gray-400 text-xs font-semibold">{achievement.issuer}</p>
              <p className="text-gray-500 text-[10px]">{achievement.date}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-4">
              <a
                href={achievement.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold py-1.5 px-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <AiOutlineFilePdf className="text-sm" />
                View PDF
              </a>
              <a
                href={achievement.credentialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-linear-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-xs font-semibold py-1.5 px-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                title="Verify Credential"
              >
                <AiOutlineLink className="text-sm" />
              </a>
            </div>

            {/* Glow effect on hover */}
            <div className={`absolute inset-0 rounded-xl bg-linear-to-br ${achievement.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 pointer-events-none`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
