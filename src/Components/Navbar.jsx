// src/components/Navbar.jsx
import React from "react";

function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#0F172A]/50 via-[#3B0764]/40 to-[#00FFFF]/50 backdrop-blur-xl shadow-lg border-b border-white/10 p-4 z-50 transition-all duration-500">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide cursor-pointer text-[#00FFFF] drop-shadow-[0_0_12px_#00FFFF]">
          MAAA
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          {["home", "info", "features", "contact", "download"].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className="relative text-lg font-medium text-white transition duration-300 hover:text-[#FFD700] 
                after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#FFD700] after:left-1/2 after:bottom-[-4px] 
                after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:drop-shadow-[0_0_12px_#FFD700]"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
