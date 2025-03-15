import Image from "next/image";
import { MdOutlineCopyright } from "react-icons/md";

export default function Footer() {
  return (
    <div className="py-4 px-7 lg:px-20 flex flex-col gap-y-5 md:flex-row lg:flex-row justify-between items-center">
      <div className="flex items-center">
        <div aria-label="logo" className="relative w-6 h-6">
          <Image src="/my logo.png" alt="logo" fill className="object-cover" />
        </div>
        <div className="flex items-center gap-2 pl-5">
          <span className="text-2xl font-extralight">|</span>
          <h4 className="flex items-center gap-1 text-lg tracking-wider">
            <MdOutlineCopyright size={20} />
            2025. All Rights Reserved
          </h4>
        </div>
      </div>
      <div
        aria-label="left-navigation"
        className="flex items-center gap-4"
      >
        <ul className="flex items-center gap-4">
          <li className="text-base font-extralight tracking-wider"><a
            href="https://github.com/ibrahem-mohamedabodeif"
            target="_blanck"
            className="text-base break-all"
          >
            GitHub
          </a></li>
          <span className="text-xl">/</span>
          <li className="text-base font-extralight tracking-wider"><a
            href="https://linkedin.com/in/ibrahem-mohamed-9a7982247"
            target="_blanck"
            className="text-base break-all"
          >
            LinkedIn
          </a></li>
          
        </ul>
      </div>
    </div>
  );
}
