import React from "react";
import Image from "next/image";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio Website */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/project_1.webp"
                alt="Portfolio Website"
                width={400}
                height={300}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Designed and deployed a personal portfolio showcasing web
                development projects and skills using React.js, Next.js, and
                modern UI practices.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                  React
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                  Next.js
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                  Tailwind CSS
                </span>
              </div>
              <div className="mt-4">
                <a
                  href="https://portfolio-vikas-projects-52a26e6d.vercel.app/"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-dark px-4 py-2 rounded-md mr-2 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Vjain198"
                  className="inline-block bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-dark px-4 py-2 rounded-md transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* React E-commerce App */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src="/project_2.webp"
                alt="E-commerce App"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                React E-commerce App
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Built a full-featured e-commerce application with React.js,
                including product listing, shopping cart functionality, and
                state management using Redux.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                  React
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                  Redux
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                  Firebase
                </span>
              </div>
              <div className="mt-4">
                <a
                  href="https://github.com/Vjain198/React_Ecommerce"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-dark px-4 py-2 rounded-md transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
