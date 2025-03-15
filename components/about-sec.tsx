import Image from "next/image";

export default function AboutSec() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 rounded-b-[100px] relative py-10 px-5 md:py-20 lg:py-24 lg:px-16 bg-[#e5e5e5] h-auto">
      {/* Image Section */}
      <div className="relative w-2/3 md:w-1/3 lg:w-1/3 h-64 md:h-80 lg:h-96 overflow-hidden border-3 border-white rounded-4xl">
        <Image
          src={"/174149553452810.png"}
          alt="avatar"
          fill
          className="object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-2/3  lg:text-left">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center lg:text-left font-bold lg:mb-10">
          Who am I and what do I offer?
        </h1>
        <p className="text-lg md:text-xl lg:text-xl text-gray-800 leading-relaxed py-5">
          I’m <span className="text-red-800">Ibrahem Mohamed</span>, naturally curious and enjoy exploring how things work,<br />
          always seeking ways to make them more efficient and effective.<br />
          I have worked on developing web applications, SaaS platforms, POS systems, and landing pages,<br />
          focusing on building efficient, user-centric digital solutions.<br />
          I prioritize performance optimization and SEO best practices to ensure high-speed, accessible, and search-friendly experiences.<br />
          Continuously exploring new technologies and challenges, I strive to refine my skills and expand my expertise in creating impactful digital experiences.
        </p>
      </div>
    </div>
  );
}