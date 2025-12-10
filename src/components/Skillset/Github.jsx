import React from "react";
import { GitHubCalendar } from "react-github-calendar"; // FIXED IMPORT

const Github = () => {
  return (
    <div className="flex flex-col items-center pb-4">
      <h1 className="text-3xl font-semibold pb-5">
        Days I <span className="text-yellow-400">Code</span>
      </h1>

      <GitHubCalendar
        username="19sajib"
        blockSize={15}
        blockMargin={5}
        color="#6102ce"
        fontSize={16}
      />
    </div>
  );
};

export default Github;
