"use client";

import React from "react";
import Link from "next/link";
import { Separator } from "./Separator";
import { Github, Linkedin, Instagram } from "lucide-react";

const AboutUs = () => {
  return (
    <>
      <section id="about" className="py-10">
        <div>
          <h2 className="text-3xl md:text-5xl mt-3 uppercase font-bold">
            About Myself 👇
          </h2>

          <p className="text-md md:text-xl text-start my-6 leading-relaxed text-gray-700 dark:text-gray-300">
            I’m a <b>Frontend Engineer</b> with <b>4+ years</b> of experience
            building scalable, high-performance web applications. I specialize
            in <b>React.js, Next.js, and TypeScript</b> with expertise in{" "}
            <b>state management (Redux, Context API, React Query)</b>,{" "}
            <b>API integration</b>, and <b>responsive UI development</b>.
            Skilled in <b>Tailwind CSS</b>, accessibility, and performance
            optimization (SSR, lazy loading, code splitting).
            <br className="hidden md:block" />
            <span className="hidden md:inline-block">
              I enjoy writing clean, maintainable code and conducting thorough
              code reviews to deliver high-quality user experiences.
            </span>{" "}
            <Link
              href="https://www.linkedin.com/in/dev-vikash/"
              className="text-yellow-500 font-medium hover:underline"
              target="_blank"
            >
              read more...
            </Link>
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 pt-5">
            <Link
              href="https://www.linkedin.com/in/vjain198/"
              target="_blank"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-yellow-500 hover:text-white transition"
            >
              <Linkedin size={22} />
            </Link>
            <Link
              href="https://www.instagram.com/dev.vikas_198/"
              target="_blank"
              aria-label="Instagram"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-yellow-500 hover:text-white transition"
            >
              <Instagram size={22} />
            </Link>
            <Link
              href="https://github.com/Vjain198"
              target="_blank"
              aria-label="GitHub"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-yellow-500 hover:text-white transition"
            >
              <Github size={22} />
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-10 md:my-1" />
    </>
  );
};

export default AboutUs;
