"use client";

import { HiOutlineArrowRight } from "react-icons/hi";



export default function EnterpriseTopBanner() {
  return (
    <>
<div className="w-full max-w-7xl py-16 font-sans mx-auto px-4">
  <div className="w-full flex flex-col-reverse md:flex-row justify-center gap-6">
    
    {/* LEFT TEXT SECTION */}
    <div className="w-full md:w-[43%] text-left">
      <p className="text-[10px] md:text-[12px] mt-2 mb-4 font-[600]">UPWORK ENTERPRISE</p>

      <h1 className="text-[32px] md:text-[64px] font-[600] text-base/16 mb-6 md:mb-9 leading-tight">
        Bring top talent to your business, your way
      </h1>

      <p className="text-[14px] md:text-[20px] leading-relaxed">
        Build your dream team, fill skill gaps, and <br className="hidden md:block" />
        scale with our full-service, customizable <br className="hidden md:block" />
        Enterprise platform.
      </p>

      <div className="mt-10 md:mt-14 flex justify-start">
        <button className="group text-[16px] md:text-[18px] text-black w-full py-[12px] max-w-[400px] px-[46px] rounded-xl hover:bg-[#7ab503] cursor-pointer bg-[#95df00] overflow-hidden">
          <span className="inline-flex items-center transition-transform duration-300 group-hover:-translate-x-1">
            Let's Talk
            <span className="ml-2 opacity-0 translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              <HiOutlineArrowRight />
            </span>
          </span>
        </button>
      </div>
    </div>

    {/* IMAGE SECTION */}
    <div className="w-full md:w-[57%] aspect-[311/224] object-contain h-auto relative mb-8 md:mb-0">
      <img src="/Images/Aunt1.png" alt="image" className="object-contain w-full h-full absolute inset-0" />
    </div>
  </div>

</div>


    </>
  )
}