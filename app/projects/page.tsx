"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import projects from "@/data/projects.json";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { FaCss3Alt, FaGithub, FaReact } from "react-icons/fa";
import {
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import {
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { IoIosLink, IoLogoJavascript } from "react-icons/io";
import { useSearchParams } from "next/navigation";

export default function ProjectsSection() {
  const searchParams = useSearchParams();
  const projectName = searchParams.get("project");
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    if (projectName) {
      const index = projects.findIndex((p) => p.title === projectName);
      if (index !== -1) setCurrentProject(index);
    }
  }, [projectName]);

  const handleNextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };
  const handlePrevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={projects[currentProject].imageCover}
          alt={projects[currentProject].projectName}
          fill
          className="object-contain"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Project Info */}
      <div className="absolute top-0 left-0 px-7 md:px-20 py-10 flex flex-col gap-y-5 w-full">
        <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-300 tracking-wider">
          {projects[currentProject].category}
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider  text-red-800">
          {projects[currentProject].projectName}
        </h1>
        {/* Links */}
        <div className="flex flex-row gap-5 text-red-800 ">
          <a target="_blank" href={projects[currentProject].demo}>
            <IoIosLink size={25} />
          </a>
          <a target="_blank" href={projects[currentProject].github}>
            <FaGithub size={25} />
          </a>
        </div>
        <div>
          <p className="text-base sm:text-lg w-full md:w-md lg:w-1/3 rounded-lg hidden md:block lg:block">
            {projects[currentProject].summary}
          </p>
        </div>
      </div>

      {/* Features and Tech Stack */}
      <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-20 py-5 items-center">
        <div className=" md:block lg:block">
          <h2 className="text-lg sm:text-xl font-semibold">Features</h2>
          <ul className="list-disc text-base sm:text-lg pl-5 pt-2">
            {projects[currentProject].features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg sm:text-xl font-semibold">Technology Stack</h2>
          <ul className="text-lg flex flex-row gap-3 sm:gap-5 pt-5 flex-wrap">
            {projects[currentProject].tech.map((tech, i) => (
              <li key={i}>
                {tech === "Tailwind CSS" && (
                  <RiTailwindCssFill size={30} className="text-blue-500" />
                )}
                {tech === "TypeScript" && (
                  <SiTypescript size={30} className="text-blue-700" />
                )}
                {tech === "React.js" && (
                  <FaReact size={30} className="text-blue-500" />
                )}
                {tech === "Next.js" && (
                  <RiNextjsFill size={30} className="text-white" />
                )}
                {tech === "JavaScript" && (
                  <IoLogoJavascript size={30} className="text-yellow-400" />
                )}
                {tech === "React Router" && (
                  <SiReactrouter size={30} className="text-red-600" />
                )}
                {tech === "React query" && (
                  <SiReactquery size={30} className="text-red-800" />
                )}
                {tech === "Supabase" && (
                  <RiSupabaseFill size={30} className="text-green-500" />
                )}
                {tech === "Redux" && (
                  <SiRedux size={30} className="text-white" />
                )}
                {tech === "Css" && (
                  <FaCss3Alt size={30} className="text-blue-800" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 right-4 sm:right-8 transform -translate-y-1/2 flex flex-col items-center gap-4 sm:gap-6">
        <button onClick={handleNextProject} className="cursor-pointer">
          <MdOutlineKeyboardArrowUp className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <span className="text-2xl sm:text-3xl">0{currentProject + 1}</span>
        <button onClick={handlePrevProject} className="cursor-pointer">
          <MdOutlineKeyboardArrowDown className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>
    </div>
  );
}
