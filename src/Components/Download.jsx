
// src/components/Download.jsx
import React from "react";

function Download() {
  return (
    <section className="p-8 bg-blue-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Download the App</h2>
      <p className="mb-4">Click the button below to download the app.</p>
      <a
        href="/path-to-your-app.apk"
        download
        className="bg-blue-600 text-white px-4 py-2 inline-block"
      >
        Download Now
      </a>
    </section>
  );
}

export default Download;