"use client";

import { HiOutlineArrowRight } from "react-icons/hi";

export default function EnterpriseServicesChecks() {
    return(
        <>
        <div className="w-full max-w-7xl font-sans p-10 rounded-4xl mx-auto mb-14 bg-[#1c1c1c]">
  {/* Headings */}
  <div>
    <h1 className="text-[30px] leading-[32px] font-[500] text-left md:text-[48px] md:leading-[1.2]">
      Operate efficiently and free up bandwidth with our professional services
    </h1>
    <h2 className="text-[24px] leading-[28px] mt-4 md:text-[28px] md:mt-6">
      We understand the nuances of your speciality, so we can be responsible for the following:
    </h2>
  </div>

  {/* Task list */}
  <div className="mt-12 max-w-4xl flex flex-col md:flex-row md:justify-between gap-6">
    {/* Column 1 */}
    <div className="space-y-4">
      <div className="flex gap-5">
        <img src="/Images/Correct.svg" className="object-contain h-[24px] w-[24px]" />
        <label>Full ownership of program building</label>
      </div>

      <div className="flex gap-5">
        <img src="/Images/Correct.svg" className="object-contain h-[24px] w-[24px]" />
        <label>Project milestone tracking</label>
      </div>

      <div className="flex gap-5">
        <img src="/Images/Correct.svg" className="object-contain h-[24px] w-[24px]" />
        <label>Correct identification of your desired output</label>
      </div>

      <div className="flex gap-5">
        <img src="/Images/Correct.svg" className="object-contain h-[24px] w-[24px]" />
        <label>Execution of deliverables</label>
      </div>
    </div>

    {/* Column 2 */}
    <div className="space-y-4">
      <div className="flex gap-5">
        <img src="/Images/Correct.svg" className="object-contain h-[24px] w-[24px]" />
        <label>Day-to-day program management</label>
      </div>

      <div className="flex gap-5">
        <img src="/Images/Correct.svg" className="object-contain h-[24px] w-[24px]" />
        <label>People management</label>
      </div>

      <div className="flex gap-5">
        <img src="/Images/Correct.svg" className="object-contain h-[24px] w-[24px]" />
        <label>Project management</label>
      </div>

      <div className="flex gap-5">
        <img src="/Images/Correct.svg" className="object-contain h-[24px] w-[24px]" />
        <label>Delivered guaranteed outcomes</label>
      </div>
    </div>
  </div>

  {/* CTA Button */}
  <div className="mt-14">
    <button className="group text-[18px] text-black w-full py-[12px] max-w-[400px] px-[46px] rounded-xl hover:bg-[#7ab503] cursor-pointer bg-[#95df00] overflow-hidden">
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