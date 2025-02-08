"use client";
import React from "react";

const ContactForm = () => {
  function handleSumbit(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    console.log("Form submitted", name, email, message);
  }
  return (
    <div className="mx-auto">
      <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Contact Us
        </h2>
        <form action={handleSumbit}>
          <div className="mb-4">
            <label className="block text-gray-800 mb-1" htmlFor="name">
              Your Name
            </label>
            <input
              className="w-full px-4 py-2 text-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
              placeholder="Enter your name"
              type="text"
              name="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 mb-1" htmlFor="email">
              Your Email
            </label>
            <input
              className="w-full px-4 py-2 text-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
              placeholder="Enter your email"
              name="email"
              id="email"
              type="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 mb-1" htmlFor="message">
              Your Message
            </label>
            <textarea
              className="w-full px-4 py-2 text-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
              rows={4}
              placeholder="Enter your message"
              name="message"
              id="message"
              defaultValue={""}
            />
          </div>
          <button
            className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
