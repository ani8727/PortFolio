import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

import Particle from "../components/Particle";
import pdf from "../assets/sajib.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink = `https://raw.githubusercontent.com/19sajib/portfolio/main/src/assets/sajib.pdf`;

const Resume = () => {
  // Initialize width state safely
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    // Update width on window resize
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative bg-gray-900 text-white min-h-screen py-20">
      {/* Particle Background */}
      <Particle />

      {/* Download Button Top */}
      <div className="flex justify-center mb-8 relative z-10">
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 max-w-xs w-full justify-center"
        >
          <AiOutlineDownload className="mr-2" />
          Download Resume
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="flex justify-center mb-8">
        <Document file={resumeLink}>
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>

      {/* Download Button Bottom */}
      <div className="flex justify-center relative z-10">
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 max-w-xs w-full justify-center"
        >
          <AiOutlineDownload className="mr-2" />
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
