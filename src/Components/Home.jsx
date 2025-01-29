import React from "react";

function Home() {
  return (
    <section className="h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 opacity-50 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-extrabold mb-6 animate__animated animate__fadeInUp animate__delay-1s">
          Welcome to MAA
        </h1>
        <p className="text-lg mb-8 max-w-lg mx-auto text-opacity-80 animate__animated animate__fadeInUp animate__delay-2s">
          A revolutionary learning app to make knowledge accessible to all, with a focus on interactive learning.
        </p>

        <a
          href="#features"
          className="px-6 py-3 text-xl font-semibold bg-white text-blue-500 rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 animate__animated animate__fadeInUp animate__delay-3s"
        >
          Explore Features
        </a>
      </div>
    </section>
  );
}

export default Home;
