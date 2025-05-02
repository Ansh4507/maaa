import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 py-20 px-6 md:px-12 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute -top-20 left-10 w-72 h-72 bg-indigo-400 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-400 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Contact Section Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-cyan-300 to-blue-400 mb-10 animate__animated animate__fadeInUp">
          ✉️ Contact Us
        </h2>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl animate__animated animate__fadeInUp animate__delay-1s">
          <form className="space-y-6 text-left">
            {/* Name Input */}
            <div>
              <label className="block text-white text-lg mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-white text-lg mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-white text-lg mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Enter your message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white text-lg font-semibold px-6 py-3 rounded-full shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,198,255,0.4)]"
            >
              🚀 Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
