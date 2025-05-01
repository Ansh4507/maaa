// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Info from "./components/Info";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Download from "./components/Download";

function App() {
  return (
    <div className="font-sans">
      <Navbar />

      <div className="container mx-auto px-4">
        <Home />
        <Info />
        <Features />
        <Contact />
        <Download />
      </div>
    </div>
  );
}

export default App;
