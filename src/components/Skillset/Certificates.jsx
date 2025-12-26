import React from "react";
import { AiOutlineTrophy, AiOutlineFilePdf, AiOutlineLink } from "react-icons/ai";
import { FaCertificate, FaAward, FaResearchgate } from "react-icons/fa";

const Certificates = () => {
  const achievements = [
    {
      id: 1,
      title: "Data Visualization: Empowering Business with Effective Insights",
      issuer: "Forage",
      type: "certificate",
      icon: <FaCertificate />,
      color: "from-indigo-500 to-blue-500",
      pdfLink: "/aniket/certificates/business-analytics-data-visualization-forage.pdf",
      credentialLink: "https://verify.forage.com/Zcah5TjEnErFFpMuf",
    },
    {
      id: 2,
      title: "Foundation of Cloud IoT Edge ML",
      issuer: "NPTEL",
      type: "certificate",
      icon: <FaCertificate />,
      color: "from-teal-500 to-cyan-500",
      pdfLink: "/aniket/certificates/foundation-cloud-computing.pdf",
      credentialLink: "#",
    },
    {
      id: 3,
      title: "TCS iON Career Edge - Young Professional",
      issuer: "TCS iON",
      type: "certificate",
      icon: <FaCertificate />,
      color: "from-green-500 to-teal-400",
      pdfLink: "/aniket/certificates/tcs-ion-career-edge.pdf",
      credentialLink: "#",
    },
    {
      id: 4,
      title: "Using Intelligent Information Systems in AI",
      issuer: "OnWingspan",
      type: "certificate",
      icon: <FaCertificate />,
      color: "from-sky-500 to-indigo-500",
      pdfLink: "/aniket/certificates/stress-management-virtual-assistant.pdf",
      credentialLink: "https://verify.onwingspan.com",
    },
    {
      id: 5,
      title: "What is Data Science?",
      issuer: "IBM (Coursera)",
      type: "certificate",
      icon: <FaCertificate />,
      color: "from-purple-500 to-pink-500",
      pdfLink: "/aniket/certificates/data-science-foundations-ibm.pdf",
      credentialLink: "https://coursera.org/verify/KFLQHRF7US2C",
    },
    {
      id: 6,
      title: "Solidity Smart Contracts: Build DApps in Ethereum Blockchain",
      issuer: "OnWingspan",
      type: "certificate",
      icon: <FaCertificate />,
      color: "from-indigo-500 to-blue-500",
      pdfLink: "/aniket/certificates/certificate-6.pdf",
      credentialLink: "https://verify.onwingspan.com",
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
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-4">
              <a
                href={achievement.pdfLink}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold py-1.5 px-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                title="View or download PDF"
              >
                <AiOutlineFilePdf className="text-sm" />
                View / Download
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
