import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { NavbarMenu } from "../constants/NavbarMenu";
import { Link } from "react-scroll";
const ResponsiveMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) => {
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
          <nav className="text-xl font-serif bg-white text-dark uppercase py-5 m-5 rounded">
            <ul className="flex flex-col gap-5 items-center w-full ">
              {NavbarMenu.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    smooth={true}
                    duration={800}
                    className="hover:bg-dark hover:text-dark cursor-pointer rounded py-2 px-4"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default ResponsiveMenu;
