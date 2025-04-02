"use client";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import ActiveLink from "./activeLink";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div aria-label="hamburger-menu" className="relative block lg:hidden text-black">
      <button aria-label="menu-btn" onClick={() => setOpen(!open)}>
        <CiMenuBurger size={25} />
      </button>
      {open && (
        <div className="p-4 rounded-lg lg:hidden block absolute top-10 right-0 bg-white shadow-2xl z-20">
          <ul className="flex flex-col justify-between gap-y-3 w-full">
            <ActiveLink href={"/"}>
              <li
                onClick={() => setOpen(false)}
                className="text-lg font-light tracking-wider"
              >
                Home
              </li>
            </ActiveLink>
            <ActiveLink href={"/projects"}>
              <li
                onClick={() => setOpen(false)}
                className="text-lg font-light tracking-wider"
              >
                Projects
              </li>
            </ActiveLink>
            <ActiveLink href={"/about"}>
              <li
                onClick={() => setOpen(false)}
                className="text-lg font-light tracking-wider"
              >
                About
              </li>
            </ActiveLink>
            <ActiveLink href={"/find-me"}>
              <li
                onClick={() => setOpen(false)}
                className="text-lg font-light tracking-wider border-t border-black pt-3"
              >
                Find me
              </li>
            </ActiveLink>
            <li
              onClick={() => setOpen(false)}
              className="text-lg font-light tracking-wider"
            >
              <a href="/Ibrahem Mohamed (front-end developer).pdf" download>
                CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
