export default function Services() {
  return (
    <div className="py-20 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-40 w-full flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 justify-items-center">
          {/* Service 1 - Web Apps */}
          <div className="flex flex-col items-center text-center max-w-xs w-full">
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <img
                src="https://img.icons8.com/fluency-systems-regular/48/web-apps.png"
                alt="web-apps"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-xl font-medium mb-2">Web Apps</h2>
            <p className="text-gray-600 text-base">
              Scalable and high-performance applications tailored to your business needs.
            </p>
          </div>

          {/* Service 2 - SaaS Platforms */}
          <div className="flex flex-col items-center text-center max-w-xs w-full">
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <img
                src="https://img.icons8.com/external-becris-lineal-becris/64/external-saas-fintech-becris-lineal-becris.png"
                alt="saas-platforms"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-xl font-medium mb-2">SaaS Platforms</h2>
            <p className="text-gray-600 text-base">
              Scalable and efficient software solutions designed to automate and optimize your business.
            </p>
          </div>

          {/* Service 3 - Landing Pages */}
          <div className="flex flex-col items-center text-center max-w-xs w-full">
            <div className="w-12 h-12 flex items-center justify-center mb-4">
              <img
                src="https://img.icons8.com/ios/50/web-design.png"
                alt="landing-pages"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-xl font-medium mb-2">Landing Pages</h2>
            <p className="text-gray-600 text-base">
              Visually appealing and performance-driven pages tailored for marketing success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
