// src/components/Home.jsx
import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#764ba2] text-white flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.1),_transparent)] opacity-30 animate-pulse"></div>
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-20 right-20 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Content Container with Glassmorphism Effect */}
      <div className="relative z-10 text-center px-6 py-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg max-w-3xl border border-white/20">
        <h1 className="text-6xl font-extrabold text-white drop-shadow-xl mb-6 animate__animated animate__fadeInUp animate__delay-1s">
          Welcome to <span className="text-[#FFD700]">MAAA</span>
        </h1>
        <p className="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-2s">
          A revolutionary learning app designed to make knowledge accessible to all, focusing on interactive learning for diverse needs.
        </p>

        <a
          href="#features"
          className="relative px-8 py-3 text-xl font-semibold text-white bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_rgba(255,215,0,0.8)] animate__animated animate__fadeInUp animate__delay-3s"
        >
          Explore Features
        </a>
      </div>
    </section>
  );
}

export default Home;
