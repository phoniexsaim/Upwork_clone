"use client";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function EnterpriseGovernance() {
    return (
<>
  <div className="w-full max-w-7xl font-sans flex gap-8 mx-auto px-4 max-md:flex-col max-md:gap-6">
  <div className="w-[60%] aspect-[1.6115] rounded-[24px] relative overflow-hidden max-md:w-full max-md:aspect-auto max-md:h-[300px]">
    <img src="/Images/IMAGE2.jpg" alt="image" className="w-full h-full object-cover rounded-[24px]" />
  </div>

  <div className="w-[40%] mt-4 max-w-[410px] max-md:w-full max-md:mt-0">
    <div>
      <h2 className="text-[28px] mb-1 max-md:text-[20px] max-md:leading-[1.3] max-md:text-left">Governance and controls</h2>
      <p className="text-[16px] max-md:text-[15px] max-md:leading-[1.5] max-md:text-left">
        Create contracts and onboarding flows and use reporting tools that fit your needs and scale your business.
      </p>
    </div>

    <div className="mt-4">
      <h2 className="text-[28px] mb-1 max-md:text-[20px] max-md:leading-[1.3] max-md:text-left">Payroll and staffing</h2>
      <p className="text-[16px] max-md:text-[15px] max-md:leading-[1.5] max-md:text-left">
        Pay your distributed team with Upwork Payroll so you can focus on growing your business instead of time-consuming admin. 
        <span className="text-[#95df00] cursor-pointer hover:underline"> Learn more</span>
      </p>
    </div>

    <div className="mt-4">
      <h2 className="text-[28px] mb-1 max-md:text-[20px] max-md:leading-[1.3] max-md:text-left">Safety and security</h2>
      <p className="text-[16px] max-md:text-[15px] max-md:leading-[1.5] max-md:text-left">
        Engage, onboard, and manage your hybrid team worry-free with our compliant talent marketplace.
        <span className="text-[#95df00] cursor-pointer hover:underline"> Learn more</span>
      </p>
    </div>

    <div className="mt-6">
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
</div>
</>
    );
}