"use client";

import { HiOutlineArrowRight } from "react-icons/hi";




export default function EnterpriseHigherTalent() {
  return (
    <>
         <div className="w-full max-w-7xl font-sans mx-auto mb-14">
            <div className="mb-10">
                <h1 className="text-[48px] font-[500]">Hire talent on Upwork for your next AI Project</h1>
                <p className="text-[20px] font-[400]">Tell us what you need and we’ll help you find the right talent to make it happen.</p>
            </div>
            <div className="w-full flex justify-center gap-6">
                <div className="w-[55%]">
                    <div>
                        <h2 className="text-[28px]">Personalized chatbot or agent</h2>
                        <p className="text-[20px] text-[#d9d9d9] mt-2">Increase efficiency across your teams and enhance your internal operations with chatbots built for your business.</p>
                        <hr  className="w-full h-[1px] mt-7 bg-white"/>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-[28px]">High-quality labeled data</h2>
                        <p className="text-[20px] text-[#d9d9d9] mt-2">Improve the responses of custom large language models (LLMs) with proprietary labeled data.</p>
                        <hr  className="w-full h-[1px] mt-7 bg-white"/>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-[28px]">AI solutions delivered by Expert-Vetted talent</h2>
                        <p className="text-[20px] text-[#d9d9d9] mt-2">Achieve your goals faster by consulting with prescreened AI professionals or bringing them onto your project.</p>
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
                <div className="w-[45%]">
                    <img src="/Images/PICTURE2.png" alt="image" className="aspect-[1.32] object-cover rounded-[24px] w-full relative bottom-auto" />
                </div>
            </div>
         </div>
    </>
  )
}