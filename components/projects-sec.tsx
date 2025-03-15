import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function ProjectsSec() {
  return (
    <div id="projects-section" className="px-7 lg:px-20 py-20 bg-[#e5e5e5] rounded-t-[100px] text-center">
      <div
        aria-label="header"
        className="flex justify-between flex-col md:flex-row lg:flex-row gap-5 items-center"
      >
        <h1 className="text-xl lg:text-4xl font-semibold tracking-wide ">
          My Latest Projects
        </h1>
        <Link href={"/projects"}>
        <button
          className="text-[#a22c29] text-lg font-extralight tracking-wider flex justify-center
         items-center gap-2 border-b pb-1 cursor-pointer"
        >
          Explore more projects
          <GoArrowUpRight size={20} />
        </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-between mt-28 px-10">
      <Link href={`/projects?project=Homely`}>
        <div className="flex flex-col overflow-hidden">
          <div className="relative w60 lg:w-96 h-40 lg:h-48">
            <Image
              src={"/image1.png"}
              fill
              alt="homely"
              className="rounded-lg object-fill"
            />
          </div>
          <div className="flex flex-col gap-2 items-start mt-8">
            <h1 className="text-2xl font-bold tracking-wider text-[#a22c29]">
              Saas Platform
            </h1>
            <h4 className="text-xl text-black font-extralight">Homely</h4>
          </div>
        </div></Link>
        <Link href={`/projects?project=PegasusE-commerce`}>

        <div className="flex flex-col overflow-hidden">
          <div className="relative w60 lg:w-96 h-40 lg:h-48">
            <Image
              src={"/e-commerce.png"}
              fill
              alt="pegasus"
              className="rounded-lg object-fill"
            />
          </div>
          <div className="flex flex-col gap-2 items-start mt-8">
            <h1 className="text-2xl font-bold tracking-wider text-[#a22c29]">
              Web App
            </h1>
            <h4 className="text-xl text-black font-extralight">Pegasus</h4>
          </div>
        </div></Link>
        <Link href={`/projects?project=BuildHub`}>

        <div className="flex flex-col overflow-hidden">
          <div className="relative w60 lg:w-96 h-40 lg:h-48">
            <Image
              src={"/build-hub.png"}
              fill
              alt="build-hub"
              className="rounded-lg object-fill"
            />
          </div>
          <div className="flex flex-col gap-2 items-start mt-8">
            <h1 className="text-2xl font-bold tracking-wider text-[#a22c29]">
              Landing Page
            </h1>
            <h4 className="text-xl text-black font-extralight">Build Hub</h4>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}
