// src/components/Home.jsx
import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] text-white relative overflow-hidden"
    >
      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.04),_transparent)] animate-pulse opacity-20"></div>
      <div className="absolute -top-32 -left-24 w-[500px] h-[500px] bg-pink-500 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-24 right-20 w-[400px] h-[400px] bg-blue-400 rounded-full filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-16 left-1/4 w-[350px] h-[350px] bg-violet-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Glass Card Content */}
      <div className="relative z-10 text-center px-10 py-14 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl max-w-4xl mx-6 border border-white/20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-6 animate__animated animate__fadeInUp animate__delay-1s">
          Welcome to <span className="text-yellow-300">MAAA</span>
        </h1>
        <p className="text-lg md:text-xl text-white text-opacity-90 mb-10 max-w-2xl mx-auto animate__animated animate__fadeInUp animate__delay-2s leading-relaxed tracking-wide">
          Empowering everyone through inclusive, interactive, and accessible learning. Your journey to knowledge starts here—with elegance and ease.
        </p>

        <a
          href="#features"
          className="relative inline-block px-10 py-4 text-lg md:text-xl font-semibold text-white bg-gradient-to-r from-[#74ebd5] to-[#9face6] rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(173,216,230,0.6)] hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp animate__delay-3s"
        >
          Explore Features
        </a>
      </div>
    </section>
  );
}

export default Home;
