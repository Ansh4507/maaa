// src/components/Features.jsx
import React from "react";

function Features() {
  return (
    <section id="features" className="p-12 bg-gray-100 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-blue-600 mb-8 animate__animated animate__fadeInUp animate__delay-1s">
        Key Features
      </h2>

      {/* Features List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">Feature 1</h3>
          <p className="text-lg text-gray-700">
            Step by Step Lessons 
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">Feature 2</h3>
          <p className="text-lg text-gray-700">
            Gamified Learning Experience
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">Feature 3</h3>
          <p className="text-lg text-gray-700">
            Progress Tracking for Motivation and something fishy
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
