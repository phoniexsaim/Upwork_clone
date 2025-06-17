"use client";

import { HiOutlineArrowRight } from "react-icons/hi";


export default function EnterpriseHiringTeam() {
  return (
    <>
   <div className="w-full max-w-7xl font-sans mx-auto mb-14 px-4">
  <div className="flex flex-col lg:flex-row justify-center gap-6">
    {/* Card 1 */}
    <div className="w-full lg:w-1/3">
      <div className="group transition-all duration-500 ease-in-out">
        <div className="rounded-[24px] cursor-pointer w-full h-[400px] sm:h-[500px] lg:h-[550px] group-hover:h-[600px] transition-all duration-500 ease-in-out relative overflow-hidden">
          <img
            src="/Images/PICS1.webp"
            alt="image"
            className="object-cover w-full h-full absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
          />

          <div className="absolute bottom-[100px] left-[20px] bg-[#373333] text-[#d9d9d9] text-[20px] sm:text-[24px] lg:text-[28px] px-4 py-2 rounded-full font-semibold">
            10,000+ skills
          </div>

          <div className="absolute bottom-[20px] right-[20px] bg-[#373333] text-[#d9d9d9] text-[20px] sm:text-[24px] lg:text-[28px] px-4 py-2 rounded-full font-semibold">
            90+ categories
          </div>
        </div>
      </div>
      <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] mt-4">
        Staff a highly-skilled team, hired with intention
      </h3>
      <p className="text-[14px] sm:text-[15px] lg:text-[16px] mt-4">
        Connect with Expert-Vetted talent, prescreened for experience on the latest technologies like OpenAI platform
      </p>
      <div className="mt-4">
        <button className="group text-[14px] sm:text-[16px] text-[#d9d9d9] text-left hover:text-[#95df00] cursor-pointer">
          <span className="inline-flex items-center">
            View talent features
            <span className="inline-flex ml-2 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2">
              <HiOutlineArrowRight />
            </span>
          </span>
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div className="w-full lg:w-1/3">
      <div className="group transition-all duration-500 ease-in-out">
        <div className="rounded-[24px] w-full h-[400px] sm:h-[500px] lg:h-[550px] group-hover:h-[600px] transition-all duration-500 ease-in-out relative cursor-pointer overflow-hidden">
          <img
            src="/Images/PICS2.webp"
            alt="image"
            className="object-cover w-full h-full absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
          />

          <div className="absolute bottom-[20px] left-[20px] bg-[#111112] text-[#d9d9d9] text-[20px] sm:text-[24px] lg:text-[28px] max-w-[220px] px-4 py-2 rounded-[18px] font-medium leading-[1.2] z-10">
            Hire in <br /> 3 days <br />
            <span className="text-[14px] sm:text-[15px] lg:text-[16px] font-normal leading-[1.5] block mt-1">
              or less (on <br /> average)
            </span>
          </div>

          <div className="absolute bottom-[100px] right-[10px] bg-[#0e0e0ecc] text-[#d9d9d9] hover:text-white text-[20px] sm:text-[22px] lg:text-[24px] p-3 rounded-[18px] font-medium leading-tight text-left flex justify-start items-start z-10">
            <p>
              Save money <br />
              compared to <br />
              traditional sources
            </p>
          </div>
        </div>
      </div>
      <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] mt-4">
        Scout and hire talent in days, not months
      </h3>
      <p className="text-[14px] sm:text-[15px] lg:text-[16px] mt-4">
        Leverage our sourcing experts to create a custom talent solution that expedites your hiring and your results
      </p>
      <div className="mt-4">
        <button className="group text-[14px] sm:text-[16px] text-[#d9d9d9] text-left hover:text-[#95df00] cursor-pointer">
          <span className="inline-flex items-center">
            View scale features
            <span className="inline-flex ml-2 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2">
              <HiOutlineArrowRight />
            </span>
          </span>
        </button>
      </div>
    </div>

    {/* Card 3 */}
    <div className="w-full lg:w-1/3">
      <div className="group transition-all duration-500 ease-in-out">
        <div className="rounded-[24px] w-full h-[400px] sm:h-[500px] lg:h-[550px] group-hover:h-[600px] transition-all duration-500 ease-in-out relative cursor-pointer overflow-hidden">
          <img
            src="/Images/PICS3.webp"
            alt="image"
            className="object-cover w-full h-full absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-110"
          />

          <div className="absolute bottom-[40px] left-[20px] bg-[#232528] text-[#d9d9d9] text-[20px] sm:text-[24px] max-w-[220px] px-4 py-2 rounded-[18px] font-medium leading-[1.2] z-10">
            Classification coverage <br />
            <span className="text-[28px] sm:text-[32px] font-[600]">180+</span>
            <br /> countries
          </div>

          <div className="absolute bottom-[20px] right-[10px] bg-[#1a1e24] text-[#d9d9d9] hover:text-white text-[20px] sm:text-[24px] py-4 px-3 rounded-[18px] font-medium leading-tight text-left flex justify-start items-start z-10">
            <p>
              Award- <br />
              winning <br />
              platform
            </p>
          </div>
        </div>
      </div>
      <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] mt-4">
        Reach the best, wherever they work, however they work
      </h3>
      <p className="text-[14px] sm:text-[15px] lg:text-[16px] mt-4">
        Source, manage, and pay your hybrid team with the ease and flexibility important to attract top talent.
      </p>
      <div className="mt-4">
        <button className="group text-[14px] sm:text-[16px] text-[#d9d9d9] text-left hover:text-[#95df00] cursor-pointer">
          <span className="inline-flex items-center">
            View security features
            <span className="inline-flex ml-2 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2">
              <HiOutlineArrowRight />
            </span>
          </span>
        </button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}