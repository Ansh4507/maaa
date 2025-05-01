// src/components/Contact.jsx
import React from "react";

function Contact() {
  return (
    <section id="contact" className="p-12 bg-gray-50 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-blue-600 mb-8 animate__animated animate__fadeInUp animate__delay-1s">
        Contact Us
      </h2>

      {/* Contact Form in a Card */}
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 text-lg mb-2">Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 text-lg mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-gray-700 text-lg mb-2">Message</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
