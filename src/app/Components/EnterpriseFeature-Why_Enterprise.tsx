"use client";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function EnterpriseFeatureWhyEnterprise() {
  return (
<>
<div className="w-full max-w-7xl py-16 font-sans mx-auto px-4">
        <div>
            <h1 className="md:text-[48px] text-[36px] leading-[1.2] font-[600] mb-8">Why enterprises turn to Upwork</h1>
        </div>
       <div className="flex justify-center gap-8 flex-wrap md:flex-nowrap">
  {[1, 2, 3, 4].map((_, i) => (
    <div key={i} className="flex md:block items-start gap-4 text-left w-full md:w-auto mb-6 md:mb-0">
      <img
        src={`/Images/TASVEER${i + 1}.png`}
        className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
        alt={`Icon ${i + 1}`}
      />
      <div>
        <h2 className="text-[18px] md:text-[28px] my-[8px] md:my-[14px] font-[600]">
          {[
            "Proof of quality",
            "Safety and security",
            "All-in-one platform",
            "On-demand help",
          ][i]}
        </h2>
        <p className="text-[14px] md:text-[16px] text-[#d9d9d9]">
          {[
            "Check talent work samples, reviews, and identity verification, anytime.",
            "Work confidently with Upwork's 24/7 monitoring, data protection, and support.",
            "Manage talent, securely share files, give real-time feedback, and make payments.",
            "Work with a dedicated account manager whenever you need.",
          ][i]}
        </p>
      </div>
    </div>
  ))}
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
</>
  );
}