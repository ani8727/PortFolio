import React from "react";
import ReactMarkdown from "react-markdown";

const Leetcode = () => {
  return (
    <div className="flex flex-col items-center pb-8">
      <h1 className="text-3xl font-bold pb-6 bg-linear-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        <span className="text-yellow-400">LeetCode</span> Stats
      </h1>

      <div className="w-full flex justify-center">
        <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 shadow-2xl backdrop-blur">
          <ReactMarkdown>
            {`![LeetCode Stats](https://leetcard.jacoblin.cool/Aniket_01_gupta?theme=dark&font=Syne%20Mono&ext=heatmap)`}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Leetcode;
