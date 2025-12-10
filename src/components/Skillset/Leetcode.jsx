import React from "react";
import ReactMarkdown from "react-markdown";

const Leetcode = () => {
  return (
    <div className="flex flex-col items-center pb-5">
      <h1 className="text-3xl font-semibold pb-6">
        <span className="text-yellow-400">LeetCode</span> Stats
      </h1>

      <div className="w-full flex justify-center">
        <ReactMarkdown>
          {`![LeetCode Stats](https://leetcard.jacoblin.cool/19sajib?theme=dark&font=Syne%20Mono&ext=heatmap)`}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Leetcode;
