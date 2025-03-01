"use client";

import React from "react";
import { skills } from "../constants/Skills";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const Skills = () => {
  return (
    <div id="skills">
      <div className="card w-full m-5 bg-[#090909] flex flex-wrap text-[#efecec]">
        <h2 className="text-2xl pb-3 md:pb-5  md:text-5xl  uppercase">
          My Skill Set
        </h2>

        <Marquee autoFill>
          <div className="flex justify-between md:cursor-pointer gap-9 p-5">
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
  );
};

export default Skills;
