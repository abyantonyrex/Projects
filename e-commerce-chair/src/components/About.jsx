// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Container */}
      <div className="mx-auto max-w-4xl px-4 py-10">
        {/* Brand */}
        <header className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm">
          <img
            src="/grk-logo.png"
            alt="G.R.K. Enterprises logo"
            className="h-16 w-16 rounded-lg object-contain"
            loading="lazy"
          />
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-red-600">
              G.R.K. ENTERPRISES
            </h1>
            <p className="text-sm text-gray-600">Chennai, Tamil Nadu</p>
          </div>
        </header>

        {/* Info Cards */}
        <section className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Contact & Address */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Contact</h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                <span className="block text-sm text-gray-500">Address</span>
                <p className="font-medium">
                  NO.47, Gandhinagar, 4th Street, Sathangadu, Chennai – 600019
                </p>
                <a
                  className="mt-2 inline-block text-sm font-medium text-blue-600 hover:underline"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    "NO.47, Gandhinagar, 4th Street, Sathangadu, Chennai - 600019"
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get directions →
                </a>
              </li>
              <li>
                <span className="block text-sm text-gray-500">Email</span>
                <a
                  className="font-medium text-blue-600 hover:underline"
                  href="mailto:grkenterprises24@gmail.com"
                >
                  grkenterprises24@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-sm text-gray-500">Phone</span>
                <div className="space-x-4">
                  <a className="font-medium text-blue-600 hover:underline" href="tel:+918681039999">
                    86810 39999
                  </a>
                  <a className="font-medium text-blue-600 hover:underline" href="tel:+919841688229">
                    98416 88229
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Registration IDs */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Registration</h2>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm text-gray-500">GSTIN</dt>
                <dd className="font-medium text-gray-800">33BQUPA6142A1Z9</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">MSME No</dt>
                <dd className="font-medium text-gray-800">UDYAM-TN-24-0051084</dd>
              </div>
            </dl>

            {/* Quick Actions */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:grkenterprises24@gmail.com"
                className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100"
              >
                Email Us
              </a>
              <a
                href="tel:+918681039999"
                className="rounded-xl border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700 hover:bg-green-100"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* About Text (optional—edit as needed) */}
        <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-lg font-semibold text-gray-900">About Us</h2>
          <p className="text-gray-700">
            G.R.K. Enterprises is committed to reliable service and customer satisfaction.
            Reach out to us for inquiries, quotes, or partnership opportunities.
          </p>
        </section>
      </div>
    </main>
  );
};

export default About;
