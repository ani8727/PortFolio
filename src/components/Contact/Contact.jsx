import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineSend } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);

  const validateForm = () => {
    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const title = form.current.title.value.trim();

    if (!name || !email || !title) {
      setNotDone(true);
      setDone(false);
      return false;
    }

    setNotDone(false);
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Get values from form inputs directly
    const name = form.current.from_name?.value?.trim();
    const email = form.current.reply_to?.value?.trim();
    const message = form.current.message?.value?.trim();
    const title = form.current.title?.value?.trim(); // Get the subject field value

    console.log("Name:", name, "Email:", email, "Message:", message, "Title:", title);

    // Debugging log to inspect the values of all fields
    console.log("Field Values:", {
      name: form.current.name?.value?.trim(),
      email: form.current.email?.value?.trim(),
      title: form.current.title?.value?.trim(),
      message: form.current.message?.value?.trim(),
    });

    setNotDone(false);
    
    console.log("Form Data:", {
      from_name: name,
      reply_to: email,
      message: message,
      title: title, // Include the subject field in the form data
    });

    emailjs
      .sendForm(
        "service_br9v1qe",
        "template_y3khocr",
        form.current,
        "NXoVXoETzx_Thvzn1"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setNotDone(true);
          setDone(false);
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 shadow-2xl backdrop-blur">
      <h2 className="text-xl font-bold mb-4 text-yellow-400">Send Me a Message</h2>
      
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Name</label>
          <input
            type="text"
            name="name" // Updated field name
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-lg border-2 border-purple-700/30 bg-purple-900/20 text-white placeholder-gray-500 text-base outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
          <input
            type="email"
            name="email" // Updated field name
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 rounded-lg border-2 border-purple-700/30 bg-purple-900/20 text-white placeholder-gray-500 text-base outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
          />
        </div>

        {/* Subject Input - New Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Subject</label>
          <input
            type="text"
            name="title" // Added subject field
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-lg border-2 border-purple-700/30 bg-purple-900/20 text-white placeholder-gray-500 text-base outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300"
          />
        </div>

        {/* Message Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
          <textarea
            name="message" // Updated field name
            placeholder="Tell me about your project, inquiry, or anything else..."
            className="w-full h-36 px-4 py-3 rounded-lg border-2 border-purple-700/30 bg-purple-900/20 text-white placeholder-gray-500 text-base outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all duration-300 resize-none"
          ></textarea>
        </div>

        {/* Error Message */}
        {notDone && (
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
            <p className="text-red-300 text-sm font-semibold">
              ❌ Please fill in all fields before sending
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={done}
          className="w-full bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:from-gray-500 disabled:to-gray-600 px-6 py-3 rounded-lg text-white font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-indigo-500/50 transform hover:scale-105 disabled:hover:scale-100"
        >
          <AiOutlineSend className="text-lg" />
          {done ? "Message Sent!" : "Send Message"}
        </button>

        {/* Success Message */}
        {done && (
          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AiOutlineCheckCircle className="text-green-400 text-xl shrink mt-0.5" />
              <div>
                <p className="text-green-300 font-semibold mb-1">Message sent successfully! 🎉</p>
                <p className="text-green-300/80 text-sm">Thanks for reaching out! I've received your message and will get back to you as soon as possible. Typically within 24-48 hours.</p>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
