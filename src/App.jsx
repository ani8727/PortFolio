import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Home from './pages/Home';
import Skill from './pages/Skillset';
import Project from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/PreLoader";
import ScrollToTop from "./components/ScrollToTop";

// Tailwind CSS
import "./index.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* Preloader */}
      <Preloader load={load} />

      {/* Main App wrapper */}
      <div className={`App ${load ? "overflow-hidden" : "overflow-auto"} transition-all duration-300`}>
        <Navbar />
        <ScrollToTop />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skillset" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
