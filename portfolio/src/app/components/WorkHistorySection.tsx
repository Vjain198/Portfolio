import React from "react";
import ExperienceCard from "./ExperienceCard";

import { Separator } from "./Separator";
import Image from "next/image";

const WorkHistorySection = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-5 md:gap-3 md:pt-5">
        <h2 className="text-3xl mt-1 md:mt-0 md:text-5xl uppercase">
          My Experiences
        </h2>
        <Image
          src="./work.svg"
          alt="Work History"
          width={20}
          height={20}
          className="w-10 h-10 md:w-12 md:h-12"
        />
      </div>
      <div>
        <ExperienceCard />
      </div>
      <Separator />
    </div>
  );
};

export default WorkHistorySection;
