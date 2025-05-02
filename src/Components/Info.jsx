import React from "react";

function Info() {
  return (
    <section
      id="info"
      className="relative z-10 py-20 px-6 md:px-12 bg-gradient-to-br from-[#1c1c38] via-[#314755] to-[#26a0da] text-white overflow-hidden"
    >
      {/* Floating Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Content */}
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl relative z-10 text-center">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 mb-6 animate__animated animate__fadeInDown">
          📖 About the App
        </h2>
        <p className="text-lg sm:text-xl text-white/90 leading-relaxed animate__animated animate__fadeInUp">
          Unlock communication through our structured and interactive Sign Language Learning App —
          designed for all skill levels! Start with the basics and progress to conversational fluency
          through culturally enriched lessons that fit your schedule, pace, and passion.
        </p>
      </div>
    </section>
  );
}

export default Info;
