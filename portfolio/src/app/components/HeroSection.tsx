"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Separator } from "./Separator";

const HeroSection = () => {
  return (
    <>
      <div
        id="home"
        className="text-white py-10 md:py-12 flex flex-col gap-10 md:flex-row md:justify-around md:items-center"
      >
        <div className="flex flex-col items-center gap-[1rem] md:w-[800px] md:gap-[2rem] text-center">
          <h1 className="text-2xl font-semibold md:text-4xl md:font-bold font-serif">
            Namaste 🙏
          </h1>
          <TypeAnimation
            sequence={[
              500,
              "I am Vikash Jain",
              500,
              "A Frontend Developer",
              500,
              "Experience in ReactJS",
              500,
              "Experience in NextJS",
              500,
              "Experience in TypeScript",
              500,
              "Experience in JavaScript",
              500,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-xl text-center font-semibold md:text-4xl font-serif"
          />
        </div>

        <Image
          src="/profile.webp"
          alt="Profile"
          width={500}
          height={500}
          objectFit="contain"
          className="border rounded-xl border-white shadow-white shadow-lg"
        />
      </div>
      <Separator className="" />
    </>
  );
};

export default HeroSection;
