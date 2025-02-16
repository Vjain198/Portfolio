"use client";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/app/firebaseConfig";
import BasicModal from "./Modal";
import ThanksCard from "./ThanksCard";

// creating function to store data in firestore
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
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message || !mobileNumber) {
      alert("Please fill all the fields");
      return;
    }
    const data = await addDataToFireStore(name, mobileNumber, email, message);
    if (data) {
      setOpen(true);
      setName("");
      setMobileNumber("");
      setEmail("");
      setMessage("");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <>
      {open ? (
        <BasicModal open={open} setOpen={setOpen}>
          <ThanksCard setOpen={setOpen} />
        </BasicModal>
      ) : (
        <div className="mx-auto">
          <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <form onSubmit={handleSumbit}>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="w-full px-4 py-2 text-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="name">
                  Mobile Number
                </label>
                <input
                  className="w-full px-4 py-2 text-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
                  placeholder="Enter your name"
                  type="number"
                  name="number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                className="w-full bg-dark text-white py-2 px-4 rounded-lg hover:bg-white hover:text-dark transition duration-300"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
