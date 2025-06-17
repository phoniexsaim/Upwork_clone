"use client";
 import { GoArrowRight } from "react-icons/go";

export default function EnterpriseFeatureIntegeration() {
  return (
   <>

<div className="w-full max-w-7xl py-16 font-sans mx-auto px-4">
  <div className="w-full flex flex-col md:flex-row justify-center gap-8 items-center">
    {/* Left Section */}
    <div className="w-full md:w-[35%] mt-[20px]">
      <div>
        <h1 className="text-[32px] md:text-[48px] font-[600] leading-tight md:leading-[56px]">
          Integrations
        </h1>
        <p className="text-[16px] md:text-[20px] mt-4">
          Streamline and centralize your contingent workforce by connecting with your existing apps
        </p>
      </div>

      {/* Desktop Button */}
      <div className="mt-10 hidden md:flex">
        <button className="group border-2 border-white py-2 px-6 rounded-xl cursor-pointer flex items-center gap-4 transition-all duration-300 hover:pr-14">
          <span className="transition-all duration-300 text-[16px]">View integrations</span>
          <span className="opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[20px]">
            <GoArrowRight />
          </span>
        </button>
      </div>
    </div>

    {/* Right Section with Responsive Images */}
    <div className="w-full md:w-[65%] aspect-[2.38] relative">
      {/* Desktop Image */}
      <img
        src="/Images/AUNT2.webp"
        alt="desktop"
        className="hidden md:block w-full h-full object-contain"
      />
      {/* Mobile Image */}
      <img
        src="/Images/Aunt2a.webp"
        alt="mobile"
        className="block md:hidden w-full h-full object-contain"
      />
    </div>

    {/* Mobile Button Below Image */}
    <div className="w-full mt-6 block md:hidden">
      <button className="group w-full border-2 border-white py-3 px-6 rounded-xl cursor-pointer flex items-center justify-center gap-4 transition-all duration-300 hover:pr-6">
        <span className="text-[16px]">View integrations</span>
        <span className="text-[22px] transform translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <GoArrowRight />
        </span>
      </button>
    </div>
  </div>
</div>

   </>
  );
}