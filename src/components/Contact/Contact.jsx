import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineSend } from "react-icons/ai";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
    } else {
      emailjs
        .sendForm(
          "service_niilndo",
          "template_6z5idye",
          form.current,
          "VOBt6Akm1LhI5CZG-"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section className="relative bg-gray-900 text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left side */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <h1 className="text-4xl font-bold text-yellow-500">Contact Me</h1>
        </div>

        {/* Right side */}
        <div className="flex-1">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-6 items-center"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              onChange={handleChange}
              className="w-96 max-w-full px-4 py-2 rounded-lg border-2 border-purple-800 bg-purple-900 text-white text-lg outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Email"
              onChange={handleChange}
              className="w-96 max-w-full px-4 py-2 rounded-lg border-2 border-purple-800 bg-purple-900 text-white text-lg outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              onChange={handleChange}
              className="w-96 max-w-full h-32 px-4 py-2 rounded-lg border-2 border-purple-800 bg-purple-900 text-white text-lg outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            />

            {notDone && (
              <span className="text-red-500 text-lg">
                Please, fill all the input fields
              </span>
            )}

            <button
              type="submit"
              disabled={done}
              className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors duration-300 disabled:opacity-50"
            >
              <AiOutlineSend className="mr-2" />
              Send
            </button>

            {done && (
              <span className="text-green-500 text-lg text-center">
                Thanks for contacting me! I have received your message. If you
                are testing, it works perfectly fine. For serious queries, I
                will reply soon. You can also reach me on LinkedIn.
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
