import { FaDiscord, FaFacebookSquare, FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

export default function page() {
  return (
    <div className="py-28 px-7 md:px-20 lg:px-20 bg-[#e5e5e5] h-screen">
      <h1 className="text-center text-3xl font-mono tracking-wider">
        You Can Find Me On
      </h1>
      <div className="pt-14 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 lg:mx-20">
        <div className="flex flex-col items-center md:flex-row gap-5">
          <IoLogoLinkedin size={30} className="text-blue-800" />
          <a
            href="https://linkedin.com/in/ibrahem-mohamed-9a7982247"
            target="_blanck"
            className="text-lg text-red-800 break-all"
          >
            @ibrahem_mohamed
          </a>
        </div>

        <div className="flex flex-col items-center md:flex-row gap-5">
          <FaGithub size={30} />
          <a
            href="https://github.com/ibrahem-mohamedabodeif"
            target="_blanck"
            className="text-lg text-red-800 break-all"
          >
            @ibrahem_mohamed
          </a>
        </div>

        <div className="flex flex-col items-center md:flex-row gap-5">
          <FaDiscord size={30} className="text-blacl" />
          <a
            href="https://discord.com/channels/@me/1217090140116095081"
            target="_blanck"
            className="text-lg text-red-800 break-all"
          >
            @ibrahem_mohamed
          </a>
        </div>

        <div className="flex flex-col items-center md:flex-row gap-5">
          <FaFacebookSquare size={30} className="text-blue-600" />
          <a
            href="https://www.facebook.com/hemo.mohamed.792"
            target="_blanck"
            className="text-lg text-red-800 break-all"
          >
            @ibrahem_mohamed
          </a>
        </div>
      </div>
      {/* <div className="py-20 lg:mx-20 flex flex-col items-start gap-y-20">
        <h1 className="text-5xl tracking-wide">
          Let&apos;s bring your ideas to light together
        </h1>
        <h2 className="text-5xl">Start by
        <a
                  href="mailto:ibrahem.mohamed191999@gmail.com"
                  className="break-all text-red-800 ml-3 border-b-2 border-red-800 pb-1"
                >
                  saying hi
                </a>
            </h2>
      </div> */}
    </div>
  );
}
