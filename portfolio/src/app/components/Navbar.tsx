"use client";

import React from "react";
import { NavbarMenu } from "../constants/NavbarMenu";
import { MdClose, MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <nav className="flex justify-between items-center md:px-20 md:py-4 w-full">
        <h2 className=" font-semibold font-serif text-xl md:text-2xl text-white uppercase">
          Vikash Jain
        </h2>
        <div>
          <ul className=" hidden font-serif md:flex md:items-center md:gap-6 ">
            {NavbarMenu.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="inline-block text-xl  px-4 py-2  text-white hover:bg-white hover:text-dark font-semibold cursor-pointer rounded"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <MdClose className="md:hidden cursor-pointer text-3xl" />
            ) : (
              <MdMenu className="md:hidden cursor-pointer text-3xl" />
            )}
          </div>
        </div>
      </nav>
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
