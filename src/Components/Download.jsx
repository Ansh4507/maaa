// src/components/Download.jsx
import React from "react";

function Download() {
  return (
    <section id="download" className="p-12 bg-blue-100 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-blue-600 mb-6 animate__animated animate__fadeInUp animate__delay-1s">
        Download the App
      </h2>
      
      {/* Description */}
      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto text-opacity-80 animate__animated animate__fadeInUp animate__delay-2s">
        Get started today and experience the future of interactive learning. Download the app now for instant access to all features!
      </p>
      
      {/* Download Button */}
      <a
        href="https://drive.google.com/file/d/1OHU5RMH-W0Ga5x1TeVUMrm59PgnSGR1S/view?usp=sharing"
        download
        className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate__animated animate__fadeInUp animate__delay-3s"
      >
        Download Now
      </a>
    </section>
  );
}

export default Download;
