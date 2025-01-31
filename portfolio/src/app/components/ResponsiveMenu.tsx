import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { NavbarMenu } from "../constants/NavbarMenu";

const ResponsiveMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: -100 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-serif bg-white text-dark uppercase py-5 m-5 rounded">
            <ul className="flex flex-col gap-5 items-center w-full ">
              {NavbarMenu.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="hover:bg-dark hover:text-white cursor-pointer rounded py-2 px-4"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ResponsiveMenu;
