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
import { useSearchParams } from "next/navigation";

export default function ProjectsSection() {
  const searchParams = useSearchParams();
  const [projectName, setProjectName] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjectName = async () => {
      const name = searchParams.get("project");
      setProjectName(name);
    };
    fetchProjectName();
  }, [searchParams]);
  const [currentProject, setCurrentProject] = useState(0);
  const [imageSrc, setImageSrc] = useState(projects[0].imageCover.large);

  // Responsive image selection
  useEffect(() => {
    const updateImage = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 640) {
        setImageSrc(projects[currentProject].imageCover.small);
      } else if (screenWidth < 1024) {
        setImageSrc(projects[currentProject].imageCover.medium);
      } else {
        setImageSrc(projects[currentProject].imageCover.large);
      }
    };

    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, [currentProject, imageSrc]);

  // Handle direct project navigation via URL
  useEffect(() => {
    if (projectName) {
      const index = projects.findIndex((p) => p.title === projectName);
      if (index !== -1) {
        setCurrentProject(index);
      }
    }
  }, [projectName]);

  // Project navigation handlers
  const handleNextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const handlePrevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Tech icon mapping
  const techIcons = {
    "Tailwind CSS": <RiTailwindCssFill size={25} className="text-blue-500" />,
    "TypeScript": <SiTypescript size={25} className="text-blue-700" />,
    "React.js": <FaReact size={25} className="text-blue-500" />,
    "Next.js": <RiNextjsFill size={25} className="text-white" />,
    "JavaScript": <IoLogoJavascript size={25} className="text-yellow-400" />,
    "React Router": <SiReactrouter size={25} className="text-red-600" />,
    "React query": <SiReactquery size={25} className="text-red-800" />,
    "Supabase": <RiSupabaseFill size={25} className="text-green-500" />,
    "Redux": <SiRedux size={25} className="text-white" />,
    "Css": <FaCss3Alt size={25} className="text-blue-800" />,
    "Zod": <SiZod size={25} className="text-blue-800" />,
    "React Hook Form": <SiReacthookform size={25} className="text-pink-800" />,

  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={projects[currentProject].projectName}
          fill
          priority
          className={`object-center`}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Project Info */}
      <div className="absolute top-0 left-0 px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-10 flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-5 w-full max-w-7xl mx-auto">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 tracking-wider">
          {projects[currentProject].category}
        </h2>
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-4xl font-bold tracking-wider text-red-600 hover:text-red-500 transition-colors">
          {projects[currentProject].projectName}
        </h1>
        
        {/* Links */}
        <div className="flex flex-row gap-4 sm:gap-5">
          <a 
            target="_blank" 
            rel="noopener noreferrer"
            href={projects[currentProject].demo}
            className="text-white hover:text-red-400 transition-colors"
            aria-label="View project demo"
          >
            <IoIosLink size={22} className="sm:w-6 sm:h-6" />
          </a>
          <a 
            target="_blank" 
            rel="noopener noreferrer"
            href={projects[currentProject].github}
            className="text-white hover:text-red-400 transition-colors"
            aria-label="View GitHub repository"
          >
            <FaGithub size={22} className="sm:w-6 sm:h-6" />
          </a>
        </div>

        {/* Project Summary */}
        <div>
          <p className="text-base md:text-3xl md:tracking-wider md:leading-relaxed lg:text-xl w-10/12 lg:w-full rounded-lg">
            {projects[currentProject].summary}
          </p>
        </div>
      </div>

      {/* Features and Tech Stack */}
      <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-4 sm:py-6 md:py-8 items-center max-w-7xl">
        {/* <div>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-gray-300">Features</h2>
          <ul className="list-disc lg:text-base md:text-xl text-base pl-5 space-y-1 sm:space-y-2">
            {projects[currentProject].features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div> */}
        
        <div>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-gray-300">Technology Stack</h2>
          <ul className="flex flex-row gap-2 sm:gap-3 md:gap-4 flex-wrap">
            {projects[currentProject].tech.map((tech, i) => (
              <li 
                key={i}
                className="flex items-center gap-2 bg-gray-900/50 px-2 py-1 rounded-md"
                aria-label={tech}
              >
                {techIcons[tech as keyof typeof techIcons]}
                <span className="text-xs sm:text-sm hidden sm:inline-block">{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 right-4 sm:right-6 md:right-8 transform -translate-y-1/2 flex flex-col items-center gap-3 sm:gap-4 md:gap-5">
        <button 
          onClick={handleNextProject}
          className="cursor-pointer p-1 sm:p-2 rounded-full text-red-800"
          aria-label="Next project"
        >
          <MdOutlineKeyboardArrowUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </button>
        <span className="text-xl sm:text-2xl md:text-3xl font-mono">
          0{currentProject + 1}
        </span>
        <button 
          onClick={handlePrevProject}
          className="cursor-pointer p-1 sm:p-2 rounded-full hover:bg-gray-800/50 transition-colors"
          aria-label="Previous project"
        >
          <MdOutlineKeyboardArrowDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </button>
      </div>
    </div>
  );
}