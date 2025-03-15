import Image from "next/image";
import BurgerMenu from "./burger-menu";
import ActiveLink from "./activeLink";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <div
        aria-label="right-navigation"
        className="hidden lg:flex items-center gap-2"
      >
        <a
          href="mailto:ibrahem.mohamed191999@gmail.com"
          className="text-sm font-extralight break- text-red-800"
        >
          ibrahem.mohamed191999@gmail.com
        </a>
        <ActiveLink href="/find-me">
          <button className="outline-none p-2 w-24 rounded-full bg-white text-base font-extralight cursor-pointer">
            Find me
          </button>
        </ActiveLink>
        <button className="outline-none p-2 w-20 rounded-full bg-white text-base font-extralight">
          <a href="/Ibrahem Mohamed (front-end developer).pdf" download>
            CV
          </a>
        </button>
      </div>
      <div aria-label="logo" className="w-10 h-10 lg:w-12 lg:h-12 lg:-ml-36">
        <Image
          src="/my logo.png"
          alt="logo"
          width={100}
          height={100}
          className="object-cover"
        />
      </div>
      <div
        aria-label="left-navigation"
        className="hidden lg:flex items-center gap-4"
      >
        <ul className="flex items-center gap-4">
          <li className="text-lg font-extralight tracking-wider">
            <ActiveLink href="/">Home</ActiveLink>
          </li>
          <span className="text-xl">/</span>
          <li className="text-lg font-extralight tracking-wider"><ActiveLink href="/projects">Projects </ActiveLink></li>
          <span className="text-xl">/</span>
          <li className="text-lg font-extralight tracking-wider">
            <ActiveLink href="/about">About</ActiveLink>
          </li>
        </ul>
      </div>
      <BurgerMenu />
    </div>
  );
}
