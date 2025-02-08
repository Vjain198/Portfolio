"use client";
import React, { useState } from "react";
import { Button, message } from "antd";

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSendMessage = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success("Message Send Successfully");
    }, 2000);
  };

  return (
    <div className=" px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-dark mb-4">
        Drop Your Message here!
      </h2>
      <form>
        <div className="mb-4">
          <label className="block text-dark mb-1" htmlFor="name">
            Your Name
          </label>
          <input
            className="w-full px-4 py-2 text-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
            placeholder="Enter your name"
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-dark mb-1" htmlFor="email">
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
          <label className="block text-dark mb-1" htmlFor="message">
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
        <Button
          className="w-full bg-black text-white py-2 px-4 rounded-lg  transition duration-300"
          type="primary"
          onClick={handleSendMessage}
          loading={loading}
          size="middle"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
