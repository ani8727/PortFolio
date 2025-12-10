import React from "react";
import Particle from "../components/Particle";
import ContactForm from "../components/Contact/Contact";
import Social from "../components/Contact/Social";

const Contact = () => {
  return (
    <section className="relative bg-gray-900 text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Particle Background */}
      <Particle />

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <ContactForm />
        <Social />
      </div>
    </section>
  );
};

export default Contact;
