"use client";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function EnterpriseHigherTalent() {
  return (
<>
  <div className="w-full max-w-7xl font-sans mx-auto mb-20 px-4">
  <div className="mb-10 text-center lg:text-left">
    <h1 className="text-[32px] sm:text-[36px] lg:text-[48px]  max-md:leading-[1.1] font-[600] leading-snug">
      Hire talent on Upwork for your next AI Project
    </h1>
    <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-[400] mt-3">
      Tell us what you need and we’ll help you find the right talent to make it happen.
    </p>
  </div>

  <div className="w-full flex flex-col lg:flex-row justify-center gap-6">
    <div className="w-full lg:w-[55%]">
      <div>
        <h2 className="text-[22px] sm:text-[24px] lg:text-[28px] font-semibold">
          Personalized chatbot or agent
        </h2>
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#d9d9d9] mt-2">
          Increase efficiency across your teams and enhance your internal operations with chatbots built for your business.
        </p>
        <hr className="w-full h-[1px] mt-7 bg-white" />
      </div>

      <div className="mt-6">
        <h2 className="text-[22px] sm:text-[24px] lg:text-[28px] font-semibold">
          High-quality labeled data
        </h2>
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#d9d9d9] mt-2">
          Improve the responses of custom large language models (LLMs) with proprietary labeled data.
        </p>
        <hr className="w-full h-[1px] mt-7 bg-white" />
      </div>

      <div className="mt-6">
        <h2 className="text-[22px] sm:text-[24px] lg:text-[28px] font-semibold">
          AI solutions delivered by Expert-Vetted talent
        </h2>
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#d9d9d9] mt-2">
          Achieve your goals faster by consulting with prescreened AI professionals or bringing them onto your project.
        </p>
      </div>

      <div className="mt-6 flex justify-center lg:justify-start">
        <button className="group text-[16px] sm:text-[18px] text-black w-full max-w-[400px] py-[12px] px-[24px] sm:px-[46px] rounded-xl hover:bg-[#7ab503] cursor-pointer bg-[#95df00] overflow-hidden">
          <span className="inline-flex items-center transition-transform duration-300 group-hover:-translate-x-1">
            Let's Talk
            <span className="ml-2 opacity-0 translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              <HiOutlineArrowRight />
            </span>
          </span>
        </button>
      </div>
    </div>

    <div className="w-full lg:w-[45%] mt-6 lg:mt-0">
      <img
        src="/Images/PICTURE2.png"
        alt="image"
        className="aspect-[1.32] object-cover rounded-[24px] w-full"
      />
    </div>
  </div>
</div>
</>
  )
}