import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import MobileNav from "./Mobileview";
import Headerlink from "./Headerlink";
import { Link } from "react-router-dom";
import GithubSvg from "../../../utils/svg/GithubSvg";
import resume from "../../../utils/Mejia_John_Mikko_I_Resume-1.pdf";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <React.Fragment>
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 font-custom"
        animate={{
          width: isExpanded ? "100%" : "90%",
          padding: isExpanded ? "0" : "4px",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <nav
          className={`bg-primary ${
            isExpanded ? "py-0" : "py-2 rounded-xl shadow-lg"
          } px-4 md:px-12 lg:px-24 xl:px-32 text-white transition-all duration-300`}
        >
          <div
            className={`flex items-center justify-between ${
              isExpanded ? "max-w-full px-6" : "max-w-5xl px-6"
            } mx-auto p-4 rounded-xl transition-all duration-300`}
          >
            {/* Logo Section */}
            <div className="flex items-center">
              <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                JanMicko
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 text-lg font-semibold">
              <Headerlink path="/" label="About" />
              <Headerlink path="/projects" label="Projects" />
              <Headerlink path="/skills" label="Skills" />
            </div>

            {/* GitHub & Resume Links (Desktop Only) */}
            <div className="hidden md:flex items-center space-x-6 font-semibold">
              <Link
                to={import.meta.env.VITE_APP_GIT}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition"
              >
                <GithubSvg />
                <span>GitHub</span>
              </Link>
              <motion.a
                href={resume}
                download="Mejia_John_Mikko_Resume.pdf"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium 
                transition-all duration-300 hover:bg-purple-700 
                shadow-lg hover:shadow-purple-500/50 active:scale-95"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Resume</span>
              </motion.a>

            </div>

            {/* Mobile Menu Icon (Now Properly Aligned) */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
                {menuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </motion.div>
    </React.Fragment>
  );
}
