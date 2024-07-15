'use client';
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

const navLinks = [
  {
    title: "About",
    path: "#about"
  },
  {
    title: "Projects",
    path: "#projects"
  },
  {
    title: "Experience",
    path: "#experience",
  },
  {
    title: "Contact",
    path: "#contact",
  }
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-50  ">
      <div className="flex flex-wrap items-center justify-between mx-auto p-[40px]">
        <Link href="/" className="text-5xl md:text-3xl lg:text-2xl text-white font-semibold">
          Portfolio
        </Link>

        <div className="block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-white focus:outline-none"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className={`fixed top-0 left-0 h-full w-3/4 bg-black bg-opacity-75 z-20 transform ${navbarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:static md:transform-none md:bg-transparent md:w-auto md:h-auto md:flex md:items-center`} id="navbar">
          <ul className="flex flex-col p-4 mt-16 md:mt-0 md:flex-row md:space-x-8 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index} className="md:mt-0 mt-2">
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
