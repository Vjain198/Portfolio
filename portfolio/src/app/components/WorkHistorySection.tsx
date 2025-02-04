import React from "react";
import ExperienceCard from "./ExperienceCard";
import { MdWorkHistory } from "react-icons/md";
import { Separator } from "./Separator";

const WorkHistorySection = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between md:pt-5">
        <h2 className="text-3xl md:text-5xl  uppercase">My Experiences</h2>
        <MdWorkHistory className="w-8 h-8 md:w-20 md:h-20" />
      </div>
      <div>
        <ExperienceCard />
      </div>
      <Separator />
    </div>
  );
};

export default WorkHistorySection;
