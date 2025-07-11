"use client";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function EnterpriseServicesBanner() {
  return (
<>
<div className="w-full max-w-7xl py-16 font-sans mx-auto mb-14 px-4">
  <div className="w-full flex flex-col-reverse md:flex-row justify-center gap-6">

    <div className="w-full md:w-[48%] mt-6 md:mt-0 flex flex-col items-start text-left">
      <p className="text-[12px] mb-4 md:mb-6">UPWORK ENTERPRISE</p>
      <h1 className="text-[32px] md:text-[64px] font-semibold leading-tight md:leading-[1.2] mb-4">
        Managed Services
      </h1>
      <p className="text-[16px] md:text-[20px] leading-relaxed">
        We guarantee project outcomes with our experts. Our team offers you program management to make sure you stay on track and on budget.
      </p>

      <div className="w-full aspect-[311/224] h-auto relative my-8 md:hidden">
        <img
          src="/Images/Picture4.png"
          alt="mobile image"
          className="object-contain w-full h-full absolute inset-0"
        />
      </div>

      <div className="w-full mt-4 md:mt-12 flex justify-start">
        <button className="group text-[16px] md:text-[18px] text-black w-full max-w-[400px] py-[12px] px-[24px] md:px-[46px] rounded-xl hover:bg-[#7ab503] cursor-pointer bg-[#95df00] overflow-hidden">
          <span className="inline-flex items-center transition-transform duration-300 group-hover:-translate-x-1">
            Let's Talk
            <span className="ml-2 opacity-0 translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              <HiOutlineArrowRight />
            </span>
          </span>
        </button>
      </div>
    </div>

    <div className="hidden md:block w-full md:w-[52%] aspect-[311/224] h-auto relative mb-8 md:mb-0">
      <img
        src="/Images/PICTURE3.png"
        alt="desktop image"
        className="object-contain w-full h-full absolute inset-0"
      />
    </div>
  </div>
</div>
</>
  );
}
