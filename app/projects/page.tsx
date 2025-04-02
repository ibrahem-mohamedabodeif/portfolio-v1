"use client";

import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import projects from "@/data/projects.json";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { FaCss3Alt, FaGithub, FaReact } from "react-icons/fa";
import {
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import {
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { IoIosLink, IoLogoJavascript } from "react-icons/io";

// Mapping technologies to icons
const techIcons = {
  "Tailwind CSS": <RiTailwindCssFill size={25} className="text-blue-500" />,
  TypeScript: <SiTypescript size={25} className="text-blue-700" />,
  "React.js": <FaReact size={25} className="text-blue-500" />,
  "Next.js": <RiNextjsFill size={25} className="text-white" />,
  JavaScript: <IoLogoJavascript size={25} className="text-yellow-400" />,
  "React Router": <SiReactrouter size={25} className="text-red-600" />,
  "React Query": <SiReactquery size={25} className="text-red-800" />,
  Supabase: <RiSupabaseFill size={25} className="text-green-500" />,
  Redux: <SiRedux size={25} className="text-white" />,
  CSS: <FaCss3Alt size={25} className="text-blue-800" />,
  Zod: <SiZod size={25} className="text-blue-800" />,
  "React Hook Form": <SiReacthookform size={25} className="text-pink-800" />,
};

// Separate component to handle search params safely
function SearchParamsHandler({ setCurrentProject }: { setCurrentProject: (index: number) => void }) {
  const searchParams = useSearchParams();
  useEffect(() => {
    const projectName = searchParams.get("project");
    if (projectName) {
      const index = projects.findIndex((p) => p.title === projectName);
      if (index !== -1) setCurrentProject(index);
    }
  }, [searchParams, setCurrentProject]);

  return null;
}

// Main component
export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);
  const [imageSrc, setImageSrc] = useState(projects[0].imageCover.large);

  // Responsive image selection
  useEffect(() => {
    const updateImage = () => {
      if (typeof window === "undefined") return;
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) setImageSrc(projects[currentProject].imageCover.small);
      else if (screenWidth < 1024) setImageSrc(projects[currentProject].imageCover.medium);
      else setImageSrc(projects[currentProject].imageCover.large);
    };

    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, [currentProject]);

  // Project navigation handlers
  const handleNextProject = () => setCurrentProject((prev) => (prev + 1) % projects.length);
  const handlePrevProject = () => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <Suspense fallback={<div className="w-full h-screen flex items-center justify-center text-gray-500">Loading...</div>}>
      <SearchParamsHandler setCurrentProject={setCurrentProject} />
      <div className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src={imageSrc} alt={projects[currentProject].projectName} fill priority className="object-cover" />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Project Info */}
        <div className="absolute top-0 left-0 px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-10 flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-5 w-full max-w-7xl mx-auto">
          <h2 className="text-base sm:text-lg md:text-xl text-gray-300 tracking-wider">
            {projects[currentProject].category}
          </h2>
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-4xl font-bold tracking-wider text-red-600 hover:text-red-500 transition-colors">
            {projects[currentProject].projectName}
          </h1>

          {/* Links */}
          <div className="flex flex-row gap-4 sm:gap-5">
            <a target="_blank" rel="noopener noreferrer" href={projects[currentProject].demo} className="text-white hover:text-red-400 transition-colors">
              <IoIosLink size={22} className="sm:w-6 sm:h-6" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={projects[currentProject].github} className="text-white hover:text-red-400 transition-colors">
              <FaGithub size={22} className="sm:w-6 sm:h-6" />
            </a>
          </div>

          {/* Project Summary */}
          <p className="text-base md:text-3xl md:tracking-wider md:leading-relaxed lg:text-xl w-10/12 lg:w-full rounded-lg">
            {projects[currentProject].summary}
          </p>
        </div>

        {/* Technology Stack */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 md:px-12 lg:px-20 py-4 sm:py-6 md:py-8 max-w-7xl">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-gray-300">Technology Stack</h2>
          <ul className="flex flex-row gap-2 sm:gap-3 md:gap-4 flex-wrap">
            {projects[currentProject].tech.map((tech, i) => (
              <li key={i} className="flex items-center gap-2 bg-gray-900/50 px-2 py-1 rounded-md">
                {techIcons[tech as keyof typeof techIcons]}
                <span className="text-xs sm:text-sm hidden sm:inline-block">{tech}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 right-4 sm:right-6 md:right-8 transform -translate-y-1/2 flex flex-col items-center gap-3 sm:gap-4 md:gap-5">
          <button onClick={handleNextProject} className="cursor-pointer p-1 sm:p-2 rounded-full text-red-800">
            <MdOutlineKeyboardArrowUp size={30} />
          </button>
          <span className="text-3xl">{currentProject < 10 ? `0${currentProject+1}` : currentProject+1}</span>
          <button onClick={handlePrevProject} className="cursor-pointer p-1 sm:p-2 rounded-full">
            <MdOutlineKeyboardArrowDown size={30} />
          </button>
        </div>
      </div>
    </Suspense>
  );
}
