"use client";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/app/firebaseConfig";
import BasicModal from "./Modal";
import ThanksCard from "./ThanksCard";
import { message } from "antd";
import emailjs from "@emailjs/browser"; // ✅ install emailjs: npm install @emailjs/browser

// Firestore save function
async function addDataToFireStore(
  name: string,
  mobileNumber: string,
  email: string,
  message: string
) {
  try {
    const docRef = await addDoc(collection(db, "Messages"), {
      name,
      mobileNumber,
      email,
      message,
      createdAt: new Date(),
    });
    console.log("Data added successfully", docRef.id);
    return true;
  } catch (error) {
    console.log("Failed to add data", error);
    return false;
  }
}

const ContactForm = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !messages || !mobileNumber) {
      messageApi.error("⚠️ All fields are required!");
      return;
    }

    setLoading(true);

    // Save in Firestore
    const saved = await addDataToFireStore(name, mobileNumber, email, messages);

    // Send via EmailJS
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name,
          email,
          mobileNumber,
          message: messages,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      console.log("Email sent successfully ✅");
    } catch (err) {
      console.error("Email sending failed ❌", err);
    }

    setLoading(false);

    if (saved) {
      setOpen(true);
      setName("");
      setMobileNumber("");
      setEmail("");
      setMessage("");
    } else {
      messageApi.error("Something went wrong. Try again.");
    }
  };

  return (
    <>
      {open ? (
        <BasicModal open={open} setOpen={setOpen}>
          <ThanksCard setOpen={setOpen} />
        </BasicModal>
      ) : (
        <>
          {contextHolder}
          <div id="contact" className="mx-auto py-12">
            <div className="max-w-lg mx-auto px-8 py-8 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 transition hover:shadow-yellow-500/30">
              <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
                Get in Touch ✉️
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-yellow-500 outline-none"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-1">
                    Mobile Number
                  </label>
                  <input
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-yellow-500 outline-none"
                    placeholder="Enter your number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    maxLength={10}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-yellow-500 outline-none"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:ring-2 focus:ring-yellow-500 outline-none"
                    rows={4}
                    placeholder="Enter your message"
                    value={messages}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold shadow-lg hover:opacity-90 transition disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ContactForm;
