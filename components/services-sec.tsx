export default function Services() {
  return (
    <div className="py-20 px-10 md:px-20 lg:px-40">
      {/* <div className="relative z-20">
      <h1 className="text-xl lg:text-2xl font-light  tracking-wider bg-[#e4e4e4] rounded-full px-6 lg:px-10 py-2 w-fit mx-auto before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-full before:h-[1px] before:bg-[#B9BAA3] before:-z-10">
        Services
      </h1>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-20 items-start justify-center">
        <div className="flex flex-col justify-center gap-y-2 w-2/3">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/fluency-systems-regular/48/web-apps.png"
            alt="web-apps"
          />
          <h2 className="text-xl font-medium tracking-wide">Web Apps</h2>
          <p className="text-base font-light text-[#5a5a5a]">
            Scalable and high-performance applications tailored to your business
            needs.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-y-2 w-2/3">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/external-becris-lineal-becris/64/external-saas-fintech-becris-lineal-becris.png"
            alt="external-saas-fintech-becris-lineal-becris"
          />
          <h2 className="text-xl font-medium tracking-wide">Saas platforms</h2>
          <p className="text-base font-light text-[#5a5a5a]">
            Scalable and efficient software solutions designed to automate and
            optimize your business.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-y-2 w-2/3">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/web-design.png"
            alt="web-design"
          />
          <h2 className="text-xl font-medium tracking-wide">Landing pages</h2>
          <p className="text-base font-light text-[#5a5a5a]">
            Visually appealing and performance-driven pages tailored for
            marketing success.
          </p>
        </div>
      </div>
    </div>
  );
}
