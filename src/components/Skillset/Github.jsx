import React from "react";
import { GitHubCalendar } from "react-github-calendar";

const Github = () => {
  return (
    <div className="flex flex-col items-center pb-8">
      <h1 className="text-3xl font-bold pb-6 bg-linear-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        Days I <span className="text-yellow-400">Code</span>
      </h1>

      <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 shadow-2xl backdrop-blur">
        <GitHubCalendar
          username="ani8727"
          blockSize={15}
          blockMargin={5}
          color="#6102ce"
          fontSize={16}
        />
      </div>
    </div>
  );
};

export default Github;
