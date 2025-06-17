"use client";

import { HiOutlineArrowRight } from "react-icons/hi";


export default function EnterpriseDedicated() {
  return (
    <>
  <div className="w-full max-w-7xl font-sans mx-auto mb-14 px-4">
  <div>
    <h1 className="text-[48px] font-[600] text-base/12 max-md:text-left max-md:text-[30px] max-md:leading-[1.1]">
      Work with a dedicated Upwork team member for each step
    </h1>
    <p className="text-[24px] font-[500] mt-7 max-md:text-left max-md:text-[16px] max-md:leading-[1.4] max-md:mt-4">
      Enterprise clients have an assigned support team for your business each step along the way.
    </p>
  </div>

  <div className="flex justify-center gap-7 max-md:flex-col max-md:items-start max-md:gap-8 mt-10">
    {/* Block 1 */}
    <div className="max-md:text-left">
      <div className="max-md:flex max-md:items-center max-md:gap-4 max-md:mb-[16px]">
        <img
          src="/Images/GO1.png"
          alt="image"
          className="object-contain w-[64px] h-[64px] mb-[24px] p-[7.5px] max-md:w-[48px] max-md:h-[48px] max-md:mb-0"
        />
        <h3 className="text-[28px] mb-[24px] max-md:text-[20px] max-md:mb-0 max-md:leading-[1.3]">
          Account Manager
        </h3>
      </div>
      <p className="text-[#d9d9d9] text-[16px] max-md:text-[15px] max-md:leading-[1.4]">
        Maintains your account and works with your team to maximize the return on your Upwork investment.
      </p>
    </div>

    {/* Block 2 */}
    <div className="max-md:text-left">
      <div className="max-md:flex max-md:items-center max-md:gap-4 max-md:mb-[16px]">
        <img
          src="/Images/GO2.png"
          alt="image"
          className="object-contain w-[64px] h-[64px] mb-[24px] p-[7.5px] max-md:w-[48px] max-md:h-[48px] max-md:mb-0"
        />
        <h3 className="text-[28px] mb-[24px] max-md:text-[20px] max-md:mb-0 max-md:leading-[1.3]">
          Solutions Architect
        </h3>
      </div>
      <p className="text-[#d9d9d9] text-[16px] max-md:text-[15px] max-md:leading-[1.4]">
        Develops custom talent solutions for your organization and unique strategic goals.
      </p>
    </div>

    {/* Block 3 */}
    <div className="max-md:text-left">
      <div className="max-md:flex max-md:items-center max-md:gap-4 max-md:mb-[16px]">
        <img
          src="/Images/GO3.png"
          alt="image"
          className="object-contain w-[64px] h-[64px] mb-[24px] p-[7.5px] max-md:w-[48px] max-md:h-[48px] max-md:mb-0"
        />
        <h3 className="text-[28px] mb-[24px] max-md:text-[20px] max-md:mb-0 max-md:leading-[1.3]">
          Customer Success Manager
        </h3>
      </div>
      <p className="text-[#d9d9d9] text-[16px] max-md:text-[15px] max-md:leading-[1.4]">
        Delivers comprehensive support for your team with training, reporting, and end-to-end consultation on projects, hiring and talent management.
      </p>
    </div>
  </div>

  <div className="mt-6 max-md:mt-10 max-md:text-left">
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