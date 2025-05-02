import React from "react";

function Features() {
  return (
    <section
      id="features"
      className="relative z-10 py-20 px-6 md:px-12 bg-gradient-to-tr from-[#2c3e50] via-[#4ca1af] to-[#2c3e50] text-white overflow-hidden"
    >
      {/* Heading */}
      <h2 className="text-5xl font-extrabold text-center mb-12 animate__animated animate__fadeInDown text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
        ✨ Key Features
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white/10 border border-white/20 backdrop-blur-2xl rounded-3xl p-8 shadow-xl hover:scale-[1.03] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:border-white/40">
          <h3 className="text-2xl font-semibold text-yellow-300 mb-4">📚 Step-by-Step Lessons</h3>
          <p className="text-lg text-white/90">
            Learn with structured modules designed for clarity, consistency, and confidence.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 border border-white/20 backdrop-blur-2xl rounded-3xl p-8 shadow-xl hover:scale-[1.03] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:border-white/40">
          <h3 className="text-2xl font-semibold text-pink-300 mb-4">🎮 Gamified Experience</h3>
          <p className="text-lg text-white/90">
            Level up with interactive challenges, achievements, and real-time rewards.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/10 border border-white/20 backdrop-blur-2xl rounded-3xl p-8 shadow-xl hover:scale-[1.03] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:border-white/40">
          <h3 className="text-2xl font-semibold text-purple-300 mb-4">📈 Motivation & Progress</h3>
          <p className="text-lg text-white/90">
            Track your growth with weekly goals, analytics, and shareable progress visuals.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
