"use client"
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

export default function HeroSec() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative py-16 px-7 md:py-52 lg:py-16 lg:px-20 bg-[#e5e5e5] rounded-b-[100px] h-svh text-black">
    <div aria-label="main" className="lg:pl-10 text-center flex flex-col">
      <div aria-label="photo" className="flex flex-col items-center mx-10">
        <div className="w-40 h-40 md:w-56 md:h-56 lg:w-48 lg:h-48 overflow-hidden relative border-4 border-white rounded-full">
          <Image
            src={"/174149553452810.png"}
            alt="photo"
            fill
            className="object-contain"
          />
        </div>
        <span className="z-10 -mt-30 ml-50 lg:-mt-34 lg:ml-60 -rotate-12 bg-white p-2 rounded-full text-xs shadow-md flex items-center">
          <span className="text-[#A22C29]">@</span>ibrahem_mohamed
        </span>
      </div>
      <div aria-label="paragraph" className="mt-32 lg:mt-36">
        <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold tracking-wide leading-normal md:w-md lg:w-1/3 text-center mx-auto">Crafting and Developing Fast, Scalable and SEO web applications.</h1>
      </div>
      <div aria-label="button" className="mt-12 lg:mt-12 text-center">
        <button onClick={scrollToProjects} className="px-2 py-3 w-56 rounded-full bg-black text-white text-lg font-extralight tracking-wider flex justify-center
         items-center gap-2 mx-auto">Explore projects 
        <GoArrowUpRight size={25} />
        </button>
      </div>
    </div>
    <div aria-label="projects-num" className="absolute bottom-24 lg:left-20 flex justify-center items-center gap-3">
      <span className="text-3xl lg:text-5xl font-bold text-[#A22C29]"><span className="text-3xl">+</span>10</span>
      <h1 className="text-xl lg:text-2xl font-extralight tracking-wide">Projects</h1>
    </div>
    </div>
  );
}
