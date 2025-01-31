"use client";

import React from "react";
import { NavbarMenu } from "../constants/NavbarMenu";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <nav className="flex justify-between items-center md:px-20 md:py-4">
        <h2 className="text-2xl text-white ">Vikash Jain</h2>
        <div className="hidden md:block">
          <ul className=" flex  md:items-center md:gap-6 ">
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
            <MdMenu className="md:hidden cursor-pointer text-3xl" />
          </div>
        </div>
      </nav>
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
