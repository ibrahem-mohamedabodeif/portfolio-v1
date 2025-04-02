import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiTypescript,
  SiZod,
} from "react-icons/si";
export default function SkillsSec() {
  return (
    <div className="py-20 px-7 md:py-52 lg:py-20 lg:px-20 ">
      <h1 className="text-center text-3xl text-red-800 font-mono tracking-wider">
        Skills
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-y-6 mt-14 ">
        <div className="flex flex-col items-center gap-3">
          <FaHtml5 size={60} className="text-red-700" />
          <span className="text-red-800 text-base font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
            HTML
          </span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <FaCss3Alt size={60} className="text-blue-800" />
          <span className=" text-red-800 text-base font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
            CSS
          </span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <RiTailwindCssFill size={60} className="text-blue-500" />
          <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
            Tailwind CSS
          </span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <IoLogoJavascript size={60} className="text-yellow-400" />
          <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
            JavaScript
          </span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <SiTypescript size={60} className="text-blue-700" />
          <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
            TypeScript
          </span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <FaReact size={60} className="text-blue-500" />
          <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
            React.js
          </span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <RiNextjsFill size={60} className="text-black" />
          <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
            Next.js
          </span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <SiRedux size={60} className="text-black" />
          <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
            Redux
          </span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <SiReactrouter size={60} className="text-red-600" />
          <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
            React Router
          </span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <SiReactquery size={60} className="text-red-800" />
          <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
            React query
          </span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <SiZod size={60} className="text-blue-800" />
          <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
            Zod
          </span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <SiReacthookform size={60} className="text-pink-800" />
          <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
            React Hook Form
          </span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <RiSupabaseFill size={60} className="text-green-500" />
          <span className=" text-red-800 text-sm font-semibold tracking-wide font-mono border-transparent rounded-lg p-1 bg-gray-200">
            Supabase
          </span>
        </div>
      </div>
    </div>
  );
}
