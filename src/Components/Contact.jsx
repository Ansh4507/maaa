// src/components/Contact.jsx
import React from "react";

function Contact() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full border border-gray-300 p-2" />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full border border-gray-300 p-2" />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full border border-gray-300 p-2"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Submit</button>
      </form>
    </section>
  );
}

export default Contact;