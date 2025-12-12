import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div className="inline-flex items-center gap-4 bg-indigo-50 border border-indigo-100 text-indigo-900 px-4 py-2 rounded-lg shadow-sm">
      <span className="inline-block bg-indigo-700 text-white text-sm font-semibold px-3 py-1 rounded">Role</span>
      <div className="text-base sm:text-lg font-medium text-indigo-800">
        <Typewriter
          options={{
            strings: [
              "Java Backend Developer",
              "Spring Boot & REST API Engineer",
              "Full Stack Developer (React & Java)",
              "Distributed Systems & Microservices Learner",
              "Data Structures & Algorithms Practitioner",
              "Cloud & DevOps Enthusiast (AWS, Docker, CI/CD)"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
    </div>
  );
};

export default Type;
