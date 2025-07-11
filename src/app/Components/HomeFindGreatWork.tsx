"use client";
import Image from "next/image";

export default function MainHome() {
    return(
<>
<div className="min-h-screen bg-white">
  <main className="max-w-7xl font-sans mx-auto px-4 sm:px-6 py-12 sm:py-16">
    <div className="flex flex-col-reverse lg:flex-row items-stretch">
      
      <div className="w-full lg:w-1/2 bg-[#086add] text-white pt-6 pb-8 px-6 sm:px-8 flex flex-col justify-start 
                      rounded-b-lg lg:rounded-b-none border-white lg:border-l-4">
        <p className="text-[24px] font-[600] mb-2">For talent</p>

        <h1 className="text-[40px] sm:text-[48px] lg:text-[64px] font-[600] leading-[1.1] mb-4">
          Find great<br />work
        </h1>

        <p className="mb-6 text-[18px] lg:text-[20px]">
          Meet clients you’re excited to work with and take your career or
          business to new heights.
        </p>

        <hr className="border-t border-white mb-4 sm:mt-0 md:mt-20" />

        <div className="flex flex-col lg:flex-row gap-4 mb-6 text-[16px]">
          <p className="flex-1">Find opportunities for every stage of your freelance career</p>
          <p className="flex-1">Control when, where, and how you work</p>
          <p className="flex-1">Explore different ways to earn</p>
        </div>

        <button className="bg-white cursor-pointer text-blue-600 hover:bg-[#a5a5a5] font-[500] px-[12px] py-[6px] rounded-lg w-full sm:w-[50%] lg:w-[35%]">
          Find opportunities
        </button>
      </div>

      <div className="w-full lg:w-1/2 overflow-hidden 
                      rounded-t-lg lg:rounded-t-none ">
        <Image
          src="/find-great-work@2x.webp"
          alt="Freelancer working"
          width={800}
          height={600}
          className="w-full h-[240px] sm:h-[350px] lg:h-full object-cover"
        />
      </div>
      
    </div>
  </main>
</div>
</>
);
}