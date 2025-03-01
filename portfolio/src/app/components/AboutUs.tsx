"use client";

import React from "react";
import Button from "../molecules/Button";
import { Github, Instagram, Linkdin } from "../constants/Icons";
import Link from "next/link";
import { saveAs } from "file-saver";
import { Separator } from "./Separator";

const AboutUs = () => {
  return (
    <>
      <div id="about" className="">
        <div>
          <h2 className="text-3xl md:text-5xl mt-3  uppercase md:min-w-[200px]">
            About Myself 👇
          </h2>
          <p className="text-md md:text-xl text-start my-4">
            Results-driven Software Developer with 3+ years of experience
            designing and implementing user-friendly web interfaces. Proficient
            in <b>JavaScript</b> and skilled in leveraging front-end libraries
            like <b>ReactJs</b> to build dynamic, responsive applications.
            Experienced in using frameworks such as <b>NextJs</b> to develop
            high-performance web solutions.
            <b className="hidden md:inline-block">
              Committed to clean code practices and conducting thorough code
              reviews to ensure high-quality deliverables &nbsp;
            </b>
            <Link
              href="https://www.linkedin.com/in/dev-vikash/"
              className="text-yellow-500"
            >
              read more...
            </Link>
          </p>
          <div className="my-2 md:my-5 md:w-full md:p-2 md:flex md:justify-between md:items-center md:cursor-pointer">
            <Button
              title="Download Resume"
              downloadResume={() => {
                saveAs(
                  "https://drive.google.com/file/d/1XE5xE-JSzyz5wGggIrJIThgu6zl8VT7T/view?usp=drive_link",
                  "Vikas_Jain_Frontend_Software_Developer.pdf"
                );
              }}
            />
            <div className="flex justify-between md:gap-10 px-3 pt-5 items-center">
              <Link
                href="https://www.linkedin.com/in/vjain198/"
                target="_blank"
              >
                <div>{Linkdin}</div>
              </Link>
              <Link
                href="https://www.instagram.com/dev.vikas_198/"
                target="_blank"
              >
                <div>{Instagram}</div>
              </Link>
              <Link href=" https://github.com/Vjain198" target="_blank">
                <div>{Github}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-10 md:my-1" />
    </>
  );
};

export default AboutUs;
