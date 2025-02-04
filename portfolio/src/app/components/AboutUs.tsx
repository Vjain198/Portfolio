"use client";

import React from "react";
import Button from "../molecules/Button";
import { Github, Instagram, Linkdin } from "../constants/Icons";
import Link from "next/link";
import { saveAs } from "file-saver";
import { Separator } from "./Separator";
import Image from "next/image";

const downloadResume = () => {
  saveAs(
    "https://drive.google.com/file/d/1Ap7WbzudFJ3mt2Uk5fckUGcnDccWFq8X/view?usp=sharing",
    "Vikas_Jain_Software_Developer.pdf"
  );
};

const AboutUs = () => {
  return (
    <>
      <div className="gap-5 flex my-3 md:my-0 flex-col md:flex-row justify-center md:justify-between md:items-center md:py-4 md:gap-10">
        <div className="my-3 flex justify-center md:w-[700px]">
          <Image
            src="/myself.webp"
            alt="profile"
            width={500}
            height={500}
            objectFit="contain"
            className="rounded-full border border-white shadow-white shadow-lg"
          />
        </div>
        <div className="md:w-[700px]">
          <h2 className="text-3xl md:text-5xl mt-3  uppercase md:min-w-[200px]">
            About Myself 👇
          </h2>
          <Separator className="my-2 md:my-5" />
          <p className="text-md md:text-xl text-start">
            Results Oriented Software Developer with over 4 years of extensive
            experience in designing and implementing user-friendly web
            interfaces. Proficient in <b>JavaScript</b> and skilled in
            leveraging front-end libraries such as <b>React.js</b> to create
            dynamic applications.Experienced in utilizing front-end frameworks,
            including &nbsp;
            <b>Next.js</b>, to develop responsive and high-performance web
            solutions. Strong foundation in data structures and algorithms,
            enabling effective problem-solving and optimization of application
            performance. Committed to following clean code practices and
            conducting thorough
            <b>code reviews</b> to ensure high-quality deliverables. Proficient
            in cross-development testing to guarantee seamless functionality
            across different platforms and devices.
          </p>
          <div className="my-2 md:my-5 md:w-full md:p-2 md:flex md:justify-between md:items-center cursor-pointer">
            <Button downloadResume={downloadResume} />
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
      <Separator className="my-4 md:my-1" />
    </>
  );
};

export default AboutUs;
