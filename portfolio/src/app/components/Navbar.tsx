"use client";

import React from "react";
import { NavbarMenu } from "../constants/NavbarMenu";
import { MdClose, MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <nav className="flex justify-between items-center md:px-20 md:py-4 w-full">
        <h2 className=" font-semibold font-serif text-xl md:text-2xl text-white uppercase">
          Vikash Jain
        </h2>
        <nav>
          <ul className=" hidden font-serif md:flex md:items-center md:gap-6 ">
            {NavbarMenu.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  smooth={true}
                  duration={800}
                  className="inline-block text-xl  px-4 py-2  text-white hover:bg-white hover:text-dark font-semibold cursor-pointer rounded"
                >
                  {item.name}
                </Link>
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
        </nav>
      </nav>
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
