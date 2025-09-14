"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="text-dark py-16 md:py-24 flex flex-col-reverse md:flex-row md:justify-around md:items-center gap-10">
      {/* Left Content */}
      <div className="flex flex-col items-center md:items-start gap-6 md:w-[600px] text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold font-serif">
          Namaste 🙏, I’m <span className="text-yellow-600">Vikash Jain</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">
          Frontend Engineer | React.js | Next.js | TypeScript
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl">
          A frontend engineer with 4+ years of experience in building scalable,
          performant, and user-friendly applications. Skilled in React.js,
          Next.js, TypeScript, Tailwind CSS, and API integrations.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-4">
          <Link
            href="#projects"
            className="px-5 py-2 rounded-lg bg-yellow-500 text-white font-medium shadow-md hover:bg-yellow-600 transition"
          >
            View Projects
          </Link>
          <Link
            href="https://drive.google.com/file/d/18hIC6zAEa5otrmfxYaon1M3ep-PF4PJ1/view?usp=drive_link"
            target="_blank"
            className="px-5 py-2 rounded-lg border border-yellow-500 text-yellow-600 font-medium hover:bg-yellow-500 hover:text-white transition"
          >
            View Resume
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <Image
          src="/profile.webp"
          alt="Profile"
          width={300}
          height={300}
          className="rounded-full w-56 h-56 md:w-80 md:h-80 object-cover border-4 border-yellow-500 shadow-lg"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
