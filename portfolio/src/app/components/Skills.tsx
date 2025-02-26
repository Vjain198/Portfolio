"use client";

import React from "react";
import { skills } from "../constants/Skills";
import { Separator } from "./Separator";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const Skills = () => {
  return (
    <div id="skills" className="w-full">
      <div className="card w-full my-5 bg-[#090909] flex flex-wrap text-[#efecec] rounded-xl">
        <h2 className="text-2xl pb-3 md:pb-5  md:text-5xl  uppercase">
          My Skill Set
        </h2>

        <div className=" w-full  border border-white p-5 rounded-md">
          <Marquee>
            <div className="flex flex-nowrap md:gap-20  gap-9">
              {skills.map((skill) => (
                <Image
                  key={skill.icon}
                  src={skill.icon}
                  alt={skill.name}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
      <Separator className="my-5 md:my-5 bg-white" />
    </div>
  );
};

export default Skills;
