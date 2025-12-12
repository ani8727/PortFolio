import React from "react";
import Particle from "../components/Particle";
import ContactForm from "../components/Contact/Contact";
import Social from "../components/Contact/Social";

const Contact = () => {
  return (
    <section className="relative bg-gray-900 text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Particle Background */}
      <Particle />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-linear-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-3">
            <br />
            Get in Touch
          </h1>
          <p className="text-gray-300 text-lg">I'd love to hear from you. Let's connect!</p>
        </div>

        {/* Contact Layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left - Instructions */}
          <div className="md:col-span-1">
            <div className="bg-linear-to-br from-purple-900/50 to-indigo-900/50 border border-purple-500/30 rounded-xl p-6 backdrop-blur h-full">
              <h2 className="text-2xl font-bold mb-6 text-yellow-400">How to Reach Me</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-yellow-300 mb-2">📧 Via Email Form</h3>
                  <p className="text-gray-300 text-sm">Fill out the form on the right with your name, email, and message. I'll receive your details and respond as soon as possible.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-yellow-300 mb-2">💼 Professional Networks</h3>
                  <p className="text-gray-300 text-sm">Connect with me on LinkedIn, GitHub, or other social platforms. Links are available below.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-yellow-300 mb-2">⚡ What Happens Next</h3>
                  <p className="text-gray-300 text-sm">Once you submit the form, your message will be sent to my email. I review all inquiries and typically respond within 24-48 hours.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* Social Links Section */}
        <div className="bg-linear-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/30 rounded-xl p-8 backdrop-blur">
          <h2 className="text-3xl font-bold text-center mb-2 text-yellow-400">Connect With Me</h2>
          <p className="text-center text-gray-300 mb-8 text-base">Find me on social platforms and let's connect!</p>
          <Social />
        </div>
      </div>
    </section>
  );
};

export default Contact;
