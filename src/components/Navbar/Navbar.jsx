import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/sLogo.png";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { CgFileDocument } from "react-icons/cg";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const location = useLocation();

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY >= 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Safely close mobile menu on route change
  useEffect(() => {
    const timer = setTimeout(() => setNavOpen(false), 0);
    return () => clearTimeout(timer);
  }, [location]);

  const navItems = [
    { path: "/", label: "Home", icon: <AiOutlineHome className="inline mb-1" /> },
    { path: "/skillset", label: "Skillset", icon: <GiSkills className="inline mb-1" /> },
    { path: "/project", label: "Projects", icon: <AiOutlineFundProjectionScreen className="inline mb-1" /> },
    { path: "/resume", label: "Resume", icon: <CgFileDocument className="inline mb-1" /> },
    { path: "/contact", label: "Contact Me", icon: <AiOutlineContacts className="inline mb-1" /> },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${sticky ? "bg-purple-900 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/">
              <img className="h-10 w-auto" src={logo} alt="logo" />
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-white focus:outline-none"
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>

          {/* Desktop & Mobile menu items */}
          <div className={`md:flex md:items-center md:space-x-6 ${navOpen ? "block" : "hidden"} w-full md:w-auto`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block md:inline-block text-white hover:text-yellow-400 px-3 py-2 rounded-md font-medium ${
                  location.pathname === item.path ? "text-yellow-400" : ""
                }`}
              >
                {item.icon} {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
