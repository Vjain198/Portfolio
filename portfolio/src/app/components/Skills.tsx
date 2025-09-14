"use client";

import React from "react";

const skillsData = {
  Frontend: [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Redux Toolkit",
    "React Query",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ],
  Backend: ["Node.js", "Express.js"],
  "Tools & Technologies": [
    "Git",
    "Docker",
    "VS Code",
    "Postman",
    "Strapi CMS",
    "Cursor AI",
  ],
  "Other Skills": [
    "RESTful APIs",
    "Team Collaboration",
    "Problem-Solving",
    "Code Review",
    "Clean Code",
    "Performance Optimization",
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold uppercase mb-12 text-center">
          My Skill Set
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, items]) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md hover:scale-105 transform transition cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
