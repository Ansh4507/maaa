import React from "react";

function Download() {
  return (
    <section
      id="download"
      className="relative z-10 py-20 px-6 md:px-12 bg-gradient-to-bl from-[#0f2027] via-[#203a43] to-[#2c5364] text-white overflow-hidden"
    >
      {/* Animated Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-16 right-20 w-80 h-80 bg-cyan-300 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-teal-400 to-cyan-500 mb-6 animate__animated animate__fadeInUp">
          📲 Download the App
        </h2>

        <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed animate__animated animate__fadeInUp animate__delay-1s">
          Dive into the world of interactive and inclusive learning! Get instant access to all features with just one tap.
        </p>

        <a
          href="https://drive.google.com/file/d/1eq-37VIs8SePhAsIwAQlEQDBem94uejv/view?usp=sharing"
          download
          className="inline-block bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white text-lg font-semibold px-10 py-4 rounded-full shadow-xl transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,198,255,0.5)] animate__animated animate__fadeInUp animate__delay-2s"
        >
          🚀 Download Now
        </a>
      </div>
    </section>
  );
}

export default Download;
