// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My App</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/info" className="hover:text-gray-300">Info</Link></li>
          <li><Link to="/features" className="hover:text-gray-300">Features</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          <li><Link to="/download" className="hover:text-gray-300">Download</Link></li>
        </ul>
      </div>
    </nav>
  );
}


export default Navbar;
